import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Progress.module.css'

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
            </Head>
            <main>
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
                    <a className={styles.project_progress_link} href='/progress'>https://a3group.co.in/progress</a>
                </div>
            </main>
        </div>
    )
}

export default Progress
