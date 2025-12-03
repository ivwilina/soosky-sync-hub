import { Document, model, Schema } from "mongoose";

/*-----------------------------------------------------------------------------------------*/

enum QuestionType {
  SINGLE_CHOICE = "singleChoice",
  MULTIPLE_CHOICE = "multipleChoice",
  PARAGRAPH = "paragraph",
  RATING = "rating",
  DROPDOWN = "dropdown",
  FILE_UPLOAD = "fileUpload",
}

interface ISurveyQuestion {
  title: string;
  type: QuestionType;
  options: string[];
  required: boolean;
  answers?: string[];
}

interface ISurvey extends Document {
  title: string;
  description: string;
  questions?: ISurveyQuestion[];
  createdAt?: string;
  updatedAt?: string;
}

const surveyQuestionSchema = new Schema<ISurveyQuestion>({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: Object.values(QuestionType),
    required: true,
    default: QuestionType.SINGLE_CHOICE,
  },
  options: { type: [String], required: false },
  required: { type: Boolean, required: true },
  answers: { type: [String], required: false },
});

const surveySchema = new Schema<ISurvey>(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    questions: { type: [surveyQuestionSchema], required: false },
  },
  { timestamps: true }
);

/*-----------------------------------------------------------------------------------------*/

const Survey = model<ISurvey>("surveys", surveySchema);

export { Survey, ISurvey, ISurveyQuestion, QuestionType };
