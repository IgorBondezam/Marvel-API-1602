import { Schema, model } from 'mongoose';

const identifierSchema = new Schema(
    {
        creatorId: Number,
        comicId: Number,
        characterId: Number,
    }, {
    timestamps: true
});

export default model('identifier', identifierSchema);
