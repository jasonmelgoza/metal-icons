import * as Tabs from '@radix-ui/react-tabs'
import IconsSmallSolid from './IconsSmallSolid'
import IconsLargeSolid from './IconsLargeSolid'
import IconsSmallOutline from './IconsSmallOutline'
import IconsLargeOutline from './IconsLargeOutline'
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
          <section className={Styles.Section}>
            <header className={Styles.Header}>
              <h3>16px</h3>
            </header>
            <div className={Styles.Grid}>
              <IconsSmallSolid />
            </div>
          </section>
          <section className={Styles.Section}>
            <header className={Styles.Header}>
              <h3>24px</h3>
            </header>
            <div className={Styles.Grid}>
              <IconsLargeSolid />
            </div>
          </section>
        </Tabs.Content>
        <Tabs.Content className={Styles.TabsContent} value="tab2">
          <section className={Styles.Section}>
            <header className={Styles.Header}>
              <h3>16px</h3>
            </header>
            <div className={Styles.Grid}>
              <IconsSmallOutline />
            </div>
          </section>
          <section className={Styles.Section}>
            <header className={Styles.Header}>
              <h3>24px</h3>
            </header>
            <div className={Styles.Grid}>
              <IconsLargeOutline />
            </div>
          </section>
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}
