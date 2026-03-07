import { Layout } from '../components/Layout'
import Styles from '../styles/App.module.css'

const NotFound = () => (
  <Layout>
    <div className={Styles.notFound}>
      <p className={Styles.notFoundCode}>404</p>
      <p className={Styles.notFoundTitle}>Page Not Found</p>
      <div className={Styles.notFoundDivider} />
      <p className={Styles.notFoundMessage}>
        But if you don&apos;t change your direction, and if you keep looking,
        you may end up where you are heading.
      </p>
    </div>
  </Layout>
)

export default NotFound
