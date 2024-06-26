import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import versionData from '../../../data/version.json'
import styles from '@/styles/Metal.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Metal Icons</title>
        <meta
          name="description"
          content="A flexible and simple set of icons for your next project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://www.metalicons.com/api/static" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤘</text></svg>"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Metal Icons</h1>
            <p>A flexible and simple set of icons for your next project.</p>
          </header>
          {children}
          <footer className={styles.footer}>
            <div>
              <p>
                <a href="https://github.com/jasonmelgoza/metal-icons" target="_blank">
                  metal-icons {versionData.version}
                </a>
              </p>
            </div>
            <div>
              <p>
                <a
                  href="https://github.com/jasonmelgoza/metal-icons"
                  target="_blank"
                  title="Github Repo"
                >
                  <Image
                    className={styles.navIcon}
                    src="/github.svg"
                    alt="Metal-Icon Github Repo"
                    width={20}
                    height={20}
                    priority
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://www.npmjs.com/package/metal-icons"
                  target="_blank"
                  title="NPM Package"
                >
                  <Image
                    className={styles.navIcon}
                    src="/npm.svg"
                    alt="Metal-Icon NPM Package"
                    width={20}
                    height={20}
                    priority
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://www.figma.com/community/file/1275692756020345515/metal-icons"
                  target="_blank"
                  title="Figma Library"
                >
                  <Image
                    className={styles.navIcon}
                    src="/figma.svg"
                    alt="Metal-Icon Figma Library"
                    width={20}
                    height={20}
                    priority
                  />
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
      </main>
    </>
  )
}
