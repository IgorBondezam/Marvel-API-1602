import { Schema, model } from 'mongoose';

const characterSchema = new Schema(
{
    id: {
        type: Number,
        index: true,
      },
    name: String,
    description: String,
    modified: Date,
    resourceURI: String,
    urls: Array<{
        type: String,
        url: String
        }>,
    thumbnail: String,
    editable: Boolean
}, {
    timestamps: true
});

export default model('Character', characterSchema);
