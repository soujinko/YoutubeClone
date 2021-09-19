import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => {
    console.log(props, 'hello!!')
    return(
        <ul className={styles.videos}>
        {props.videos.map(video => 
            <VideoItem key={video.id} video={video} />)}
        </ul>
    )
           
    }

export default VideoList;