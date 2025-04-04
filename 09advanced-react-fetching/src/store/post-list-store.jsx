import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INTIAL_POSTS") {
    // Merge fetched posts with existing ones, avoiding duplicates
    // const fetchedPosts = action.payload.posts;
    // const existingIds = new Set(currPostList.map((post) => post.id)); // creates a Set that stores the ids of all posts currently in currPostList

    // newPostList = [
    //   ...currPostList,
    //   ...fetchedPosts.filter((post) => !existingIds.has(post.id)),
    // ]; // merge and filter out posts from fetchedPosts that already exist in currPostList

    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INTIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

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
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
