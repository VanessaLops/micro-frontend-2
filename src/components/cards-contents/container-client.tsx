import { Box, Card, Grid, IconButton, MenuItem, Pagination, Select, SelectChangeEvent, Typography, CircularProgress, ButtonBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import { carddStyles } from './../../util/designer-system';
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { deleteUser, getUsers } from "../../services/api/userService";
import { Cliente, ResponseData } from "../../models/clientsDTO";
import { HeaderProps } from "../../models/headerDTO";
import CustomModal from "../modal";
import Notification from "../alert";
import ConfirmationModal from "../confirme-modal";
import RemoveIcon from '@mui/icons-material/Remove';

const Cards: React.FC<HeaderProps> = ({ selectedTab }) => {
    const isClientes = selectedTab === 'clientes';
    const [clientesPorPagina, setClientesPorPagina] = useState(16);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [totalClientes, setTotalClientes] = useState<ResponseData>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [clientesSelecionados, setClientesSelecionados] = useState<Cliente[]>([]);
    const [clienteParaEditar, setClienteParaEditar] = useState<Cliente | null>(null);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationSeverity, setNotificationSeverity] = useState<'success' | 'error'>('success');

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setClienteParaEditar(null);
        setOpen(false);
        refreshUsers();
    };

    const handleAddCliente = (cliente: Cliente) => {
        setClientesSelecionados((prevSelected) => {

            const isAlreadySelected = prevSelected.some((item) => item.id === cliente.id);

            if (isAlreadySelected) {

                return prevSelected.filter((item) => item.id !== cliente.id);
            } else {

                return [...prevSelected, cliente];
            }
        });
    };


    const handleChange = (event: SelectChangeEvent<number>) => {
        setClientesPorPagina(Number(event.target.value));
        setPaginaAtual(1);
    };

    const handleChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
        setPaginaAtual(page);
    };


    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const [clienteParaExcluir, setClienteParaExcluir] = useState<Cliente | null>(null);


    const handleOpenConfirmationModal = (cliente: Cliente) => {
        setClienteParaExcluir(cliente);
        setOpenConfirmationModal(true);
    };


    const handleCloseConfirmationModal = () => {
        setOpenConfirmationModal(false);
        setClienteParaExcluir(null);
    };

    const handleConfirmDelete = async () => {
        if (!clienteParaExcluir) return;

        setIsLoading(true);
        try {
            await deleteUser(clienteParaExcluir.id);
            setNotificationMessage(`O cliente ${clienteParaExcluir.name} foi excluído com sucesso.`);
            setNotificationSeverity('success');
            setNotificationOpen(true);
            refreshUsers();
        } catch (error) {
            setNotificationMessage(`Erro ao excluir o cliente: ${error}`);
            setNotificationSeverity('error');
            setNotificationOpen(true);
        } finally {
            setIsLoading(false);
            handleCloseConfirmationModal();
        }
    };



    const handleEditarCliente = (cliente: Cliente) => {
        setClienteParaEditar(cliente);
        handleOpen();
    };


    const refreshUsers = async () => {
        setIsLoading(true);
        try {
            const response = await getUsers(paginaAtual, clientesPorPagina);

            if (response && Array.isArray(response.clients)) {

                setClientes(response.clients);
                setTotalClientes({
                    clients: response.clients,
                    currentPage: response.currentPage || 1,
                    totalPages: response.totalPages || 1,
                });
            } else {

                setClientes([]);
                setTotalClientes(undefined);
            }
        } catch (error) {
            console.error("Erro ao carregar os clientes: ", error);
            setClientes([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refreshUsers();
    }, [paginaAtual, clientesPorPagina]);



    return (
        <Box sx={carddStyles.container}>
            <Box sx={carddStyles.header}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width: '100%',
                    gap: 2,
                }}>
                    <Typography sx={{
                        ...carddStyles.title,
                        fontSize: {
                            xs: '12px',
                            sm: '16px',
                            md: '18px',
                        },
                        width: '100%',
                    }}>
                        {isClientes ? `${totalClientes?.clients?.length || 0} Clientes Encontrados` : 'Clientes selecionados'}
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                    }}>
                        <Typography sx={{
                            ...carddStyles.selectContainer,
                            fontSize: {
                                xs: '12px',
                                sm: '16px',
                                md: '18px',
                            },
                            marginRight: 1,
                        }}>
                            Clientes Por Página:
                        </Typography>

                        <Select
                            value={clientesPorPagina}
                            onChange={handleChange}
                            sx={{
                                ...carddStyles.select,
                                fontSize: {
                                    xs: '12px',
                                    sm: '16px',
                                    md: '18px',
                                },
                                minWidth: '80px',
                            }}
                        >
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </Box>

            <Box>
                {isLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <CircularProgress sx={{ color: "#EC6724" }} />
                    </Box>
                ) : (
                    <Grid container spacing={2}>
                        {isClientes ? (
                            <>
                                {clientes.map((cliente) => (
                                    <Grid item xs={12} sm={6} md={3} key={cliente.id}>
                                        <Card sx={{ width: '100%', maxWidth: 500 }}>

                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 3 }}>
                                                <Typography>{cliente.name}</Typography>
                                                <Typography>
                                                    R$ {cliente.salary.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </Typography>
                                                <Typography>
                                                    R$ {cliente.companyValuation.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center', mx: 2 }}>
                                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-around', width: 300, alignItems: "center" }}>
                                                    <IconButton
                                                        disabled={isLoading}
                                                        onClick={() => handleAddCliente(cliente)}
                                                    >
                                                        <AddIcon
                                                            aria-label={`Adicionar Cliente ${cliente.name}`}
                                                            sx={{
                                                                width: 30,
                                                                height: 30,
                                                                color: clientesSelecionados.some(item => item.id === cliente.id) ? "#EC6724" : "default"
                                                            }}
                                                        />
                                                    </IconButton>

                                                    <IconButton onClick={() => handleEditarCliente(cliente)}>
                                                        <ModeEditOutlineOutlinedIcon sx={{ height: 30 }} />
                                                    </IconButton>
                                                    <IconButton sx={{ width: 30, height: 30 }} onClick={() => handleOpenConfirmationModal(cliente)}>
                                                        <DeleteOutlineIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </>
                        ) : (
                            <>
                                {!clientesSelecionados || clientesSelecionados.length === 0 ? (
                                    <>
                                        <Typography>Nenhum cliente selecionado</Typography>
                                        <ButtonBase sx={carddStyles.button}>Adicionar</ButtonBase>
                                    </>
                                ) : (
                                    <>
                                        {clientesSelecionados.map((cliente) => (
                                            <Grid item xs={12} sm={6} md={3} key={cliente.id}>
                                                <Card sx={carddStyles.card}>
                                                    <Typography>{cliente.name}</Typography>
                                                    <Typography>
                                                        R$ {cliente.salary.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </Typography>
                                                    <Typography>
                                                        R$ {cliente.companyValuation.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', mx: 2, width: 500 }}>
                                                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-around', width: 300, alignItems: "center" }}>
                                                            <IconButton
                                                                sx={{ width: 30, height: 30 }}
                                                                onClick={() => handleAddCliente(cliente)}
                                                            >
                                                                {clientesSelecionados.some(item => item.id === cliente.id) ? (
                                                                    <RemoveIcon sx={{ color: "#EC6724" }} />
                                                                ) : (
                                                                    <AddIcon sx={{ color: "default" }} />
                                                                )}
                                                            </IconButton>

                                                        </Box>
                                                    </Box>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </>
                                )}
                            </>
                        )}
                    </Grid>
                )}
            </Box>

            <Box sx={carddStyles.paginationWrapper}>
                {isClientes && (
                    <ButtonBase sx={carddStyles.button} onClick={handleOpen}>
                        Criar cliente
                    </ButtonBase>
                )}
                <Pagination
                    sx={carddStyles.pagination}
                    count={totalClientes?.totalPages || 0}
                    page={paginaAtual}
                    onChange={handleChangePage}
                />
            </Box>
            <CustomModal
                open={open}
                onClose={handleClose}
                title={clienteParaEditar ? "Editar cliente:" : "Criar cliente:"}
                client={clienteParaEditar || null}
                refreshUsers={refreshUsers}
                userId={0}
            />
            <Notification
                open={notificationOpen}
                message={notificationMessage}
                severity={notificationSeverity}
                onClose={() => setNotificationOpen(false)}
            />
            <ConfirmationModal
                open={openConfirmationModal}
                onClose={handleCloseConfirmationModal}
                onConfirm={handleConfirmDelete}
                title="Excluir cliente:"
                message={
                    <>Você está prestes a excluir o cliente: <strong>{clienteParaExcluir?.name}</strong></>
                }
                buttonText="Excluir cliente"
            />
        </Box >
    );
};


export default Cards;


