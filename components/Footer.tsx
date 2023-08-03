import styles from '../styles/components/footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
    policy_url: string | null,
    delete_data_url?: string | null
}

export default function Footer(
    { policy_url, delete_data_url }: FooterProps
) {
    return (
        <footer className={styles.container}>
            <div className={styles.divider}></div>
            <div className={styles["sub-container"]}>
                <section className={styles["logo-container"]}>
                    <Image src='/images/a3_logo.png' width={"60"} height={"21"} alt="A3 Group Logo" />
                    <p className={styles["copy-right"]}>©2022 A3 Group, All right reserved.</p>
                </section>
                {/* <section className={styles["follow-container"]}>
                    <h5 className={styles["follow-site-title"]} >Follow our news site</h5>
                    <Link className={styles["url-container"]} href='https://www.shinjinreview.com'>
                        <img
                            height={50}
                            className={styles["shinjin-logo"]}
                            src="https://static.wixstatic.com/media/b1b2a5_d35f04c6d5ff497382e0c0fee201f59c~mv2.png/v1/fill/w_81,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b1b2a5_d35f04c6d5ff497382e0c0fee201f59c~mv2.png" />
                        <div className={styles["shinjin-desc-container"]} >
                            <div className={styles["shinjin-desc-name"]}>Shinjin Review</div>
                            <div className={styles["shinjin-desc-desc"]}>Review Made Simple</div>
                        </div>
                    </Link>
                </section> */}
                <section className={styles["other-url-containers"]}>
                    {delete_data_url && <Link href={delete_data_url}>Delete Your Data</Link>}
                    {policy_url && <Link href={policy_url}>Privacy Policy</Link>}
                    <Link href='/about-us'>About Us</Link>
                </section>
            </div>
        </footer>
    )
}