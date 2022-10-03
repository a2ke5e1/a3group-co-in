import styles from '../styles/components/footer.module.scss'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.divider}></div>
            <div className={styles["sub-container"]}>
                <section className={styles["logo-container"]}>
                    <img src='/images/a3_logo.png' width={"60rem"} />
                    <p>©2022 A3 Group, All right reserved.</p>
                </section>
                <section className={styles["follow-container"]}>
                    <h5 className={styles["follow-site-title"]} >Follow our news site</h5>
                    <a className={styles["url-container"]} href='https://www.shinjinreview.com'>
                        <img
                            height={50}
                            className={styles["shinjin-logo"]}
                            src="https://static.wixstatic.com/media/b1b2a5_d35f04c6d5ff497382e0c0fee201f59c~mv2.png/v1/fill/w_81,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b1b2a5_d35f04c6d5ff497382e0c0fee201f59c~mv2.png" />
                        <div className={styles["shinjin-desc-container"]} >
                            <a className={styles["shinjin-desc-name"]}>Shinjin Review</a>
                            <a className={styles["shinjin-desc-desc"]}>Review Made Simple</a>
                        </div>
                    </a>
                </section>
                <section className={styles["other-url-containers"]}>
                    <Link href='/yearly_progress/privacy_policy'>Privacy Policy</Link>
                    <Link href='/about_us'>About Us</Link>
                </section>
            </div>
        </footer>
    )
}