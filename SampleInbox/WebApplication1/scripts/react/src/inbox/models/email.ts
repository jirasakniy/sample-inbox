export interface IEmail {
    from: IContact;
    subject: string;
    body: string;
    recievedDate: Date;
}


export interface IContact {
    name: string;
    email: string;
}

