import { Schema, model } from 'mongoose';

const comicSchema = new Schema(
    {
        id: Number,
        digitalId: Number,
        title: String,
        issueNumber: Number,
        variantDescription: String,
        description: String,
        modified: Date,
        isbn: String,
        upc: String,
        diamondCode: String,
        ean: String,
        issn: String,
        format: String,
        textObjects: Array<
            {
                type: String,
                language: String,
                text: String
            }
        >,
        resourceURI: String,
        urls: Array<
            {
                type: String,
                url: String
            }
        >,
        dates: Array<
            {
                type: String,
                date: Date
            }
        >,
        prices: Array<
            {
                type: String,
                price: Number
            }
        >,
        thumbnail: String,
        images: Array<
            {
                path: String,
                extension: String
            }
        >,
        editable: Boolean
    }, {
    timestamps: true
});

export default model('Comic', comicSchema);
