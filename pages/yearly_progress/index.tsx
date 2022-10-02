import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Article from '../../components/Article'
import styles from '../../styles/yearly_progress/index.module.scss'
import info from '../../info/yearly_progress.json'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{info.name}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/yearly_progress/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/yearly_progress/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/yearly_progress/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/yearly_progress/favicon/site.webmanifest"></link>
      </Head>
      <main>
        <section>
          <img
            src={"https://play-lh.googleusercontent.com/SxZPrpX_9O2WxFiI067oHMRxsRS0Ozz6clBvao5lrH2SA-lG7vXs8rU_Rf7BHz0CZ0YO=w240-h480-rw"}
            className={styles.logo} />
          <h1>{info.name}</h1>
          <a>A3.</a>
          <div className={styles["btn-container"]}>
            <a className={styles["download-btn-container"]}
              href='https://play.google.com/store/apps/details?id=com.a3.yearlyprogess&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img alt='Get it on Google Play' className={styles["download-btn"]} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
            </a>
          </div>
        </section>
        <Article title={"About this app"}>
          <p>
            {info.desc.about}
          </p>
        </Article>
        <section>
          <div className={styles.ss_container} >
            <img src="/yearly_progress/images/ss/Screenshot_20221002_014215.png" />
            <img src="/yearly_progress/images/ss/Screenshot_20221002_014317.png" />
            <img src="/yearly_progress/images/ss/Screenshot_20221002_014407.png" />
            <img src="/yearly_progress/images/ss/Screenshot_20221002_014414.png" />
            <img src="/yearly_progress/images/ss/Screenshot_20221002-014123.png" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
