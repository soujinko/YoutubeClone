import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => {
    console.log(props, 'hello!!')
    return(
        <ul>
        {props.videos.map(video => 
            <VideoItem key={video.id} video={video} />)}
    </ul>
    )
           
    }

export default VideoList;