export class CharacterRes {
    public id: number;
    public name: string;
    public description: string;
    public modified: Date;
    public resourceURI: string;
    public urls?: { type?: string, url?: string }[];
    public thumbnail: string;
    public editable: boolean;
}
