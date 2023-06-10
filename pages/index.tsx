import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LargeButton from "../components/LargeButton";
import HeadDocument from "../components/HeadDocument";
import HeadingThree from "../components/text/HeadingThree";
import Link from "next/link";
import Logo from "../components/logo/Logo";
import styles from "./index.module.css";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const defaultClassnames =
      "w-full h-full object-cover absolute top-0 right-0 z-10";

    if (videoRef.current?.readyState === 4) {
      videoRef.current.className = defaultClassnames;
    } else {
      videoRef.current.className += " " + styles["video-blur"];
    }

    // videoRef.current.addEventListener("loadstart", () => {

    // })
  }, []);

  return (
    <>
      <HeadDocument isLandingPage />
      <main className="w-screen h-screen relative">
        <div className="w-fit mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center z-10 ">
          <div
            className="image-wrapper mx-auto relative"
            style={{ width: "100vw", height: "20vmin" }}
          >
            <Logo fontColor="white" />
          </div>
          <HeadingThree center color="white">
            Ara Gamaliel Boanerges&apos;s Personal Blog
          </HeadingThree>
          <div className="menus w-full flex justify-center mt-2">
            <LargeButton name="to-my-blog">
              <Link href="/me">
                <a className="flex text-white">
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2 w-4" />{" "}
                  About Me
                </a>
              </Link>
            </LargeButton>
            <LargeButton name="to-my-blog">
              <Link href="/blogs">
                <a className="flex text-white">
                  My Blogs
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4" />
                </a>
              </Link>
            </LargeButton>
          </div>
        </div>
        <div
          className="absolute w-full h-full -z-10"
          style={{
            backgroundImage: `url("./lp-rain-placeholder.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black opacity-30 absolute w-full h-full top-0 right-0 z-20"></div>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover absolute top-0 right-0 z-10"
          >
            <source src={"./lp-rain-2.mp4"} type="video/mp4" />
          </video>
        </div>
      </main>
    </>
  );
}
