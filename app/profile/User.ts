export interface IUser{
    id: string,
    username: string,
    profilePictureUrl:string,
    firstName: string,
    lastName: string,
    subscribers: IUser[],
    subscribed: IUser[]
}