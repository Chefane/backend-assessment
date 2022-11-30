import mongoose, { Schema, Document } from "mongoose";

const date = new Date();

export interface IStory {
  publisher_name: string;
  author_name: string;
  story: string;
  publish_date: string;
}

export interface IPublishStoryModel extends IStory, Document {}

const PublishStoriesSchema: Schema = new Schema({
  publisher_name: { type: String, required: true },
  author_name: { type: String, required: true },
  story: { type: String, required: true },
  publish_date: { type: String, default: date.toDateString() },
});

export default mongoose.model<IPublishStoryModel>(
  "Published Stories",
  PublishStoriesSchema
);
