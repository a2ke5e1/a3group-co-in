import { NextPage } from "next";
import styles from "../../styles/yearly-progress/Privacy.module.scss"
import Head from "next/head";
import info from '../../info/indian-university.json'

const EyeCarePrivacyPolicy: NextPage = () => {
    return (
        <div>

            <Head>
                <title>Indian University - Privacy Policy</title>
                <meta name="description" content="Eye Care - Your Vision Health Companion" />

                <meta property="og:url" content="https://www.a3group.co.in/indian-university" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Eye Care" />
                <meta property="og:description" content="Eye Care - Your Vision Health Companion" />
                <meta property="og:image" content="https://www.a3group.co.in/indian-university/images/ss/Screenshot_20221002_014215.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Eye Care" />
                <meta name="twitter:description" content="Eye Care - Your Vision Health Companion" />
                <meta name="twitter:image" content="https://www.a3group.co.in/indian-university/images/ss/Screenshot_20221002_014215.png" />


                <link rel="apple-touch-icon" sizes="180x180" href="/indian-university/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/indian-university/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/indian-university/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/indian-university/favicon/site.webmanifest"></link>
            </Head>
            <main className={styles.body}>
                <div>
                    <div className={styles.sup_title}>
                        <div className={styles.title}>
                            <img
                                src={"/indian-university/favicon/android-chrome-192x192.png"}
                                className={styles.shadow} />
                            <div>
                                <h1>{info.name}</h1>
                                <h2>Privacy Policy</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        Welcome to Indian University, a mobile application designed to help navigate through Indian Universities. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our Android app built with Flutter and database functionality. By using our app, you agree to the terms described in this Privacy Policy. (“App”).
                    </p>
                    <h5>1. Information We Collect</h5>
                    <p>1.1. Personal Information We may collect the following personal information from you:</p>
                    <p> &nbsp; - When signing in anonymously: No personal information is collected.</p>
                    <p> &nbsp; - When signing in with Facebook: We may collect your Facebook ID, email address, and display name.</p>
                    <p> &nbsp; - When using the app: We may collect search queries, navigation history, and universities added to your favorites.</p>
                    <p>1.2. Usage Data.</p>
                    <p> &nbsp; - We may collect non-personal information about your device and app usage, such as device type, operating system, app version, and interactions within the app.</p>

                    <h5>3. Use of Data</h5>

                    <p>3.1. Personal Information Personal information collected is used for the following purposes:</p>
                    <p> &nbsp; - To provide and maintain the app&apos;s functionality.</p>
                    <p> &nbsp; - To personalize your experience and improve user interface.</p>
                    <p> &nbsp; - To allow signed-in users to sync their favorite universities across devices.</p>

                    <p>3.2. Usage Data</p>
                    <p> &nbsp; - Usage data is collected to analyze app performance, enhance user experience, and optimize our services.</p>

                    <h5>4. Data Sharing
                    </h5>
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share your data in the following circumstances:</p>
                    <p> &nbsp; - With service providers who assist us in app operation and maintenance.</p>
                    <p> &nbsp; - With legal authorities when required by law or to protect our rights.</p>

                    <h5>5. Data Security</h5>
                    <p> &nbsp; - We prioritize the security of your personal information. We implement appropriate measures to safeguard data from unauthorized access, alteration, or disclosure.</p>

                    <h5>6. Links to External Sites</h5>
                    <p> &nbsp; - Our app may contain links to external websites, including university websites. We are not responsible for the content or privacy practices of such sites. Please review their respective privacy policies before using them.</p>

                    <h5>7. Children&apos;s Privacy
                    </h5>
                    <p> &nbsp; - Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe your child has provided us with personal information, please contact us to have it removed.</p>
                    <h5>8. Changes to Privacy Policy</h5>
                    <p> &nbsp; - We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting the revised policy within the app. By continuing to use the app, you acknowledge and agree to the updated terms.</p>
                    <h5>9. Contact Information
                    </h5>
                    <p>9.1. If you have any questions, concerns, or requests regarding this Privacy Policy or the App&apos;s privacy practices, you can contact us at <a href="mailto:support@a3group.co.in">support@a3group.co.in</a>.
                    </p>
                    <p>By using the EyeCare mobile application, you acknowledge that you have read, understood, and consent to the practices described in this Privacy Policy.
                    </p>
                </div>

            </main>
        </div>
    )
}

export default EyeCarePrivacyPolicy; 