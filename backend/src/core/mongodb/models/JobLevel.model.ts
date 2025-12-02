import { Document, model, Schema } from "mongoose";

/*-----------------------------------------------------------------------------------------*/

interface IJobLevel extends Document {
  level: string;
  levelCode: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

const jobLevelSchema = new Schema<IJobLevel>(
  {
    level: { type: String, required: true },
    levelCode: { type: String, required: true, unique: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

/*-----------------------------------------------------------------------------------------*/

const JobLevel = model<IJobLevel>("jobLevels", jobLevelSchema);

export { JobLevel, IJobLevel };
