import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "📒 txt made simple again",
  description: "A simple text editor to write and count words",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es' className='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
