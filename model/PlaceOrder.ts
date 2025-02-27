export  default class Order {
    orderId!:string;
    totalPayment!:number;
    customerName!:string;
    contactNo!:number;
    address!:string;

    constructor(totalPayment:number,customerName:string, contactNo:number, address:string) {
        this.totalPayment = totalPayment;
        this.customerName = customerName;
        this.contactNo=contactNo;
        this.address = address;

    }

}