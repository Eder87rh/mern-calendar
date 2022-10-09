export interface IUser {
  _id: string;
  name: string;
}

export interface IEvent {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor: string;
  user: IUser;
}
