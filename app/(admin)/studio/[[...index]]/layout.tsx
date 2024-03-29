import { Newsreader } from "next/font/google";
import "../../../globals.css";

const newsreader = Newsreader({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Aselsa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={newsreader.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
