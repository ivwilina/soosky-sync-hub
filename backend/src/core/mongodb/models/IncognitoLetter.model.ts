import { Schema, model, Document } from "mongoose";

/*-----------------------------------------------------------------------------------------*/

enum Status {
  Pending = "pending",
  Seen = "seen",
  Replied = "replied",
}

interface IAuthor {
  userId: string;
  name: string;
}

interface IReply {
  author: IAuthor;
  content: string;
  createAt: string;
}

interface IIncognitoLetter extends Document {
  author: IAuthor;
  status: Status;
  reply: [IReply];
  title: string;
  content: string;
  createAt: string;
}

const authorSchema = new Schema<IAuthor>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

const replySchema = new Schema<IReply>({
  author: authorSchema,
  content: { type: String, required: true },
  createAt: { type: String, required: true },
});

const incognitoLetterSchema = new Schema<IIncognitoLetter>({
  author: authorSchema,
  status: { type: String, default: Status.Pending },
  reply: replySchema,
  title: { type: String, required: true },
  content: { type: String, required: true },
  createAt: { type: String, required: true },
});

/*-----------------------------------------------------------------------------------------*/

const IncognitoLetter = model<IIncognitoLetter>(
  "incognitoLetters",
  incognitoLetterSchema
);

export { IncognitoLetter, IIncognitoLetter, IAuthor, IReply };
