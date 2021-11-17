import React from 'react';
import Header from '../../containers/header/Header'
import Section from '../../containers/section/Section';
import styles from "./styles.module.scss";
import { Player, ControlBar, BigPlayButton } from "video-react";

const ContactsPage = () => {
  return (
    <div className={styles.servicePage}>
      <Header />
      <div className={styles.container}>
        <Section title="Contacts Page">
          <Player
            autoPlay
            playsInline
            poster="/assets/poster.png"
            src="https://www.apple.com/105/media/us/iphone-12/2020/7f5b7de7-9f8c-41eb-bf3b-f294773108e6/anim/charge/large.mp4"
          >
            <ControlBar disableCompletely={true} className="my-class" />
            <BigPlayButton position="center" />
          </Player>
        </Section>
      </div>
    </div>
  );
};

export default ContactsPage;