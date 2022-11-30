import shareStorySchema from "../models/shareStoryModel";
import { Request, Response } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const addProviderData = async (req: Request, res: Response) => {
    const { publisher_name, author_name, story, createdAt } = req.body;
   
  
    const storyData = new shareStorySchema({
      _id: new mongoose.Types.ObjectId(),
      publisher_name,
      author_name,
      story,
      createdAt,
    });
  
   
  
    if (!(publisher_name && author_name && story )) {
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
        .then((StoryData) => res.status(201).json({"Message" : "Story shared Successfully", storyData}))
        .catch((error) => res.status(500).json({ error }));
    }
  };