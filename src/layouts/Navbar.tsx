import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <>
      {/* Navbar start */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              {" "}
              Shopping{" "}
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sản phẩm
                </a>
              </li>
              <li className="nav-item">
                {/* Icon */}
                <a className="text-reset me-3 nav-link" href="#">
                  <i className="fas fa-shopping-cart" />
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên hệ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Đăng ký
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Đăng nhập
                </a>
              </li>
            </ul>
            {/* Avatar */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height={25}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar end */}
    </>
  );
};

export default Navbar;
