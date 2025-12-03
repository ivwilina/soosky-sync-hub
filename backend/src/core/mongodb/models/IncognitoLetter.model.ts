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
  createdAt?: string;
  updatedAt?: string;
}

interface IIncognitoLetter extends Document {
  author: IAuthor;
  status: Status;
  reply: IReply[];
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

const authorSchema = new Schema<IAuthor>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
  },
  { _id: false, timestamps: false }
);

const replySchema = new Schema<IReply>(
  {
    author: authorSchema,
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const incognitoLetterSchema = new Schema<IIncognitoLetter>(
  {
    author: authorSchema,
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.Pending,
    },
    reply: [replySchema],
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

/*-----------------------------------------------------------------------------------------*/

const IncognitoLetter = model<IIncognitoLetter>(
  "incognitoLetters",
  incognitoLetterSchema
);

export { IncognitoLetter, IIncognitoLetter, IAuthor, IReply, Status };
