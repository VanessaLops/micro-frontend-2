import { Cliente } from "./clientsDTO";

export interface ModalProps {
  open:boolean;
  onClose: () => void;
  title: string;
  refreshUsers?: () => void;
  userId: number;
  client?: Cliente | null;
  message?:string;
  severity?:string;
}
