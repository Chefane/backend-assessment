import mongoose, { Schema, Document } from "mongoose";

const date = new Date();

export interface IFeedback {
  subscriber_name: string;
  subscriber_email: string;
  subscriber_feedback: string;
  feedback_date: string;
}

export interface IFeedbackModel extends IFeedback, Document {}

const FeedbackSchema: Schema = new Schema({
  subscriber_name: { type: String, required: true },
  subscriber_email: { type: String, required: true },
  subscriber_feedback: { type: String, required: true },
  feedback_date: { type: String, default: date.toDateString() },
});

export default mongoose.model<IFeedbackModel>(
  "Subscribers Feedback",
  FeedbackSchema
);