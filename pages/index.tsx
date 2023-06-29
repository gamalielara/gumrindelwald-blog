import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeadDocument from "../components/HeadDocument";
import Link from "next/link";
import Logo from "../components/Logo";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const defaultClassnames = `${styles["video-background"]}`;

    if (videoRef.current?.readyState === 4) {
      videoRef.current.className = defaultClassnames;
    } else {
      videoRef.current.className =
        defaultClassnames + " " + `${styles["video-blur"]}`;
    }
  }, []);

  return (
    <>
      <HeadDocument isLandingPage />
      <main className={styles["main-page"]}>
        <div className={styles["main-content"]}>
          <div className={styles["logo-wrapper"]}>
            <Logo fontColor="white" />
          </div>
          <h3 className={styles["blog-desc-text"]}>
            Ara Gamaliel Boanerges&apos;s Personal Blogs
          </h3>

          <div className={styles["menus"]}>
            <button className={styles["opt-button"]}>
              <Link href="/me">
                <a className="flex text-white">
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2 w-4" />{" "}
                  About Me
                </a>
              </Link>
            </button>

            <div className={styles["rounded-button"]}>
              <button
                className={`${styles["opt-button"]} ${styles["to-all-blogs-button"]}`}
              >
                <Link href="/blogs">
                  <a className="flex text-white">
                    My Blogs
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4" />
                  </a>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className={styles["video-bg-wrapper"]}>
          <div className={styles["video-placeholder"]}></div>
          <video ref={videoRef} autoPlay muted loop playsInline preload="auto">
            <source src={"./lp-rain-2.mp4"} type="video/mp4" />
          </video>
        </div>
      </main>
    </>
  );
}
