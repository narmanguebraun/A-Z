import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Site.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.layout}>
        <div>{/* to keep footer at the bottom header and main are inside a div */}
          <Header /> 
          <main className={styles.main}>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
