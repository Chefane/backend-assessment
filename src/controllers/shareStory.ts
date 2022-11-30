import shareStorySchema from "../models/shareStoryModel";
import { Request, Response } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const shareStory = async (req: Request, res: Response) => {
  const { publisher_name, author_name, story, createdAt } = req.body;

  const storyData = new shareStorySchema({
    _id: new mongoose.Types.ObjectId(),
    publisher_name,
    author_name,
    story,
    createdAt,
  });

  if (!(publisher_name && author_name && story)) {
    res.status(400).send("All input fields are required");
  }

  const existingSharedStory = await shareStorySchema.findOne({
    story,
  });

  if (existingSharedStory) {
    res.status(400).send("Story already shared");
  } else {
    return storyData
      .save()
      .then((storyData) =>
        res
          .status(201)
          .json({ Message: "Story shared Successfully", storyData })
      )
      .catch((error) => res.status(500).json({ error }));
  }
};

const displayStory = async (req: Request, res: Response) => {

  const storyInfo = await shareStorySchema.findOne(
    { },
    { 'publisher_name': 1, 'author_name': 1,'story': 1, 
    'createdAt': 1,  _id: 1 }
  );
  if (!storyInfo) {
    res.status(404).send("Story does not exist");
  } else {
    res.status(200).send(storyInfo);
  }
};


export default {
  shareStory,
  displayStory
};
