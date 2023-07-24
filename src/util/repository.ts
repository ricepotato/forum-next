import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export interface PostCreateProps {
  title: string;
  content: string;
}

export interface PostProps extends PostCreateProps {
  _id: string;
}

export interface DeleteProps {
  _id: string;
}

async function getDB() {
  return (await connectDB).db("forum");
}
async function getCollection(name: string) {
  const db = await getDB();
  return db.collection(name);
}

export async function getPosts() {
  const collection = await getCollection("post");
  const result = (await collection.find().toArray()) as unknown as PostProps[];
  return result.map((post) => {
    return { ...post, _id: post._id?.toString() };
  });
}

export async function getPostById(id: string) {
  const db = await getDB();
  const result = (await db
    .collection("post")
    .findOne({ _id: new ObjectId(id) })) as unknown as PostProps;

  return result;
}

export async function insertPost({ title, content }: PostCreateProps) {
  const db = await getDB();
  const result = await db.collection("post").insertOne({ title, content });
  return result.insertedId;
}

export async function updatePost({ _id, title, content }: PostProps) {
  const db = await getDB();
  const result = await db
    .collection("post")
    .updateOne({ _id: new ObjectId(_id) }, { $set: { title, content } });
  return result.modifiedCount;
}

export async function deletePost(id: string) {
  const db = await getDB();
  const result = await db
    .collection("post")
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}
