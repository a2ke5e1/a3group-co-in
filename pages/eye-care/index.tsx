import type { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import info from '../../info/eye-care.json'
import Footer from "../../components/Footer";
import styles from '../../styles/eye-care/index.module.scss'
import Link from "next/link";
import Article from "../../components/Article";

const EyeCareHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>{info.name}</title>
        <meta name="description" content="Yearly Progress is an android app which provides beautiful widgets, which shows the progress of day, week, month and year." />

        <meta property="og:url" content="https://www.a3group.co.in/eye-care" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yearly Progress" />
        <meta property="og:description" content="Yearly Progress is an android app which provides beautiful widgets, which shows the progress of day, week, month and year." />
        <meta property="og:image" content="https://www.a3group.co.in/eye-care/images/ss/Screenshot_20221002_014215.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yearly Progress" />
        <meta name="twitter:description" content="Yearly Progress is an android app which provides beautiful widgets, which shows the progress of day, week, month and year." />
        <meta name="twitter:image" content="https://www.a3group.co.in/eye-care/images/ss/Screenshot_20221002_014215.png" />


        <link rel="apple-touch-icon" sizes="180x180" href="/eye-care/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/eye-care/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/eye-care/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/eye-care/favicon/site.webmanifest"></link>
      </Head>
      <section className={styles["head-container"]}>
        <img
          src={"https://play-lh.googleusercontent.com/MhkvnZGvvVQYwBKwxoeP7MhO_lwO7SIOF0ci5J9QAxoWGkWRBtldT5etyjcHEK3WfU4=w240-h480-rw"}
          className={styles.logo} />
        <h1 className={styles["title"]}>{info.name}</h1>
        <a>A3.</a>
        <div className={styles["btn-container"]}>
          <Link className={styles["download-btn-container"]} href='https://play.google.com/store/apps/details?id=com.a3.eyecare&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
            <Image className={styles["download-btn"]} alt='Get it on Google Play' width={160} height={62} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
          </Link>
          <a className={styles["legal-dist"]}>Google Play and the Google Play logo are trademarks of Google LLC.</a>
        </div>
      </section>
      <main className={styles["main"]}>
        <Article title="What is Eye Care?">
          <p>
            Eye Care is an app which is beautifully designed to help you to take care of your eyes. It provides you a way to keep records of their prescription
            in the cloud and access them from anywhere.
          </p>
          <a>Features: </a>
          <ol>
            <li>
              <p>
                Personalized Eye Report Tables: Create and manage personalized eye report tables with ease. Keep track of prescribed eyeglass prescriptions. Easily update, modify, or delete data as your eye health journey progresses.
              </p>
            </li>
            <li>
              <p>
                Secure and Cloud-Synchronized: Your eye health data is stored securely in the cloud. Access your eye reports anytime, anywhere, from multiple device.
              </p>
            </li>
            <li>
              <p>Shareable Eye Reports for Better Communication: Enhance communication with your eye care specialist by generating shareable eye reports as screenshots.
              </p>
            </li>
            <li>
              <p>User-Friendly and Intuitive Interface: Eye Care is designed to cater to users of all levels, from tech-savvy individuals to those new to mobile apps. The clean and intuitive layout makes it easy to access eye reports, update information, and view your eye health progress effortlessly.
              </p>
            </li>
            <li>
              <p>Suitable for Everyone: Eye Care is ideal for individuals seeking to manage personal vision health, parents keeping track of their children's eye check-ups, or anyone interested in proactive eye care. Customize the app to suit your specific needs and take charge of your vision health with confidence.
              </p>
            </li> </ol>
        </Article>
        <section>
          <a>Screenshots: </a>
          <div className={styles.ss_container} >
            <Image src="/eye-care/images/ss/Screenshot_1691238815.png" width={120} height={260} quality={100} alt="Eye Care home screen screenshot" />
            <Image src="/eye-care/images/ss/Screenshot_1691238836.png" width={120} height={260} quality={100} alt="Eye Care recent screen screenshot" />
            <Image src="https://play-lh.googleusercontent.com/scjasM7xzNrzFEQSCDKywfESwBgOagc5Xotz35SF1YXPU00gkz6nvpQ2JSxWhHCniJE=w526-h296-rw" width={120} height={260} quality={100} alt="Eye Care home screen screenshot in dark mode" />
            <Image src="https://play-lh.googleusercontent.com/1wovtsQNjdTYFwqkKPNWyrQ4VWmOBaRgTfvK5iJnJD7v6cOU_S5yGv1-Cl9I1EqZGQ=w526-h296-rw" width={120} height={260} quality={100} alt="Eye Care add reports screen screenshot in dark mode" />
          </div>
        </section>
        <Article title="Upcoming Features: ">
          <ol>
            <li>
              <p>You will be able to set reminders to remind to drop your eye drops, medication, etc.</p>
            </li>
            <li>
              <p>You will be able to set reminders to remind to take breaks from your screen.</p>
            </li>
          </ol>
        </Article>
        <Article title={""}>
          <a>Have suggestion? </a>
          <p>You can send your suggesion through our email at <Link href="mailto:support@a3group.co.in" >support@a3group.co.in.</Link><br />or you can join our telegram community <Link href="https://t.me/phycalc/651" >here.</Link></p>
        </Article>
        <Footer policy_url="/eye-care/privacy-policy" delete_data_url="/eye-care/delete-account" />
      </main>
    </>
  )
}

export default EyeCareHome; 