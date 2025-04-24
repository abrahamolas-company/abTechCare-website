export interface RepairOrderResponse{
    id: number;
    orderId: number;
    userId: number;
    issueDescription: string;
    gadgetImage: null;
    orderStatus: OrderStatus;
    paymentStatus: string
}
export interface UserRepairOrdersResponse{
    id: number;
    orderId: string;
    price:number;
    issueDescription: string;
    createdAt: string;
    gadgetBrand: string;
    gadgetModel: string;
    status: OrderStatus
}
export enum OrderStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}