import { Document, model, Schema } from "mongoose";

/*-----------------------------------------------------------------------------------------*/

interface IJobTitle extends Document {
  title: string;
  titleCode: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

const jobTitleSchema = new Schema<IJobTitle>(
  {
    title: { type: String, required: true },
    titleCode: { type: String, required: true, unique: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

/*-----------------------------------------------------------------------------------------*/

const JobTitle = model<IJobTitle>("jobTitles", jobTitleSchema);

export { JobTitle, IJobTitle };
