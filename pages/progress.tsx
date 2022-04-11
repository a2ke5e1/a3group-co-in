import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Progress: NextPage = () => {
    return (
        <Image
            alt='Progress'
            src='/images/progress.png'
            layout='fill'
            objectFit='contain'
        />)
}

export default Progress
