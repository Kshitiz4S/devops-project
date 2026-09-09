import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Art-Gallery",
  description: "Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <div className="container">

            <Header />

              <main className="content">
                {children}
              </main>

            <Footer />

          </div>
        </div>
      </body>
    </html>
  );
}