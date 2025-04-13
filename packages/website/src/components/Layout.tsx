// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import versionData from '../data/version.json';
import '../styles/App.css';

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
    <div className="layout">
      <div className="container">
        <header className="header">
          <h1>Metal Icons</h1>
          <p>A flexible and simple set of icons for your next project.</p>
        </header>
        <main className="main">
          {children}
        </main>
        <footer className="footer">
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
        </footer>
      </div>
    </div>
  );
}
