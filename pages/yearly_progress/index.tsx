import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/yearly_progress/index.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yearly Progress</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/yearly_progress/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/yearly_progress/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/yearly_progress/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/yearly_progress/favicon/site.webmanifest"></link>
      </Head>
      <main>
        <section>
          <h1>Yearly Progress</h1>
          <a>A3.</a>
          <div className={styles["btn-container"]}>
            <button>Get on Play Store</button>
            <button>trailer</button>
          </div>
        </section>
        <section>
          <article>
            <h3>About this App</h3>
            <p>
              A app using Google's material You design system to provide widget for progress of the day, month and year.
            </p>
          </article>
        </section>
      </main>
    </>
  )
}

export default Home
