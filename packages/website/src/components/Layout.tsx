// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import * as motion from "motion/react-client";
import Hero from './Hero';
import versionData from '../data/version.json';
import Styles from '../styles/App.module.css';

const SOCIAL_LINKS = [
  {
    href: "https://github.com/jasonmelgoza/metal-icons",
    title: "Github Repo",
    icon: "/images/github.svg",
    alt: "Metal-Icon Github Repo"
  },
  {
    href: "https://www.npmjs.com/package/metal-icons",
    title: "NPM Package",
    icon: "/images/npm.svg",
    alt: "Metal-Icon NPM Package"
  },
  {
    href: "https://www.figma.com/community/file/1275692756020345515/metal-icons",
    title: "Figma Library",
    icon: "/images/figma.svg",
    alt: "Metal-Icon Figma Library"
  }
];

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className={Styles.layout}>
      <div className={Styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Hero />
        </motion.div>
        
        <motion.header 
          className={Styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <h1>Metal Icons</h1>
          <p>A clean, reliable icon set built for modern projects.</p>
        </motion.header>

        <motion.main 
          role="main"
          className={Styles.main}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          {children}
        </motion.main>

        <motion.footer 
          className={Styles.footer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <div>
            <p>
              <a href="https://github.com/jasonmelgoza/metal-icons" target="_blank" rel="noopener noreferrer">
                metal-icons {versionData.version}
              </a>
            </p>
          </div>
          <div>
            {SOCIAL_LINKS.map((link) => (
              <p key={link.title}>
                <a
                  href={link.href}
                  target="_blank"
                  title={link.title}
                  rel="noopener noreferrer"
                >
                  <img
                    className="navIcon"
                    src={link.icon}
                    alt={link.alt}
                    width={20}
                    height={20}
                  />
                </a>
              </p>
            ))}
          </div>
          <div>
            <p>
              Built by{' '}
              <a href="https://twitter.com/jasonmelgoza" target="_blank" rel="noopener noreferrer">
                @jasonmelgoza
              </a>
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default Layout;
