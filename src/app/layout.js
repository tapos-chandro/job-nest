import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Footer from "./components/Footer";
import CustomHead from "./components/CustomHead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "JobPortal",
    template: "%s | JobPortal",
  },
  description: "Find your dream job with JobPortal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <Providers>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
