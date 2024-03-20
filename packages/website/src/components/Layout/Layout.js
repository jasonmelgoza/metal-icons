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
          property="og:image"
          content="https://metal-icons-site.vercel.app/api/static"
        />
        <meta
          name="description"
          content="Introducing Metal Icons: a versatile icon library designed for your upcoming Figma or React projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤘</text></svg>"
        />
      </Head>
      <div className={`${inter.className} ${Styles.Layout}`}>
        <header className={Styles.Header}>
          <h1 className={Styles.Brand}>
            <Image
              className={Styles.Logo}
              src="/horns.svg"
              alt="Metal Icons"
              width={36}
              height={36}
              priority
            />
            <span>Metal Icons</span>
          </h1>
          <nav className={Styles.Nav}>
            <a
              href="https://github.com/jasonmelgoza/metal-icons"
              target="_blank"
              title="Github Repo"
            >
              <Image
                className={Styles.NavIcon}
                src="/github.svg"
                alt="Metal-Icon Github Repo"
                width={20}
                height={20}
                priority
              />
            </a>{' '}
            <a
              href="https://www.npmjs.com/package/metal-icons"
              target="_blank"
              title="NPM Package"
            >
              <Image
                className={Styles.NavIcon}
                src="/npm.svg"
                alt="Metal-Icon NPM Package"
                width={20}
                height={20}
                priority
              />
            </a>{' '}
            <a
              href="https://www.figma.com/community/file/1275692756020345515/metal-icons"
              target="_blank"
              title="Figma Library"
            >
              <Image
                className={Styles.NavIcon}
                src="/figma.svg"
                alt="Metal-Icon Figma Community Library"
                width={20}
                height={20}
                priority
              />
            </a>{' '}
          </nav>
        </header>
        <main className={Styles.Main}>{children}</main>
        <footer className={Styles.Footer}>
          <div>
            <p>
              <a
                href="https://github.com/jasonmelgoza/metal-icons"
                target="_blank"
              >
                metal-icons v0.1.23
              </a>
            </p>
          </div>
          <div>
            <p>
              Built by{' '}
              <a href="https://twitter.com/jasonmelgoza" target="_blank">
                @jasonmelgoza
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
