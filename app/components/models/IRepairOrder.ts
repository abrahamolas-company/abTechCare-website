export interface RepairOrderResponse {
    id: number;
    orderId: number;
    userId: number;
    issueDescription: string;
    gadgetImage: null;
    orderStatus: OrderStatus;
    paymentStatus: string
}
export interface UserRepairOrdersResponse {
    id: number;
    orderId: string;
    price: number;
    issueDescription: string;
    createdAt: string;
    gadgetBrand: string;
    gadgetModel: string;
    status: OrderStatus
}
export interface UserRepairHistoryResponse {
    orderId: string;
    price: number;
    orderCreatedAt: string;
    faultDescriptions: string;
    deliveryStatus: DeliveryStatus;
    orderLogisticsId: string;
}

export enum OrderStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}
export enum DeliveryStatus {
    PENDING_PICKUP = "PENDING_PICKUP,",
    OUT_FOR_PICKUP = "OUT_FOR_PICKUP,",
    PICKED_UP = "PICKED_UP,",
    IN_TRANSIT = "IN_TRANSIT,",
    OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY,",
    DELIVERED = "DELIVERED,",
    DELIVERY_FAILED = "DELIVERY_FAILED,",
    RETURNED = "RETURNED,",
    CANCELLED = "CANCELLED"
}

