
import React from 'react';
import './Playvideo.css';
import video1 from '/video.mp4';
import like from '/like.png';
import dislike from '/dislike.png';
import share from '/share.png';
import save from '/save.png';
import jack from '/jack.png';
import user_profile from '/user_profile.jpg';

const Playvideo = () => {

  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      
      <h3>Best Youtube channel to learn web Development</h3>
      <div className="play-video-info">
        <p> 23k views & 2day ago</p>
        <div>
          <span><img src={like} alt="" /><span>Like</span></span>
          <span><img src={dislike} alt="" /><span>Dislike</span></span>
          <span><img src={share} alt="" /><span>Share</span></span>
          <span><img src={save} alt="" /><span>Save</span></span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Greatstack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe GreatStack to Watch More Tutorial on Web Development</p>
        <h4>140 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt='' />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Thanks for this Tutorial</p>
            <div className="comment-action">
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt='' />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Thanks for this Tutorial</p>
            <div className="comment-action">
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt='' />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Thanks for this Tutorial</p>
            <div className="comment-action">
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt='' />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Thanks for this Tutorial</p>
            <div className="comment-action">
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playvideo;
