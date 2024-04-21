import { Schema, model } from 'mongoose';

const characterSchema = new Schema(
{
    id: Number,
    name: String,
    description: String,
    modified: Date,
    resourceURI: String,
    urls: [
        {
        type: String,
        url: String
        }
    ],
    thumbnail: {
        path: String,
        extension: String
    },
    editable: Boolean
}, {
    timestamps: true
});

export default model('Character', characterSchema);
