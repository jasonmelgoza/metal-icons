import * as Popover from '@radix-ui/react-popover'
import { Cog as IconCog } from 'metal-icons'
import { Inter } from 'next/font/google'
import Styles from './Popover.module.css'

const inter = Inter({ subsets: ['latin'] })

const IconInfoPopover = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className={Styles.PopoverButton} aria-label="Update dimensions">
        <IconCog />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className={`${inter.className} ${Styles.PopoverContent}`}
        sideOffset={5}
        align="end"
      >
        <div>Foo content</div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default IconInfoPopover
