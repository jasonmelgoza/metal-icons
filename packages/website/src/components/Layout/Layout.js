import Head from 'next/head'
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
        <link rel="icon" href="/favicon.ico" />
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
