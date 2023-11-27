import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Styles from './Layout.module.css'

const inter = Inter({ subsets: ['latin'] })

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
      <div className={`${inter.className} ${Styles.Layout}`}>
        <header className={Styles.Header}>
          <Image
            className={Styles.Logo}
            src="/horns.svg"
            alt="Metal Icons"
            width={36}
            height={36}
            priority
          />
        </header>
        <main className={Styles.Main}>{children}</main>
        <footer className={Styles.Footer}>
          <div>
            <span>metal-icons v0.1.12</span>
            <a
              href="https://github.com/jasonmelgoza/metal-icons"
              target="_blank"
            >
              <Image
                src="/github.svg"
                alt="Metal-Icon Github Repo"
                width={16}
                height={16}
                priority
              />
            </a>{' '}
            <a href="https://www.npmjs.com/package/metal-icons" target="_blank">
              <Image
                src="/npm.svg"
                alt="Metal-Icon NPM Package"
                width={16}
                height={16}
                priority
              />
            </a>{' '}
          </div>
        </footer>
      </div>
    </>
  )
}
