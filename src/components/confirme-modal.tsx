import React, { ReactNode } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface ConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: ReactNode;
    buttonText: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    open, onClose, onConfirm, title, message, buttonText
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                backgroundColor: 'white', padding: 3, boxShadow: 24, borderRadius: 2
            }}>
                <Typography id="modal-title" variant="h6" component="h2"sx={{fontWeight:"bold"}}>{title}</Typography>
                <Typography id="modal-description" sx={{ mt: 2 }}>
                    {message}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                    <Button
                        onClick={onConfirm}
                        variant="contained"
                        sx={{
                            width: '100%',
                            backgroundColor: '#EC6724',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#D55A1C',
                            },
                        }}
                    >
                        {buttonText}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ConfirmationModal;
