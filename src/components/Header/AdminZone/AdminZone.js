import React, { useLayoutEffect } from "react";
import Style from "./AdminZone.module.css"

export default function AmdminZone(){
    return (
        <div className={Style.adminzone}>
          <a href="#">Администрирование</a>
        </div>
    );
}