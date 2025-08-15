import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import { store } from "./redux/store";
import ReduxProvider from "./redux/reduxProvider";

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

        <ReduxProvider>
          <Providers>
            <NavBar></NavBar>
            {children}
            <Footer />
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
