import {Timestamp} from "firebase/firestore";

export interface Post {
  id?: string,
  title: string,
  body: string,
  tags: string[],
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
