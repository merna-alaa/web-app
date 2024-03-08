import React, { useState , useEffect} from "react";
import "./services.css";


export default function WriteSomeTweets() {
  const [tweetInput, setTweetInput] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  useEffect(() => {
    setTweetInput("testing")
  }) //arrow fun
  const analyzeTweet = () => {
    if (tweetInput.trim() === "") {
      setToastMessage("Please enter your tweet.");
    } else {
      // Proceed to analysis
      window.location.href = "http://localhost:3000/disease";
    }
  };

  return (
    <body>
      <div class="services-title">Services</div>
      <div className="container">
        <h1>Write Some Tweets</h1>
        <div className="input-container">
          <input
            type="text"
            value={tweetInput}
            onChange={(e) => setTweetInput(e.target.value)}
            placeholder="Write your tweet here..."
          />
          <div className="toast">{toastMessage}</div>
        </div>
        <button className="button" onClick={analyzeTweet}>
          Analysis
        </button>
      </div>
    </body>
  );
}
