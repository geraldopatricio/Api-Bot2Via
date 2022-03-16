export interface IAddress {
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais?: string;
    cep: string;
    numero?: number;
    complemento?: string;
}
