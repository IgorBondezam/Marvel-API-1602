import { Schema, model } from 'mongoose';
import identifierRepository from '../repository/identifier.repository';

const characterSchema = new Schema(
    {
        id: Number,
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

characterSchema.pre('save', async function (next) {
    const identifiers = await identifierRepository.incrementCharacterId();
    this.id = identifiers.characterId;
    next();
});

export default model('Character', characterSchema);
