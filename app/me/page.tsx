import { Metadata, NextPage } from "next";
import Image from "next/image";
import PageContainer from "../components/container/PageContainer";
import MeImage from "../../assets/me.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faInternetExplorer,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { MENUS } from "<utils>/constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "gumrindelwald / About",
    keywords: [
      "gumrindelwald",
      "Ara Gamaliel Boanerges",
      "Ara Gamaliel Boanerges's Personal Blog",
      "Blog",
      "Buku",
      "Film",
      "Teknologi",
    ],
    authors: { name: "Ara Gamaliel Boanerges", url: "https://gamalielara.com" },
    openGraph: {
      title: "gumrindelwald / About",
      description:
        "About gumrindelwald - Ara Gamaliel Boanerges's Personal Blog",
      siteName: "gumrindelwald",
      url: `https://gumrindelwald.com/me`,
      images:
        "https://firebasestorage.googleapis.com/v0/b/gumrindelwald-backend.appspot.com/o/images%2Fme.jpeg?alt=media",
    },
  };
}

const AboutMe: NextPage = () => {
  return (
    <>
      <PageContainer noFooter selectedRoute={MENUS.About_Me.url}>
        <div className={styles["me-page-container"]}>
          <div className={styles["me-image-large"]}>
            <Image
              src={MeImage}
              alt="Ara Gamaliel Boanerges"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles["me-image-small"]}>
            <Image
              src={MeImage}
              alt="Ara Gamaliel Boanerges"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <article className={styles["about-container"]}>
            <h1 className={styles["my-name"]}>Hello, I am Ara Gamaliel</h1>
            <h2 className={styles["my-name-sub"]}>
              the creator and the sole author in gumrindelwald.
            </h2>
            <div className={styles["about-me-body"]}>
              <p>
                Writing and reading activities has always been my favorite thing
                to do since I was a child. I had tried to write a blog before,
                but never sustained until ... this.
              </p>
              <p>
                Back then in 2021, I started to learn web development for the
                first time with a sole motivation: I wanted to create my own
                blog using my own two hands. And on November 1st 2021,
                thankfully my dreams came true. Web development also becomes my
                passion, and I began to take this seriously.
              </p>
              <p>
                In this blog I write a lot about stuff I really am fascinated
                with, which are books, film, technology, psychology and some of
                my personal thoughts. I believe every body is free to express
                their opinions and their thoughts. Every one should be
                independently express themselves.
              </p>
              <p>
                I hope you find this blog useful and, perhaps, helpful. If you
                want to say something to me regarding my post or if you want to
                connect with me, please do not hestitate to reach me through my
                social media.
              </p>
            </div>
          </article>
        </div>
        <div className={styles["med-sos"]}>
          <p>My social medias:</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/aragamaliel/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://gamalielara.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInternetExplorer} />
                My personal website
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/gamalielboanerges/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </a>
            </li>

            <li>
              <a
                href="mailto:aragamalielboanerges@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faMailBulk} />
                aragamalielboanerges@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["waves"]} />
      </PageContainer>
    </>
  );
};

export default AboutMe;
