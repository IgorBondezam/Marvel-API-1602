export class Comic{
    id?: number;
    digitalId?: number;
    title?: string;
    issueNumber?: number;
    variantDescription?: string;
    description?: string;
    modified?: Date;
    isbn?: string;
    upc?: string;
    diamondCode?: string;
    ean?: string;
    issn?: string;
    format?: string;
    textObjects?: { type?: string, language?: string, text?: string }[];
    resourceURI?: string;
    urls?: { type?: string, url?: string }[];
    dates?: { type?: string, date?: Date }[];
    prices?: { type?: string, price?: number }[];
    thumbnail?: string;
    images?: string[];
    editable?: boolean;

    constructor(
        id?: number,
        digitalId?: number,
        title?: string,
        issueNumber?: number,
        variantDescription?: string,
        description?: string,
        modified?: Date,
        isbn?: string,
        upc?: string,
        diamondCode?: string,
        ean?: string,
        issn?: string,
        format?: string,
        textObjects?: { type?: string, language?: string, text?: string }[],
        resourceURI?: string,
        urls?: { type?: string, url?: string }[],
        dates?: { type?: string, date?: Date }[],
        prices?: { type?: string, price?: number }[],
        thumbnail?: { path?: string, extension?: string },
        images?: { path?: string, extension?: string }[],
        editable?: boolean
    ) {
        this.id = id;
        this.digitalId = digitalId;
        this.title = title;
        this.issueNumber = issueNumber;
        this.variantDescription = variantDescription;
        this.description = description;
        this.modified = modified;
        this.isbn = isbn;
        this.upc = upc;
        this.diamondCode = diamondCode;
        this.ean = ean;
        this.issn = issn;
        this.format = format;
        this.textObjects = textObjects;
        this.resourceURI = resourceURI;
        this.urls = urls;
        this.dates = dates;
        this.prices = prices;
        this.thumbnail = `${thumbnail?.path}.${thumbnail?.extension}`;
        this.images = images?.map(i => `${i?.path}.${i?.extension}`);
        this.editable = editable;
    }
    

}