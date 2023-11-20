import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Metal Icons</title>
        <meta
          name="description"
          content="Introducing Metal Icons: a versatile icon library designed for your upcoming Figma or React projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.className}`}>
        <header className={styles.header}>
          <Image
            className={styles.logo}
            src="/horns.svg"
            alt="Metal Icons"
            width={36}
            height={36}
            priority
          />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>
            <a href="https://www.npmjs.com/package/metal-icons?activeTab=readme">
              metal-icons
            </a>{" "}
            v0.1.10
          </p>
        </footer>
      </div>
    </>
  );
}
