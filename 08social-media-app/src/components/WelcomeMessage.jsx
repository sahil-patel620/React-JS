const WelcomeMessage = ({onGetPostsClicked}) => {
  return (
    <center className="welcome-message">
      <h1>There is no posts</h1>
      <button type="button" className="btn btn-primary" onClick={onGetPostsClicked} >
        Get Posts From Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
