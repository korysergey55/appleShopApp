import React from 'react';
import { Player, ControlBar, BigPlayButton, Shortcut } from "video-react";
import Header from '../../containers/header/Header'
import Footer from '../../containers/footer/Footer'
import styles from "./styles.module.scss";

const ServicePage = () => {
  return (
    <div className={styles.servicePage}>
      <Header />
      <Player
        autoPlay
        playsInline
        poster="/assets/poster.png"
        src="https://www.apple.com/105/media/us/iphone-12/2020/7f5b7de7-9f8c-41eb-bf3b-f294773108e6/anim/charge/large.mp4"
      >
        <ControlBar disableCompletely={true} className="my-class" />
        <BigPlayButton position="center" />
      </Player>
      <div className={styles.container}>
        <h2 className={styles.title}>
          iPhone 12 Pro Швидкість в усій красі.
        </h2>
        <Player
          autoPlay
          repeat
          playsInline
          poster="/assets/poster.png"
          src="https://www.apple.com/105/media/ww/iphone-12/2020/7f5b7de7-9f8c-41eb-bf3b-f294773108e6/anim/hero-purple/non-5g/large.mp4"
        >
          <ControlBar disableCompletely={true} />
          <BigPlayButton position="center" />
          <Shortcut clickable={false} />
        </Player>
        <h2 className={styles.title}>Рамка менша Экран бiльше!</h2>
        <img
          className={styles.img}
          src="https://www.apple.com/v/imac-24/b/images/overview/ar_router__cdp4z6dpcrhy_large.jpg"
          alt="titlefoto"
        />
        <h2 className={styles.title}>
          A14 Bionic — перший процесор у галузі, який було створено з використанням
          5-﻿нано­метрової технології. Його передові компоненти завбільшки з атоми.
        </h2>
        <Player
          autoPlay
          playsInline
          poster="/assets/poster.png"
          src="https://www.apple.com/105/media/ww/iphone-12-pro/2020/e70ffbd8-50f1-40f3-ac36-0f03a15ac314/anim/hero/non_5g/large.mp4"
        >
          <ControlBar disableCompletely={true} />
          <BigPlayButton position="center" />
        </Player>

        <h2 className={styles.title}>Новий iMac Знайомтесь.</h2>
        <img
          className={styles.img}
          src="https://www.apple.com/ua/imac-24/images/overview/colors_lifestyle_fallback__fat816a51hua_large.jpg"
          alt="titlefoto"
        />
        <img
          className={styles.img}
          src="https://www.apple.com/ua/mac/home/images/overview/hero_imac_24__eq5phrdpwjyq_large.jpg"
          alt="titlefoto"
        />
        <h2 className={styles.title}>
          Який Apple Watch саме для вас?
        </h2>
        <img
          className={styles.img}
          src="https://www.apple.com/ua/watch/home/images/overview/wwdc/tile_watchos7__fs1gp8e4poq6_large.jpg"
          alt="titlefoto"
        />
        <img
          className={styles.img}
          src="https://www.apple.com/v/watch/home/aj/images/overview/se/tile-watch-se__knji2d25x8qe_large.jpg"
          alt="titlefoto"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;