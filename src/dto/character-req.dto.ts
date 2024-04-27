export class CharacterReq {
    public name: string;
    public description: string;
    public modified: Date;
    public resourceURI: string;
    public urls: { type: string, url: string }[];
    public thumbnail: { path: string, extension: string };
    public editable: boolean;
}
