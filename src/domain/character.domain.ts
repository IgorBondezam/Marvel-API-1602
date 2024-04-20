class Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: { type: string, url: string }[];
    thumbnail: { path: string, extension: string };

    constructor(
        id: number,
        name: string,
        description: string,
        modified: Date,
        resourceURI: string,
        urls: { type: string, url: string }[],
        thumbnail: { path: string, extension: string }
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.modified = modified;
        this.resourceURI = resourceURI;
        this.urls = urls;
        this.thumbnail = thumbnail;
    }
}
