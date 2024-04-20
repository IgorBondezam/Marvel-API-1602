import { Schema, model } from 'mongoose';

const comics = new Schema(
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
        textObjects: [
            {
                type: String,
                language: String,
                text: String
            }
        ],
        resourceURI: String,
        urls: [
            {
                type: String,
                url: String
            }
        ],
        dates: [
            {
                type: String,
                date: Date
            }
        ],
        prices: [
            {
                type: String,
                price: Number
            }
        ],
        thumbnail: {
            path: String,
            extension: String
        },
        images: [
            {
                path: String,
                extension: String
            }
        ]
    }, {
    timestamps: true
});

export default model('Comics', comics);
