import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import WHeader from "./components/WHeader";
import WFooter from "./components/WFooter";
// import "rsuite/dist/rsuite.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sahayta – AI-Powered Marketing Agency",
  description:
    "Sahayta is an AI-powered marketing agency offering website development, call automation, and social media management services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WHeader />
        {children}
        <WFooter />
      </body>
    </html>
  );
}
