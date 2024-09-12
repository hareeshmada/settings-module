'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider } from "react-redux";
import appStore from "@/store/appStore";
import { UserProvider } from "@/contexts/userDataContext";

// const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <UserProvider>
          <Provider store={appStore}>
            {children}
          </Provider>
        </UserProvider>
        
        
      </body>
    </html>
  );
}
