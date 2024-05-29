import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import WS_forth from "@/components/webSocket/websocket-04";
import WS_third from "@/components/webSocket/websocket-03";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <Link href="/dashboard">Dashboard</Link>x
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {/* <WS_first />
        <WS_second /> */}
        {/* <WS_forth /> */}
        <WS_third />
      </div>
    </main>
  );
}
