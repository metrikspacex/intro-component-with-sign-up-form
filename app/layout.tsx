import "@/styles/main.scss";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  preload: false,
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  description: "Frontend Mentor | Intro component with sign up form",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
  title: "Frontend Mentor | Intro component with sign up form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
