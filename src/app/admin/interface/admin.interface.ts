import { Time, DatePipe } from "@angular/common";

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
  interface ILogs{
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
    date:DatePipe;
    time:Time;
    total:number;
    transaction:IProduct[];
  }
export interface IUserData extends IUser{
  logs: ILogs[];
  transaction: ITransaction[];
}
export interface IUser{
    img:string,
    name: string,
    username:string,
    age:number,
    email:string,
    phoneNo:number
}
export interface IProductlist {
  name: string,
  companyName:string,
  itemCode:number,
  category?:string,
  forms?:string,
  size?:string,
  qtty: number,
  price: number,
  mfd:Date,
  exp:Date
}