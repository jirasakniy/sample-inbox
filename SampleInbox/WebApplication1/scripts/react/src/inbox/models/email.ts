export interface IEmail {
    from: IContact;
    subject: string;
    body: string;
    recievedDate: Date;
    isRead: boolean;
}


export interface IContact {
    name: string;
    email: string;
}

