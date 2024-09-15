import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { createClient } from "@/utils/supabase/server";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Kavach | Vishnu",
  description: "Sharing your location with your loved ones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
          <div className="w-96 left-2 h-24 absolute bottom-12  z-[1000] bg-white rounded-md border-2 px-8 py-4">
            <p>Tracking <b>Pranjal Rastogi</b></p>
            <p>ETA: <b>6:30</b></p>
          </div>
          <div className="w-[100vw] items-center absolute top-4 z-[1000]">
              <img className="w-32 m-auto" src="/kavach.png"></img>
          </div>
          {children}
      </body>
    </html>
  );
}
