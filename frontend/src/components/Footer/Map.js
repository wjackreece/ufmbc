import { React, useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const {} = useLoadScript({
    googleMapsApiKey: "AIzaSyDAergEMg0_18tZmuEPAecDJz8q6lMLfpg",
  });

  return <div>Map</div>;
};

export default Map;
