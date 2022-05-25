import { auth, db } from "../firebase-config";
import { Post } from "../models/IPost";
import { collection, getDocs, getDoc, setDoc, doc } from "firebase/firestore";

const postsColRef = collection(db, "rs401blogposts");

export const getPosts = async (): Promise<Post[]> => {
  const posts: Post[] = [];
  const postSnapshot = await getDocs(postsColRef);
  postSnapshot.forEach((post) => {
    posts.push(post.data() as Post);
  });
  posts.sort((a: Post, b: Post) => a.updatedAt < b.updatedAt ? 1 : -1);

  return posts;
}

export const getPost = async (id: string): Promise<Post> => {
  const docRef = doc(db, "rs401blogposts", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data() as Post;
}

export const addPost = async (post: Post) => {
  const docRef = doc(postsColRef);
  post.id = docRef.id;
  return await setDoc(docRef, post);
}