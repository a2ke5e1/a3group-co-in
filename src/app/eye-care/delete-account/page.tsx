import type { Metadata, NextPage } from "next"
import Head from "next/head";
import info from '../../../../info/eye-care.json'
import Footer from "@/components/Footer";
import styles from '@styles/eye-care/eyecare.module.scss'
import Image from "next/image";

export async function generateMetadata() {

  const title: String = "Eye Care - Delete Your Account"
  const description: String =  'Eye Care - Your Vision Health Companions'


  return {
    metadataBase: new URL('https://a3group.co.in'),
    title: title,
    description: description,
    icons: '/eye-care/favicon/favicon.ico', 
    twitter: {
      images: 'https://www.a3group.co.in/eye-care/images/ss/Screenshot_1691238815.png', 
    }
  }
}


const DeletePage: NextPage = () => {
    return (
        <>
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
            <h2 className="text-2xl">Delete your account</h2>
            <p>In order to delete your account, contact us <a className="text-blue-600 underline" href="mailto:support@a3group.co.in" >support@a3group.co.in</a></p>
            <p className={styles.disclaimer}>Your account will be deleted in 1 month after your intial data deletion request.<br />We will send confirmation email after we recive your request.</p>
          </main>
        </>
      )
}

export default DeletePage; 