import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, Button, Box, Typography, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createUser, updateUser } from '../services/api/userService';  
import Notification from './alert';
import { ModalProps } from '../models/modalDTO';

const CustomModal: React.FC<ModalProps> = ({ open, onClose, title, client }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState<number>(0);
    const [companyValuation, setCompanyValuation] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationSeverity, setNotificationSeverity] = useState<'success' | 'error'>('success');

    const handleClear = () => {
        setName('');
        setSalary(0);
        setCompanyValuation(0);
        setError(null);
    };

    const handleCreateUser = async () => {
        if (!name || !salary || !companyValuation) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        setIsLoading(true);
        try {
            let user;
            if (client) {
                user = await updateUser(client.id, { name, salary, companyValuation });
                setNotificationMessage(`O cliente ${name} foi atualizado com sucesso.`);
            } else {
                user = await createUser({ name, salary, companyValuation });
                setNotificationMessage(`O cliente ${name} foi criado com sucesso.`);
            }

            setNotificationSeverity('success');
            setNotificationOpen(true);
            handleClear();
            onClose();
            return user;
        } catch (error) {
            setError('Erro ao salvar o usuário: ' + error);
            setNotificationMessage(`Erro ao salvar o cliente: ${error}`);
            setNotificationSeverity('error');
            setNotificationOpen(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSalary(value ? parseFloat(value) : 0);
    };

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCompanyValuation(value ? parseFloat(value) : 0);
    };

    const handleCloseNotification = () => {
        setNotificationOpen(false);
    };

    useEffect(() => {
        if (open) {
            if (client) {
                setName(client.name);
                setSalary(client.salary);
                setCompanyValuation(client.companyValuation);
                setNotificationMessage(`Editando cliente: ${client.name}`);
            } else {
                handleClear();
                setNotificationMessage('Criando novo cliente');
            }
        } else {
            handleClear();
        }
    }, [client, open]);

    const handleClose = () => {
        onClose();
    };

    return (
        <Box>
            <Dialog open={open} onClose={handleClose}>
                <Box
                    sx={{
                       
                        width: {
                            xs: 200, 
                            sm: 200, 
                            md: 500, 
                        },
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: 3,
                        boxShadow: 24,
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            position: 'relative',
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                            {title}
                        </Typography>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: 30,
                                height: 30,
                                opacity: 0.7,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 1 }}>
                        <TextField
                            label="Digite o nome:"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Digite o salário:"
                            value={salary}
                            onChange={handleSalaryChange}
                            fullWidth
                        />
                        <TextField
                            label="Digite o valor da empresa:"
                            value={companyValuation}
                            onChange={handleCompanyChange}
                            fullWidth
                        />
                        {error && <Typography color="error">{error}</Typography>}
                    </Box>

                    <DialogActions
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            paddingTop: 2,
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleCreateUser}
                            fullWidth
                            sx={{
                                maxWidth: '100%',
                                backgroundColor: '#EC6724',
                            }}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Salvando...' : client ? 'Salvar alterações' : 'Criar cliente'}
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>

            <Notification
                open={notificationOpen}
                message={notificationMessage}
                severity={notificationSeverity}
                onClose={handleCloseNotification}
            />
        </Box>
    );
};

export default CustomModal;
