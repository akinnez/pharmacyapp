export interface IData{
    label: string,
    data: number[],
    borderColor:string
  }

export interface ISummary{
    info: string,
    value: number
  }
export interface IActivity{
    username: string,
    name: string,
    activity:string,
    duration: number,
    lastSeen: number
  }
  interface Logs{
    activity: string;
    logInTime: Date | number ;
    logOutTime:Date | number ;
  }
  export interface IProduct{
    name: string;
    category: string;
    qtty: number;
    price: number;
  }
  export interface ITransaction{
    transactionId:number;
    transactionDate:Date | number;
    product:IProduct[];
  }
export interface IUser{
    img:string,
    name: string,
    username:string,
    age:number,
    email:string,
    phoneNo:number;
    logs: [Logs];
    transaction:ITransaction[]
}
export interface IProductlist {
  name: string,
  companyName:string,
  itemCode:number,
  qtty: number,
  price: number,
  mfd:string,
  exp:string
}