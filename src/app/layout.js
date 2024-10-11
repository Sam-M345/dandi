"use client";
import { useState } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from './components/Sidebar';
import styles from './components/Sidebar.module.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {sidebarOpen && <Sidebar />}
          <main style={{ flexGrow: 1, position: 'relative' }}>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                zIndex: 1000,
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              {sidebarOpen ? '←' : '→'}
            </button>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
