import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addIntialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    // useEffect CleanUp
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.posts);
        setFetching(false);
      });

    // cleanup
    return () => {
      console.log("UseEffect CleanUp");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
