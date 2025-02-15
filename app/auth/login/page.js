"use client";

import AuthPage from "@/components/auth/page";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <AuthPage isLogin={true} />
    </div>
  );
}
