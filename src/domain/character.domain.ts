export class Character {
    public id?: number;
    public name?: string;
    public description?: string;
    public modified?: Date;
    public resourceURI?: string;
    public urls?: { type?: string, url?: string }[];
    public thumbnail?: string;
    public editable?: boolean;

    constructor(
        id?: number,
        name?: string,
        description?: string,
        modified?: Date,
        resourceURI?: string,
        urls?: { type?: string, url?: string }[],
        thumbnail?: { path?: string, extension?: string },
        editable?: boolean
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.modified = modified;
        this.resourceURI = resourceURI;
        this.urls = urls;
        this.thumbnail = `${thumbnail.path}.${thumbnail.extension}`;
        this.editable = editable;
    }
}
