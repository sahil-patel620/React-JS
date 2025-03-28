import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElements = useRef();
  const postTitleElements = useRef();
  const postContentElements = useRef();
  const reactionsElements = useRef();
  const hashtagsElements = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElements.current.value;
    const postTitle = postTitleElements.current.value;
    const postBody = postContentElements.current.value;
    const reactions = Number(reactionsElements.current.value) || 0; // convert user input into a number and ensure that if the conversion fails, it defaults to 0
    const tags = hashtagsElements.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElements.current.value = "";
    postTitleElements.current.value = "";
    postContentElements.current.value = "";
    reactionsElements.current.value = "";
    hashtagsElements.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userID" className="form-label">
          Enter your User ID
        </label>
        <input
          type="text"
          ref={userIdElements}
          className="form-control"
          id="userID"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElements}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          ref={postContentElements}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElements}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={hashtagsElements}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
