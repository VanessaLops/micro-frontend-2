
export type SelectedTab = 'clientes' | 'clientesSelecionados' | 'selectedClients' | 'home';

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setSelectedTab: (tab: SelectedTab) => void;
  selectedTab?: SelectedTab; 
}
