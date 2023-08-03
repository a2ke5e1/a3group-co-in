import { NextPage } from "next";
import styles from "../../styles/yearly-progress/Privacy.module.scss"
import Head from "next/head";
import info from '../../info/eye-care.json'

const EyeCarePrivacyPolicy: NextPage = () => {
    return (
        <div>

            <Head>
                <title>Eye Care - Privacy Policy</title>
                <meta name="description" content="Eye Care - Your Vision Health Companion" />

                <meta property="og:url" content="https://www.a3group.co.in/eye-care" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Eye Care" />
                <meta property="og:description" content="Eye Care - Your Vision Health Companion" />
                <meta property="og:image" content="https://www.a3group.co.in/eye-care/images/ss/Screenshot_20221002_014215.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Eye Care" />
                <meta name="twitter:description" content="Eye Care - Your Vision Health Companion" />
                <meta name="twitter:image" content="https://www.a3group.co.in/eye-care/images/ss/Screenshot_20221002_014215.png" />


                <link rel="apple-touch-icon" sizes="180x180" href="/eye-care/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/eye-care/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/eye-care/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/eye-care/favicon/site.webmanifest"></link>
            </Head>
            <main className={styles.body}>
                <div>
                    <div className={styles.sup_title}>
                        <div className={styles.title}>
                            <img
                                src={"/eye-care/favicon/icon-512-maskable.png"}
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
                        Welcome to EyeCare, a mobile application designed to help you create and manage eye reports. Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use the EyeCare mobile application ("App").
                    </p>
                    <h5>1. Information We Collect</h5>
                    <p>1.1. Account Information: When you register an account with EyeCare, we may collect your email address (if you choose email registration) or obtain basic profile information from your Google account.</p>
                    <p>1.2. Eye Report Data: The App allows you to create eye report tables and store data on the cloud. We collect and store the data you enter, including eye-related information and report details.</p>
                    <p>1.3. Log Data: We may collect certain information automatically when you use the App, such as your device's IP address, device type, operating system, and app usage data.</p>
                    <h5>2. Use of Your Information</h5>
                    <p>2.1. Providing Services: We use your account information to create and manage your EyeCare account, enabling you to use the App's features.</p>

                    <p>2.2. Eye Report Data: Your eye report data is used to generate the eye report tables and provide you with the functionality to edit, delete, and share the reports.</p>
                    <p>2.3. Cloud Synchronization: We use your data to synchronize your eye report tables on Firebase, allowing you to access your data from multiple devices.</p>

                    <p>2.4. Communication: We may use your email address to send you important updates, notifications, and information related to the App.</p>

                    <p>2.5. Improving the App: We may analyze user data in an aggregated and anonymized form to improve the App's performance, features, and user experience.</p>


                    <h5>3. Data Security</h5>

                    <p>3.1. We take appropriate measures to protect your personal information from unauthorized access, loss, misuse, or alteration.
                    </p>
                    <p>3.2. EyeCare uses Firebase for encrypted logins and data storage, ensuring a secure environment for your data.
                    </p>
                    <h5>4. Data Sharing
                    </h5>
                    <p>4.1. EyeCare does not sell, rent, or lease your personal information to third parties.
                    </p>
                    <p>4.2. We may share your data with service providers who assist us in delivering the App's features and functionality. However, these providers are bound by confidentiality agreements and are not permitted to use your information for any other purpose.
                    </p>
                    <p>4.3. We may disclose your information if required by law or to protect our rights, property, or safety, or that of others.
                    </p>
                    <h5>5. User Control and Choices
                    </h5>
                    <p>5.1. Account Settings: You can access and update your account information within the App's settings.
                    </p>
                    <p>5.2. Data Deletion: You have the right to request the deletion of your data from the App. Please note that certain information may be retained for legal or legitimate business purposes.
                    </p>
                    <p>5.3. Opt-Out: You can opt-out of receiving non-essential communications from us by following the unsubscribe instructions provided in the emails.
                    </p>
                    <h5>6. Children's Privacy
                    </h5>
                    <p>6.1. EyeCare is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have it removed.
                    </p>
                    <h5>7. Updates to the Privacy Policy
                    </h5>
                    <p>7.1. We may update this Privacy Policy from time to time. The most current version will be available within the App.
                    </p>
                    <h5>8. Contact Information
                    </h5>
                    <p>8.1. If you have any questions, concerns, or requests regarding this Privacy Policy or the App's privacy practices, you can contact us at <a href="mailto:support@a3group.co.in">support@a3group.co.in</a>.
                    </p>
                    <p>By using the EyeCare mobile application, you acknowledge that you have read, understood, and consent to the practices described in this Privacy Policy.
                    </p>
                </div>

            </main>
        </div>
    )
}

export default EyeCarePrivacyPolicy; 