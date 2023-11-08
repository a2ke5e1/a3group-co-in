import type { NextPage } from "next"
import Head from "next/head";
import info from '../../../../info/eye-care.json'
import Footer from "../../../components/Footer";
import styles from '../../../../styles/eye-care/eyecare.module.scss'
import Image from "next/image";

const DeletePage: NextPage = () => {
    return (
        <>
          <Head>
            <title>Eye Care - Delete Your Account</title>
            <meta name="description" content="Eye Care - Your Vision Health Companion" />

            <meta property="og:url" content="https://www.a3group.co.in/eye-care" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Eye Care - Delete Your Account" />
            <meta property="og:description" content="Eye Care - Your Vision Health Companion" />
            <meta property="og:image" content="https://www.a3group.co.in/eye-care/images/ss/Screenshot_1691238815.png" />
    
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Eye Your Care" />
            <meta name="twitter:description" content="Eye Care - Your Vision Health Companion" />
            <meta name="twitter:image" content="https://www.a3group.co.in/eye-care/images/ss/Screenshot_1691238836.png" />
    
    
            <link rel="apple-touch-icon" sizes="180x180" href="/eye-care/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/eye-care/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/eye-care/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/eye-care/favicon/site.webmanifest"></link>
          </Head>
          <main className={styles.main}>
            <div className={styles.header}>
                <Image
                    src={"/eye-care/favicon/icon-512-maskable.png"}
                    className={styles.logo} height={60} width={60} alt="Eye Care Logo" />
                <h1>{info.name}</h1>
            </div>
            {/* <h2>Delete your account from app</h2>
            <p>In order to delete your eye care account, follow given instructions below: </p>
            <ol>
              <li><p>Tap on triple dots in the top right of corner of the home screen.</p></li>
              <li><p>Tap on settings.</p></li>
              <li><p>Tap on delete my account.</p></li>
              <li><p>Tap on confirm.</p></li>
              <li><p>Sign in again to prove that it is you.</p></li>
            </ol>

            <br /><br />
             */}
            <h2>Delete your account</h2>
            <p>In order to delete your account, contact us <a href="mailto:support@a3group.co.in" >support@a3group.co.in</a></p>
            <p className={styles.disclaimer}>Your account will be deleted in 1 month after your intial data deletion request.<br />We will send confirmation email after we recive your request.</p>
            <Footer policy_url="/eye-care/privacy-policy" delete_data_url="/eye-care/delete-account" />
          </main>
        </>
      )
}

export default DeletePage; 