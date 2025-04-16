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
    gadgetId: string;
    gadget:string;
    logisticsId: string;
    issueDescription: string;
    createdAt: string;
    updatedAt: string;
    pickupDate: string;
    gadgetImages: string[];
    status: OrderStatus,
    paymentStatus: "PENDING",
    orderDeliveryId: string
}
export enum OrderStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}