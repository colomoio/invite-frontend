import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "../src/core/ui/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invite App</title>
        {/* @IMPLEMENT i18n */}
        <meta name="description" content="Invite people to events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
