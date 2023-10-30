import { Fragment } from "react";

function Sidebar() {
  const sideBarToggle = (e: any): void => {
    const sideList: any = document.querySelector(".sidebar");
    if (sideList) {
      sideList.classList.toggle("sidebarNone");
    }
  };

  return (
    <Fragment>
      <div
        className=""
        style={{ zIndex: "99", position: "fixed" }}
      >
        <div className="mt-2 ms-2 d-block d-md-none" style={{ position: "relative" }}>
          <div
            className="d-flex"
            onClick={sideBarToggle}
            style={{ margin: "10px , 0px , 0px ,5px" }}
          >
            <div>
              <i className="fas fa-regular fa-bars fa-2xl" style={{color:"#fff"}}></i>
            </div>
          </div>
          <nav
            className="sidebar sidebarNone ms-2 py-2"
            style={{
              backgroundColor: "white",
              transition: "all .3s ease-in-out",
            }}
          >
            <ol className="pe-1 p-0 m-0">
              <li className="">
                <a className="py-2 sideBarItem px-3" href="#head">
                  Home
                </a>
              </li>
              <li className="">
                <a className="py-2 sideBarItem px-3" href="#work">
                  Work
                </a>
              </li>
              <li className="">
                <a className="py-2 sideBarItem px-3" href="#contact">
                  Contact
                </a>
              </li>
              <li className="">
                <a className="py-2 sideBarItem px-3" href="#about">
                  About
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
