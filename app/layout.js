"use client";

// pagefor: the Wrapper of the whole Application

import GlobalContextProvider from "@/context/globalcontext";
import "./globals.css";
import GlobalDateContextProvider from "@/context/datecontext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <GlobalDateContextProvider>
        <html lang="hu">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Kismókus Vendégház</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap"
              rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap"
              rel="stylesheet"
            />
            <meta
              name="description"
              content="A Kismókus Vendégház egy Nagymaroson található, 4 szobás, 10 férőhelyes vendégház. Ha Dunakanyarban szeretne pihenni, velünk mind megteheti. Kattintson és foglaljon már most!"
            />
            <meta
              name="keywords"
              content="Kismókus, vendégház, kismókus, dunakanyar, Nagymaros, erdő, szállás"
            />
            <meta
              name="robots"
              content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
          </head>
          <body>
            {children}
            <Analytics />
            <SpeedInsights />
          </body>
        </html>
      </GlobalDateContextProvider>
    </GlobalContextProvider>
  );
}
