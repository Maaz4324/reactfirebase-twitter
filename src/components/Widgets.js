import React from 'react'
import '../style/Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search'

function Widgets() {
  return (
    <div className="widgets_container">
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId={'1561386848982892548'} />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="iamMaazHamed"
            options={{ height: 400 }}
          />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="elonmusk"
            options={{ height: 400 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Widgets
