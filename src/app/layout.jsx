"use client"


import Header from './Components/Header'
import Footer from './Components/Footer'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'YouNovel Academy',
  description: 'YouNovel Academy Finland Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Header />
        
        {children}
      
      <Footer />
      </body>
    </html>
  )
}
