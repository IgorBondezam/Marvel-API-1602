import { Schema, model } from 'mongoose';
import identifierRepository from '../repository/identifier.repository';

const creatorSchema = new Schema(
    {
        id: {
          type: Number,
          index: true,
        },
        firstName: String,
        middleName: String,
        lastName: String,
        suffix: String,
        fullName: String,
        modified: Date,
        resourceURI: String,
        urls: Array<
          {
            type: String,
            url: String
          }
        >,
        
        thumbnail: {
          path: String,
          extension: String
        },
        editable: Boolean
      }, {
    timestamps: true
});

creatorSchema.pre('save', async function(next) {
  const identifiers = await identifierRepository.incrementCreatorId();
  this.id = identifiers.creatorId;
  next();
});

export default model('Creator', creatorSchema);
