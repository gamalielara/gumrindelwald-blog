import { NextPage } from "next";
import Image from "next/image";
import PageContainer from "../../components/container/PageContainer";
import HeadDocument from "../../components/HeadDocument";
import MeImage from "../../assets/me.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faInternetExplorer,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const AboutMe: NextPage = () => {
  return (
    <>
      <HeadDocument docTitle="About" />
      <PageContainer>
        <div className="flex md:flex-row flex-col gap-4 w-full mt-8 md:px-0 px-2">
          <div className="image-container md:w-1/3 w-full md:h-[75vh] h-[50vh] relative">
            <Image
              src={MeImage}
              alt="Ara Gamaliel Boanerges"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <article className="md:w-2/3 w-full article-post">
            <h1 className="md:text-5xl sm:text-3xl text-2xl m-0">
              Hello, I am Ara Gamaliel
            </h1>
            <h2 className="md:text-2xl sm:text-xl text-base m-0">
              the creator and the sole author in gumrindelwald.
            </h2>
            <div className="body sm:text-base text-sm text-justify">
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
            <p className="font-bold">My social medias:</p>
            <ul className="list-none p-0">
              <li>
                <a
                  href="https://twitter.com/gumrindelwald"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 mr-2" />
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/gamalielboanerges/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-4 h-4 mr-2"
                  />
                  Instagram
                </a>
                <a
                  href="mailto:aragamalielboanerges@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={faMailBulk} className="w-4 h-4 mr-2" />
                  aragamalielboanerges@gmail.com
                </a>
                <a
                  href="https://gamalielara.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faInternetExplorer}
                    className="w-4 h-4 mr-2"
                  />
                  My personal website
                </a>
              </li>
            </ul>
          </article>
        </div>
      </PageContainer>
    </>
  );
};

export default AboutMe;
