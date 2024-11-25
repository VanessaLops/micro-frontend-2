import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { CheckCircle, Error } from '@mui/icons-material';
import { NotificationProps } from '../models/notificaitionDTO';


const Notification: React.FC<NotificationProps> = ({ open, message, severity, onClose }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert
                onClose={onClose}
                severity={severity}
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: severity === 'success' ? '#4caf50' : '#f44336',
                }}
                iconMapping={{
                    success: <CheckCircle sx={{ fontSize: 20 }} />,
                    error: <Error sx={{ fontSize: 20 }} />,
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
