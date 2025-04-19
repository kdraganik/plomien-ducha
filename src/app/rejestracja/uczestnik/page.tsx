"use client"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AttendeeForm from '@/components/AttendeeForm'
import AttendeeGreetings from '@/components/AttendeeGreetings'

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
        {isSend ? <AttendeeGreetings /> : <AttendeeForm setIsSend={ setIsSend }/>}
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