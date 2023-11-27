import * as Tabs from '@radix-ui/react-tabs'
import IconsSmallSolid from './IconsSmallSolid'
import IconsSmallOutline from './IconsSmallOutline'
import Styles from './Icons.module.css'

export default function Icons({}) {
  return (
    <>
      <Tabs.Root className={Styles.TabsRoot} defaultValue="tab1">
        <Tabs.List
          className={Styles.TabsList}
          aria-label="Choose an icon style to view"
        >
          <Tabs.Trigger className={Styles.TabsTrigger} value="tab1">
            Solid
          </Tabs.Trigger>
          <Tabs.Trigger className={Styles.TabsTrigger} value="tab2">
            Outline
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className={Styles.TabsContent} value="tab1">
          <div className={Styles.Grid}>
            <IconsSmallSolid />
          </div>
        </Tabs.Content>
        <Tabs.Content className={Styles.TabsContent} value="tab2">
          <div className={Styles.Grid}>
            <IconsSmallOutline />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}
