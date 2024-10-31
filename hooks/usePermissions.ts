import { useEffect } from "react";

export default () => {
  useEffect(() => {
    navigator.permissions.query({
      name: "geolocation"
    }).then(() => {
      navigator.geolocation.getCurrentPosition(() => {
      });
    });
  }, []);
}
