import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addIntialPosts } = useContext(PostListData);

  const handleGetPostsClicked = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addIntialPosts(data.posts));
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClicked={handleGetPostsClicked} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
