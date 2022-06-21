import {NextPage} from "next";
import Link from "next/link";
import styles from "../../styles/yearly_progress/Privacy.module.css"
import Image from "next/image";

const Privacy_policy: NextPage = () => {


    const HEADER = (
        <div>
            <p>
                Yearly Progress is a product of A3 Inc's which operates under the A3 Inc's
                App mobile application (the "Service"). This page informs you of our policies regarding the collection,
                use, and disclosure of personal data when you use our Service and the choices you have associated with
                that data. Our Privacy Policy for We use your data to provide and improve the Service. By using the
                Service, you agree to the collection and use of information in accordance with this policy. Unless
                otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in
                our Terms and Conditions.
            </p>
        </div>
    )

    const ICAU = (
        <div>
            <h5>
                Information Collection And Use
            </h5>
            <p>
                We collect don't any type of information. but We use third party service which may collect data for
                various purposes to provide and improve ads to you
            </p>
        </div>
    )

    const PD = (
        <div>
            <h5>
                Personal Data
            </h5>
            <p>
                While using our Service, we don't collect any data but Admob may ask you to provide us with certain
                personally identifiable information that can be used to contact or identify you ("Personal Data").
            </p>
        </div>
    )

    const SD = (
        <div>
            <h5>
                Security Of Data
            </h5>
            <p>
                The security of your data is important to us, So we don't collect data personally
            </p>
        </div>
    )

    const AdsP = (
        <div>
            <h5>
                Ads Providers
            </h5>
            <p>
                We employ third party companies ie; Admob to provide ads, to perform Service-related services or to
                assist
                us in analyzing how our Service is used. These third parties have access to your Personal Data only to
                perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p>
                We recommend you to see <Link href={"https://support.google.com/admob/answer/6128543?hl=en"}>Admob's
                privacy Policy</Link>.
            </p>
        </div>
    )

    const LOS = (
        <div>
            <h5>
                Links To Other Sites
            </h5>
            <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third party
                link, you will be directed to that third party's site. We strongly advise you to review the Privacy
                Policy of every site you visit. We have no control over and assume no responsibility for the content,
                privacy policies or practices of any third party sites or services.
            </p>
        </div>
    )

    const CTPP = (
        <div>
            <h5>
                Changes To This Privacy Policy
            </h5>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
            </p>
            <p>
                We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
                effective and update the "effective date" at the top of this Privacy Policy.
            </p>
            <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
            </p>
        </div>
    )

    const CU = (
        <div>
            <h5>
                Contact Us
            </h5>
            <p>
                If you have any questions about this Privacy Policy, please contact us:
                <ul>
                    <li>
                        By email: <Link href={"mailto:a3gang03@gmail.com"}>a3gang03@gmail.com</Link>
                    </li>
                    <li>
                        Visit Our Website: <Link href={"https://a3group.co.in"}>A3 | Official</Link>
                    </li>
                </ul>
            </p>
        </div>
    )

    return (
        <div>
            <head>
                <title>Yearly Progress - Privacy Policy</title>
            </head>
            <img
                src={"https://play-lh.googleusercontent.com/SxZPrpX_9O2WxFiI067oHMRxsRS0Ozz6clBvao5lrH2SA-lG7vXs8rU_Rf7BHz0CZ0YO=w240-h480-rw"}
                className={styles.shadow}/>
            <h1>Yearly Progress</h1>
            <h2>Privacy Policy</h2>
            <div className={styles.body}>
                {HEADER}
                {ICAU}
                {PD}
                {SD}
                {AdsP}
                {LOS}
                {CTPP}
                {CU}
            </div>
        </div>
    )
}

export default Privacy_policy