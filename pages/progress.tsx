import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Progress.module.css'
import Link from 'next/link'

const Progress: NextPage = () => {
    return (

        /* 
            <Image
                alt='Progress'
                src='/images/progress.png'
                layout='fill'
                objectFit='contain'
                />
        
        */

        <div>
            <Head>
                <title>A3 Group</title>
                <meta name="title" content="A3 Group" />
                <meta name="description" content="A3 Group is a group of friends trying to make some apps." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.a3group.co.in/progress" />
                <meta property="og:title" content="A3 Group" />
                <meta property="og:description" content="A3 Group is a group of friends trying to make some apps." />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.a3group.co.in/progress" />
                <meta property="twitter:title" content="A3 Group" />
                <meta property="twitter:description" content="A3 Group is a group of friends trying to make some apps." />
                <meta property="twitter:image" content=""></meta>
            </Head>
            <main className={styles.container} >
                <div className={styles.project_container}>
                    <a className={styles.project}>Project</a>
                    <a className={styles.project_title}>mínyma opoudípote</a>
                </div>
                <div className={styles.project_alt_divider}></div>
                <a className={styles.project_alt}>どこでもメッセージ</a>
                <div className={styles.project_arrival_container}>
                    <a className={styles.project_arrival}>Comming Fall</a>
                    <a className={styles.project_arrival_year}>2023</a>
                </div>
                <div className={styles.project_progress_container} >
                    <img src='/images/a3_logo.png' height={30} />
                    <Link legacyBehavior href='/progress'><a className={styles.project_progress_link}>
                        https://a3group.co.in/progress</a></Link>
                </div>
            </main>
        </div>
    )
}

export default Progress
