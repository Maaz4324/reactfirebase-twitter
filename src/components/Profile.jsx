import React, { useEffect, useState } from "react";
import "../style/Profile.css";
import { auth } from "../firebaseConfig";
import profileBanner from "../images/profilebanner.jpg";
import ActivityFeed from "./ActivityFeed";
import TweetServices from "../assets/TweetServices";
import { doc, query, orderBy } from "firebase/firestore";

function Profile({ setProfileIs }) {
  const [showTweets, setShowTweets] = useState([]);
  const [showProfileTweets, setShowProfileTweets] = useState([]);

  const [liked, setLiked] = useState(false);
  async function showAllTweets() {
    // console.log(showTweets);
    const allTweets = await TweetServices.getAllTweets();
    let j = allTweets.docs.map((doc) => doc.data());
    let ids = allTweets.docs.map((doc) => doc.id);
    let k = j.map((doc) => doc.email);
    setShowProfileTweets([]);
    for (let i = 0; i < j.length; i++) {
      if (k[i] === auth.currentUser.email) {
        j[i]["id"] = ids[i];
        // console.log(j[i]);
        setShowProfileTweets((oldArray) => [...oldArray, j[i]]);
        // console.log(ids[i]);
      }
    }
    setShowTweets(allTweets.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const handleDelete = async (id) => {
    try {
      await TweetServices.deleteTweet(id);
      showAllTweets();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showAllTweets();
  }, []);

  return (
    <div className="tweet_container">
      <div className="profile_top">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          //   style="color: rgb(239, 243, 244);"
          onClick={() => setProfileIs(false)}
        >
          <g>
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
          </g>
        </svg>
        <div className="profile_top_head">
          <h2>{auth.currentUser.displayName}</h2>
        </div>
      </div>
      <div className="profile_bottom">
        <div className="profile_info">
          <div className="profile_banner"></div>
          <div className="profile_info_middle">
            <div className="profile_info_img">
              <img src={auth.currentUser.photoURL} alt="" />
            </div>
            <button>Edit profile</button>
          </div>
          <div className="profile_info_bottom">
            <div className="profile_bottom_name mb-1">
              <h2>{auth.currentUser.displayName}</h2>
              <h5>{auth.currentUser.email}</h5>
            </div>
            <div className="profile_bottom_bio mb-1">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente consequuntur.
              </p>
            </div>
            <div className="profile_bottom_joining  df">
              <div className="profile_weblink df mr-1">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                >
                  <g>
                    <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
                    <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
                  </g>
                </svg>
                <a href="https://maazhamed-portfolio.web.app/">
                  maazhamed-portfolio.web.app
                </a>
              </div>
              <div className="joining df">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                >
                  <g>
                    <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                    <circle cx="7.032" cy="8.75" r="1.285"></circle>
                    <circle cx="7.032" cy="13.156" r="1.285"></circle>
                    <circle cx="16.968" cy="8.75" r="1.285"></circle>
                    <circle cx="16.968" cy="13.156" r="1.285"></circle>
                    <circle cx="12" cy="8.75" r="1.285"></circle>
                    <circle cx="12" cy="13.156" r="1.285"></circle>
                    <circle cx="7.032" cy="17.486" r="1.285"></circle>
                    <circle cx="12" cy="17.486" r="1.285"></circle>
                  </g>
                </svg>
                <p>Joined January 2021</p>
              </div>
            </div>
            <div className="profile_bottom_follow mt-1 df">
              <p>
                32 <span>followers</span>
              </p>
              <p className="ml-1">
                62 <span>following</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet_bottom">
        {showProfileTweets.map((doc) => (
          <div className="tweet_feed_container" key={doc.id}>
            <div className="feed_user_logo">
              <img src={doc.photo} alt="" />
            </div>
            <div className="feed_contents">
              <div className="feed_user_name df pr-1">
                <div className="feed_user_name_container df">
                  <h5>{doc.name}</h5>
                  <p className="mr-1"> {doc.email}</p>
                </div>
                <div className="feed_delete">
                  <svg
                    onClick={() => handleDelete(doc.id)}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-9l7dzd r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-1b7u577 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                  >
                    <g>
                      <path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path>
                      <path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="feed_txt">
                <p>{doc.feed}</p>
              </div>
              {/* <div className="feed_img">
                <img src={auth.currentUser.photoURL} alt="" />
              </div> */}
              <ActivityFeed
                like={doc.like}
                id={doc.id}
                doc={doc}
                showAllTweets={showAllTweets}
                liked={liked}
                setLiked={setLiked}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
