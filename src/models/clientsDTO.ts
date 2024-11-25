export interface Cliente {
    id: number;
    name: string;
    salary: number;
    companyValuation: number;
}


export interface ResponseData {
    clients: Cliente[];
    currentPage: number;
    totalPages: number;
}

