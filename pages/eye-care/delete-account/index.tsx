import type { NextPage } from "next"
import Head from "next/head";
import info from '../../../info/eye-care.json'

const DeletePage: NextPage = () => {
    return (
        <>
          <Head>
            <title>{info.name} - Delete Account</title>
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
          <main>
            <p>In order to delete your account, contact us <a href="mailto:support@a3group.co.in" >support@a3group.co.in</a></p>
          </main>
        </>
      )
}

export default DeletePage; 