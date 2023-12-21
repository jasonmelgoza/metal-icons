import * as Popover from '@radix-ui/react-popover'
import { Cog as IconCog } from 'metal-icons'
import { CopyBlock as Code } from 'react-code-blocks'
import { Inter } from 'next/font/google'
import Styles from './Popover.module.css'

const inter = Inter({ subsets: ['latin'] })

const IconInfoPopover = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className={Styles.PopoverButton} aria-label="View Options">
        <IconCog />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className={`${inter.className} ${Styles.PopoverContent}`}
        sideOffset={5}
        align="end"
      >
        <section>
          <h2>Components</h2>
          <p>
            All icons are available as individual React components. Install
            Metal-Icons via npm or yarn:
          </p>
          <Code language="bash" text="yarn install metal-icons" />
        </section>
        <section>
          <h2>Links</h2>
          <ul>
            <li>
              <a
                href="https://www.figma.com/community/file/1275692756020345515"
                target="_blank"
              >
                Open in Figma
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/metal-icons"
                target="_blank"
              >
                Install with NPM
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jasonmelgoza/metal-icons"
                target="_blank"
              >
                View on Github
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>License</h2>
          <p>
            Licensed under the MIT License. Copyright &copy; 2023–present Jason
            Melgoza.
          </p>
        </section>
        <section>
          <h2>Version</h2>
          <p>
            <code>0.1.17</code>
          </p>
        </section>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default IconInfoPopover
