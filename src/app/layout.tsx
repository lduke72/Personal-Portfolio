import { Newsreader, Manrope } from 'next/font/google'
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

const newsreader = Newsreader({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-newsreader'
})

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans min-h-screen bg-gradient-to-r from-white to-gray-100 text-zinc-900`}>
        <Sidebar />
        <div className="ml-64 min-h-screen flex flex-col">
          <main className="flex-1 px-10 py-12">{children}</main>
          <div className="px-10">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
