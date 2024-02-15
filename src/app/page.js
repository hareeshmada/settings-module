'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { First } from "@/components/first";
import { Settings } from "@/app/settingsModule/settings";
import Link from "next/link";
import MyPage from "@/components/mypage";
import { Loading } from "@/components/customHooks/loading";
import { useEffect, useState } from "react";
import App, { DragAndDrop } from "@/components/dragAndDrop";
import Example from "@/components/dragAndDrop2";
import { Dashboard } from "@/components/dashboard/dashboard";

export default function Home() {
  console.log("hmm")
  return (
    <div>
      <Dashboard/>
      {/* <div className={styles.settingsbtn}>
        <Link href="/settingsModule/masters/employee"><div>Settings</div></Link>
        <Link href='/login'><div>Login</div></Link>

        
    </div> */}
    <div>

    </div>
    {/* <MyPage/> */}
    {/* <Example/> */}
    {/* <Loading text='Loading Text...'/> */}
    </div>
      );
}
