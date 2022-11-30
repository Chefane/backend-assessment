
import { Request, Response } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import subscriberFeedback from '../models/feedbackModel';
dotenv.config();

const FeedbackData = async (req: Request, res: Response) => {
  const { subscriber_name } = req.body;
  const { subscriber_email } = req.body;
  const { subscriber_feedback } = req.body;
  const { feedback_date } = req.body;


  const feedbackData = new subscriberFeedback({
      _id: new mongoose.Types.ObjectId(),
      subscriber_name,
      subscriber_email,
      subscriber_feedback,
      feedback_date,
  });

 

  if (!(subscriber_name && subscriber_email && subscriber_feedback)) {
    res.status(400).send("All input fields are required");
  } 
 else {
    return feedbackData
      .save()
      .then((feedbackData) => res.status(201).json({ feedbackData}))
      .catch((error) => res.status(500).json({ error }));
  }
};

export default {
   FeedbackData
  };