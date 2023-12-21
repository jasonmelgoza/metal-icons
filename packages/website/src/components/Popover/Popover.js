import * as Popover from '@radix-ui/react-popover'
import { Cog as IconCog } from 'metal-icons'
import Styles from './Popover.module.css'

const IconInfoPopover = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className={Styles.ToolbarButton} aria-label="Update dimensions">
        <IconCog />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div>Foo content</div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default IconInfoPopover
