"use client"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import KidForm from '@/components/KidForm'
import KidGreetings from '@/components/KidGreetings'

import { useState } from 'react'

import styles from '@/styles/registration.module.scss'

import bg from '@/images/bg.jpg'
import logo from '@/images/logo.svg'

export default function ConfRegistration() {

  const [isSend, setIsSend] = useState(false)

  return (
    <>
      <Head>
        <title>Rejestracja</title>
      </Head>
      <div className={styles.container}>
        <Link href='/'>
          <Image
              src={logo}
              alt="Logo"
              height={100}
              className={styles.logo}
          />
        </Link>
        <h1 className={styles.title}>Płomień Ducha</h1>
        {isSend ? <KidGreetings /> : <KidForm setIsSend={ setIsSend }/>}
        <Image
            className={styles.bg}
            src={bg}
            alt="bg"
            fill={true}
        />
      </div>
    </>
  )
}