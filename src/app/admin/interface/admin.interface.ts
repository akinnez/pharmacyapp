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
export interface IUser{
    name: string,
    username:string,
    age:number,
    email:string
}