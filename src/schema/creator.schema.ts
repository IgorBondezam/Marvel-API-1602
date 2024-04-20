import { Schema, model } from 'mongoose';

const comics = new Schema(
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
        series: {
          available: Number,
          returned: Number,
          collectionURI: String,
          items: [
            {
              resourceURI: String,
              name: String
            }
          ]
        },
        stories: {
          available: Number,
          returned: Number,
          collectionURI: String,
          items: [
            {
              resourceURI: String,
              name: String,
              type: String
            }
          ]
        },
        comics: {
          available: Number,
          returned: Number,
          collectionURI: String,
          items: [
            {
              resourceURI: String,
              name: String
            }
          ]
        },
        events: {
          available: Number,
          returned: Number,
          collectionURI: String,
          items: [
            {
              resourceURI: String,
              name: String
            }
          ]
        }
      }, {
    timestamps: true
});

export default model('Comics', comics);
