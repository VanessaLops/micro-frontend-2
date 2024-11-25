export interface NotificationProps {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
    onClose: () => void;
}
