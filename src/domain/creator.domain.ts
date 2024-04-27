export class Creator {
    id?: number;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    suffix?: string;
    fullName?: string;
    modified?: Date;
    resourceURI?: string;
    urls?: { type?: string, url?: string }[];
    thumbnail?: string;
    editable?: boolean;

    constructor(
        id?: number,
        firstName?: string,
        middleName?: string,
        lastName?: string,
        suffix?: string,
        fullName?: string,
        modified?: Date,
        resourceURI?: string,
        urls?: { type: string, url: string }[],
        thumbnail?: { path?: string, extension?: string },
        editable?: boolean
    ) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.suffix = suffix;
        this.fullName = fullName;
        this.modified = modified;
        this.resourceURI = resourceURI;
        this.urls = urls;
        this.thumbnail = `${thumbnail?.path}.${thumbnail?.extension}`;
        this.editable = editable;
    }
}
