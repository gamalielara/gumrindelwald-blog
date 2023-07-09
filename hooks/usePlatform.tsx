import { useEffect, useState } from "react";

enum Platform {
  ANDROID = "android",
  IOS = "ios",
  WEB = "web",
}

export default () => {
  const [isInMobile, setIsInMobile] = useState<boolean>();
  const [platform, setPlatform] = useState<Platform>();

  useEffect(() => {
    if (navigator.userAgent) {
      setIsInMobile(
        Boolean(navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod/i))
      );

      if (navigator.userAgent.match(/iPhone|iP(a|o)d/gim)) {
        setPlatform(Platform.IOS);
      } else if (navigator.userAgent.match(/Android/gim)) {
        setPlatform(Platform.ANDROID);
      } else {
        setPlatform(Platform.WEB);
      }
    }
  }, []);

  return [isInMobile, platform];
};
