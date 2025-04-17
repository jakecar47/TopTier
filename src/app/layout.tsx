import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

// display project title properly in the web browser
export const metadata: Metadata = {
  title: "TopTier"
};

// basic root layout
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
