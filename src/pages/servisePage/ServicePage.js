import React from 'react';
import Header from '../../containers/header/Header'
import styles from "./styles.module.scss";
import { Player, ControlBar, BigPlayButton } from "video-react";

const ServicePage = () => {
  return (
    <div className={styles.servicePage}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}> Apple Shop Service Page</h1>
        <Player
          autoPlay
          playsInline
          poster="/assets/poster.png"
          src="https://www.apple.com/105/media/us/iphone-12/2020/7f5b7de7-9f8c-41eb-bf3b-f294773108e6/anim/charge/large.mp4"
        >
          <ControlBar disableCompletely={true} className="my-class" />
          <BigPlayButton position="center" />
        </Player>
      </div>
    </div>
  );
};

export default ServicePage;