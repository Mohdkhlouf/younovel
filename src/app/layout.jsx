"use client"


import Header from './Components/Header'
import Footer from './Components/Footer'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Title</title>
        <meta name='YouNovel Academy' content='YouNovel Academy Finland Website' />
      </head>

      <body>
        
        <Header />
        
        {children}
      
      <Footer />
      </body>
    </html>
  )
}
