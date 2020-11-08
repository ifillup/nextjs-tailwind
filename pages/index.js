import {useState} from 'react'
import Head from 'next/head'
import TodoList from '../components/TodoList'




export default function Home() {
  
  return (
    <>
      <Head>
        <title>todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center mt-12'>
      <TodoList />
    </div>
    </>
  )
}
