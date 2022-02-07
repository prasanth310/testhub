import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Collapse } from "reactstrap";
import user4 from "../../assets/images/users/avatar-4.jpg";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
  changeTopbarTheme,
  showRightSidebarAction,
} from "../../store/actions";

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

import "./rightbar.scss";

const RightSidebar = (props) => {
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [component, setcomponent] = useState(false);
  const [extra, setextra] = useState(false);
  return (
    <>
      <div className="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center px-3 py-4">
              <img
                className="rounded-circle header-profile-user"
                src={user4}
                alt="Header Avatar"
              />
              <h5 className="m-0 ms-2">Admin</h5>
            </div>

            <hr className="my-0" />
            <div className="p-4">
              <Collapse
                isOpen={true}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      to="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setui(!ui);
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="uil-flask me-2"></i>
                      UI Elements <div className="arrow-down"></div>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setapp(!app);
                      }}
                      className="nav-link dropdown-togglez arrow-none"
                    >
                      <i className="uil-apps me-2"></i>
                      Apps <div className="arrow-down"></div>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/#"
                      className="nav-link dropdown-toggle arrow-none"
                      onClick={(e) => {
                        e.preventDefault();
                        setcomponent(!component);
                      }}
                    >
                      <i className="uil-layers me-2"></i>
                      Components <div className="arrow-down"></div>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setextra(!extra);
                      }}
                    >
                      <i className="uil-copy me-2"></i>
                      Extra pages <div className="arrow-down"></div>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      to="/profile"
                      onClick={() => {
                        props.showRightSidebarAction(false);
                      }}
                    >
                      <i className="uil uil-user-circle me-2"></i>
                      View Profile
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      to="/login"
                    >
                      <i className="uil uil-sign-out-alt me-2"></i>
                      Logout
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>
        </SimpleBar>
      </div>
      <div
        className="rightbar-overlay"
        onClick={() => {
          props.showRightSidebarAction(false);
        }}
      />
    </>
  );
};

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changePreloader: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  isPreloader: PropTypes.any,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  topbarTheme: PropTypes.any,
};

const mapStateToProps = (state) => {
  return { ...state.Layout };
};

export default connect(mapStateToProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  changePreloader,
  showRightSidebarAction,
})(RightSidebar);
