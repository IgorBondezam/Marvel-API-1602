export class ComicReq {
    public digitalId: number;
    public title: string;
    public issueNumber: number;
    public variantDescription: string;
    public description: string;
    public modified: Date;
    public isbn: string;
    public upc: string;
    public diamondCode: string;
    public ean: string;
    public issn: string;
    public format: string;
    public textObjects: { type: string, language: string, text: string }[];
    public resourceURI: string;
    public urls: { type: string, url: string }[];
    public dates: { type: string, date: Date }[];
    public prices: { type: string, price: number }[];
    public thumbnail: { path: string, extension: string };
    public images: { path :string, extension: string }[];
    public editable: boolean;
}
