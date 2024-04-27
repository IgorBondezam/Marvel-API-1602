export class CreatorRes {
    public id: number;
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public suffix: string;
    public fullName: string;
    public modified: Date;
    public resourceURI: string;
    public urls: { type?: string, url?: string }[];
    public thumbnail: string;
    public editable: boolean;
}
