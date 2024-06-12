import type { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import info from '../../../info/indian-university.json'
import Footer from "../../components/Footer";
import styles from '@styles/indian-university/index.module.scss'
import Link from "next/link";
import Article from "../../components/Article";

const EyeCareHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Indian University</title>
        <meta name="description" content="Navigate your dream university and share the details" />

        <meta property="og:url" content="https://www.a3group.co.in/indian-university" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Indian University" />
        <meta property="og:description" content="Indian University - Navigate your dream university and share the details" />
        <meta property="og:image" content="https://www.a3group.co.in/eye-care/images/ss/Screenshot_1691238815.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indian University" />
        <meta name="twitter:description" content="Eye Care - Your Vision Health Companion" />
        <meta name="twitter:image" content="https://www.a3group.co.in/eye-care/images/ss/Screenshot_1691238836.png" />


        <link rel="apple-touch-icon" sizes="180x180" href="/indian-university/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/indian-university/favicon/favicon-32x32-png.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/indian-university/favicon/favicon-16x16-png.png" />
        <link rel="manifest" href="/indian-university/favicon/site.webmanifest"></link>
      </Head>
      <section className={styles["head-container"]}>
        <img
          src={"/indian-university/favicon/android-chrome-192x192.png"}
          className={styles.logo} />
        <h1 className={styles["title"]}>{info.name}</h1>
        <a>A3.</a>
        {/* <div className={styles["btn-container"]}>
          <Link className={styles["download-btn-container"]} href='https://play.google.com/store/apps/details?id=com.a3.eyecare&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
            <Image className={styles["download-btn"]} alt='Get it on Google Play' width={160} height={62} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
          </Link>
          <a className={styles["legal-dist"]}>Google Play and the Google Play logo are trademarks of Google LLC.</a>
        </div> */}
      </section>
      <main className={styles["main"]}>
        <Article title="What is Indian University?">
          <p>
            Indian University is an app which is beautifully designed to help you navigate your dream university and share the details
          </p>
          <a>Features: </a>
          <ol>
            <li>
              <p>
                Navigate to your dream university and share the details with friends.
              </p>
            </li>
            <li>
              <p>
                Secure and Cloud-Synchronized: Your eye health data is stored securely in the cloud. Access your favorite university list from any device, anywhere, anytime.
              </p>
            </li>
            <li>
              <p>Shareable Universities data card among friends and families.
              </p>
            </li>
            <li>
              <p>User-Friendly and Intuitive Interface: Indian University is designed to cater to users of all levels, from tech-savvy individuals to those new to mobile apps. The clean and intuitive layout makes it easy to search for Universities effortlessly.
              </p>
            </li>
            <li>
              <p>Suitable for Everyone: Indian Unniversity is an ideal app for students to keep track of their favorite universities and check their infromation at one place. Share the details with friends and families and help them to navigate their dream university.
              </p>
            </li> </ol>
        </Article>
        <section>
          <a>Screenshots: </a>
          <div className={styles.ss_container} >
            <Image src="/indian-university/images/ss/1.png" width={120} height={260} quality={100} alt="Eye Care home screen screenshot" />
            <Image src="/indian-university/images/ss/2.png" width={120} height={260} quality={100} alt="Eye Care search screen screenshot" />
            <Image src="/indian-university/images/ss/3.png" width={120} height={260} quality={100} alt="Eye Care user screen screenshot" />
            <Image src="/indian-university/images/ss/4.png" width={120} height={260} quality={100} alt="Eye Care home screen screenshot in dark mode" />
            <Image src="/indian-university/images/ss/5.png" width={120} height={260} quality={100} alt="Eye Care search screen screenshot in dark mode" />
            <Image src="/indian-university/images/ss/6.png" width={120} height={260} quality={100} alt="Eye Care user screen screenshot in dark mode" />
          </div>
        </section>
        <Article title="Upcoming Features: ">
          <ol>
            <li>
              <p>Get more details about universities and their qualification procedure</p>
            </li>
            <li>
              <p>Get updates on the feed of each universities.</p>
            </li>
          </ol>
        </Article>
        <Article title={""}>
          <a>Have suggestion? </a>
          <p>You can send your suggesion through our email at <Link href="mailto:support@a3group.co.in" >support@a3group.co.in.</Link><br />or you can join our telegram community <Link href="https://t.me/phycalc/651" >here.</Link></p>
        </Article>
      </main>
    </>
  )
}

export default EyeCareHome; 