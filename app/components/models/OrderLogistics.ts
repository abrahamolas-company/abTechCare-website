export interface CreateOrderPickup{
    orderId : string,
    country : string,
    state : string,
    lga : string,
    street : string,
    pickupDate : string,
    pickupTime : string,
    phoneNumber : string,
    paymentOption : PaymentOption
}

export enum PaymentOption{
    OUTRIGHT="OUTRIGHT",
    FLEXIBLE_PAYMENT="FLEXIBLE_PAYMENT"
}