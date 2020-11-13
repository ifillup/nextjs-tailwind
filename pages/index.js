import {useState} from 'react'
import Head from 'next/head'
import TodoList from '../components/TodoList'
import AsyncHooks from '../components/AsyncHooks'
import  InfiniteScroll  from '../components/InfiniteScroll'




export default function Home() {
  
  return (
    <>
      <Head>
        <title>todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center mt-12 min-h-full'>
      <TodoList />
      
    </div>
    <footer>
     <a href='https://boiling-beach-16342.herokuapp.com/'>pd</a>
    </footer>
    </>
  )
}
