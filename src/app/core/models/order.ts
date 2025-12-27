export type OrderStatus = 'pendente'
                         |'confirmado'
                         |'no_caminho'
                         |'entregue'
                         |'cancelado'

export interface Order {
    id:string;
    clienteId:string;
    produtorId:string;
    status:OrderStatus;
    createdAt: Date
}