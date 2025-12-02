import { Document, model, Schema } from "mongoose";

/*-----------------------------------------------------------------------------------------*/

interface ISurvey extends Document {
  title: string;
  description: string;
}

const surveySchema = new Schema<ISurvey>({
  title: {type: String, required: true},

})

/*-----------------------------------------------------------------------------------------*/

const Survey = model<ISurvey>("surveys", surveySchema);

export { Survey, ISurvey };