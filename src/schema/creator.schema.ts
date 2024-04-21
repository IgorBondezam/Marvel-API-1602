import { Schema, model } from 'mongoose';

const creatorSchema = new Schema(
    {
        id: Number,
        firstName: String,
        middleName: String,
        lastName: String,
        suffix: String,
        fullName: String,
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

export default model('Creator', creatorSchema);
