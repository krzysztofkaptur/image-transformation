import { ThemeProvider } from '@/providers'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Toaster } from '@/ui'

export const metadata: Metadata = {
  title: 'FilesFront',
}

const font = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
