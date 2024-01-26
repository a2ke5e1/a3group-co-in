import { NextPage } from "next";
import styles from "../../../../styles/yearly-progress/Privacy.module.scss";
import Image from "next/image"
import TermsOfService from "@/docs/yearly-progress/tos.mdx";


export async function generateMetadata() {

  const title: String = "Yearly Progress - Terms and Service"
  const description: String =  "Yearly Progress is an android app which provides beautiful widgets, which shows the progress of day, week, month and year."

  return {
    metadataBase: new URL('https://a3group.co.in'),
    title: title,
    description: description,
    icons: '/yearly-progress/favicon/favicon.ico', 
    twitter: {
      images: 'https://www.a3group.co.in/yearly-progress/images/ss/Screenshot_1691238815.png', 
    }
  }
}

const TOS: NextPage = () => {
  return (
    <div >
      <main className={"mt-6"}>
        <div>
          <div className={styles.sup_title}>
            <div className={styles.title}>
              <Image
                src={
                  "https://play-lh.googleusercontent.com/SxZPrpX_9O2WxFiI067oHMRxsRS0Ozz6clBvao5lrH2SA-lG7vXs8rU_Rf7BHz0CZ0YO=w240-h480-rw"
                }
                width={50}
                height={50}
                alt=""
                className={ styles.shadow +" rounded-md"}
              />
              <div>
                <h1 className="text-xl font-bold">Yearly Progress</h1>
                <h2 className="text-sm text-gray-500">Terms Of Service</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="prose prose-sm only prose-h1:mt-0 mt-5 ">
          <TermsOfService />
        </div>
        {/* <div>
                    <p>
                        A3 Inc. built the Yearly Progress app as
                        an Ad Supported app. This SERVICE is provided by
                        A3 Inc. at no cost and is intended for use as
                        is.
                    </p>
                    <p>
                        This page is used to inform visitors regarding our
                        policies with the collection, use, and disclosure of Personal
                        Information if anyone decided to use our Service.
                    </p>
                    <p>
                        If you choose to use our Service, then you agree to
                        the collection and use of information in relation to this
                        policy. The Personal Information that we collect is
                        used for providing and improving the Service. We will not use or share your information with
                        anyone except as described in this Privacy Policy.
                    </p>
                    <p>
                        The terms used in this Privacy Policy have the same meanings
                        as in our Terms and Conditions, which are accessible at
                        Yearly Progress unless otherwise defined in this Privacy Policy.
                    </p>
                    <h5>Information Collection and Use</h5>
                    <p>
                        For a better experience, while using our Service, we
                        may require you to provide us with certain personally
                        identifiable information. The information that
                        we request will be retained by us and used as described in this privacy policy.
                    </p>
                    <div>
                        <p>
                            The app does use third-party services that may collect
                            information used to identify you.
                        </p>
                        <p>
                            Link to the privacy policy of third-party service providers used
                            by the app
                        </p>
                        <ul>
                            <li><a href="https://www.google.com/policies/privacy/" target="_blank"
                                rel="noopener noreferrer">Google
                                Play Services</a></li>
                            <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank"
                                rel="noopener noreferrer">AdMob</a></li>
                        </ul>
                    </div>
                    <h5>Log Data</h5>
                    <p>
                        We want to inform you that whenever you
                        use our Service, in a case of an error in the app
                        we collect data and information (through third-party
                        products) on your phone called Log Data. This Log Data may
                        include information such as your device Internet Protocol
                        (“IP”) address, device name, operating system version, the
                        configuration of the app when utilizing our Service,
                        the time and date of your use of the Service, and other
                        statistics.
                    </p>
                    <h5>Service Providers</h5>
                    <p>
                        We may employ third-party companies and
                        individuals due to the following reasons:
                    </p>
                    <ul>
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>
                    <p>
                        We want to inform users of this Service
                        that these third parties have access to their Personal
                        Information. The reason is to perform the tasks assigned to
                        them on our behalf. However, they are obligated not to
                        disclose or use the information for any other purpose.
                    </p>
                    <h5>Security</h5>
                    <p>
                        We value your trust in providing us your
                        Personal Information, thus we are striving to use commercially
                        acceptable means of protecting it. But remember that no method
                        of transmission over the internet, or method of electronic
                        storage is 100% secure and reliable, and we cannot
                        guarantee its absolute security.
                    </p>
                    <h5>Links to Other Sites</h5>
                    <p>
                        This Service may contain links to other sites. If you click on
                        a third-party link, you will be directed to that site. Note
                        that these external sites are not operated by us.
                        Therefore, we h5ly advise you to review the
                        Privacy Policy of these websites. We have
                        no control over and assume no responsibility for the content,
                        privacy policies, or practices of any third-party sites or
                        services.
                    </p>
                    <h5>Children’s Privacy</h5>
                    <div><p>
                        These Services do not address anyone under the age of 13.
                        We do not knowingly collect personally
                        identifiable information from children under 13 years of age. In the case
                        we discover that a child under 13 has provided
                        us with personal information, we immediately
                        delete this from our servers. If you are a parent or guardian
                        and you are aware that your child has provided us with
                        personal information, please contact us so that
                        we will be able to do the necessary actions.
                    </p></div>
                    <h5>Changes to This Privacy Policy</h5>
                    <p>
                        We may update our Privacy Policy from
                        time to time. Thus, you are advised to review this page
                        periodically for any changes. We will
                        notify you of any changes by posting the new Privacy Policy on
                        this page.
                    </p> <p>This policy is effective as of 2022-06-21</p>
                    <h5>Contact Us</h5>
                    <p>
                        If you have any questions or suggestions about our
                        Privacy Policy, do not hesitate to contact us at a3gang03@gmail.com.
                    </p>

                </div> */}
        
      </main>
    </div>
  );
};

export default TOS;
