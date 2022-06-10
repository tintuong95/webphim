import { Button } from "antd";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { HideScreen } from "../components/HideScreen";

export function Play(): ReactElement {
  const [visible, setVisible] = useState<boolean>(false);
  let location: any = useLocation();
  const { filmDetail } = useSelector((state: any) => state.filmReducer);
  useEffect(() => {
    if (filmDetail.name == null || filmDetail.name == undefined) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [filmDetail.name]);

  return (
    <>
      {visible ? <HideScreen /> : ""}
     
      <div
        style={{ height: "100vh" }}
        className="d-flex flex-row justify-content-center align-items-center"
      >
         <NavLink to="/home">
         <Button size="large" className="back" type="link"> Home</Button>
         </NavLink>
        <iframe
          title="video"
          width="1280"
          height="720"
          src={location.state.link}
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
