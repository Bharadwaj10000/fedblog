import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
const Sidebar = () => {
  return (
    <>
      <aside className="Sidebar">
          <ul className="SidebarList">
            {SidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="row"
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div id="title">{val.title}</div>
                </li>
              );
            })}
          </ul>
      </aside>
    </>
  );
};

export default Sidebar;
