import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";


function Home({ isAuth }){
const [postLists, setPostList] = useState([]);
const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();
    });

    return (
        <div className = "homePage">{postLists}</div>
        /*<div>
            {postLists.map((post) => {
                return <div className = "Post">{post.title}</div>;
            })}
        <div/>*/
        );
}

export default Home;