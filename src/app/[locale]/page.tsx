import Image from "next/image";
import styles from "./page.module.css";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "../../navigation";

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {locale === "en" ? (
          <Link href="/" locale="th">
            <p>
              เปลี่ยนเป็นภาษา<code className={styles.code}>ไทย</code>
            </p>
          </Link>
        ) : (
          <Link href="/" locale="en">
            <p>
              Change language to <code className={styles.code}>English</code>
            </p>
          </Link>
        )}
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("by")}
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
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{t("docsTitle")}</h2>
          <p>{t("docsDesc")}</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{t("learnTitle")}</h2>
          <p>{t("learnDesc")}</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{t("templatesTitle")}</h2>
          <p>{t("templatesDesc")}</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{t("deployTitle")}</h2>
          <p>{t("deployDesc")}</p>
        </a>
      </div>
    </main>
  );
}
