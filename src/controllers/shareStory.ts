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

  const storyInfo = await shareStorySchema.find(
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

const searchStory = async (req: Request, res: Response) => {
  const id = req.params._id;

  const storyInfo = await shareStorySchema.findOne(
    {'_id':  id},
    { 'publisher_name': 1, 'author_name': 1,'story': 1, 
    'createdAt': 1 }
  );
  if (!storyInfo) {
    res.status(404).send("Story does not exist");
  } else {
    res.status(200).send(storyInfo);
  }
};

const updatePublishedStory = async (req: Request, res: Response) => {
  const id = req.params._id;

  const { story } = req.body;

  
  const storyInfo = await shareStorySchema.findOneAndUpdate(
    { '_id': id },
    { 'story': story}
  );

  if (!storyInfo) {
    res.status(404).send("Story Id does not exist");
  } else {
    res.status(200).send("Story updated Successfully");
  }

} 




export default {
  shareStory,
  displayStory,
  searchStory,
  updatePublishedStory
};
