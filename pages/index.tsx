import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../src/core/ui/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Invite App</title>
          {/* @IMPLEMENT i18n */}
          <meta name="description" content="Invite people to events" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main></main>
      </div>
    </Layout>
  );
};

export default Home;
