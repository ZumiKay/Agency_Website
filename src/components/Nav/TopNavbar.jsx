import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets

import BurgerIcon from "../../assets/svg/BurgerIcon";
import Logo from "../../assets/img/Logo.png";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate navyBlue text-white"
        style={y > 100 ? { height: "60px" } : { height: "100px" }}
      >
        <NavInner className="flexSpaceCenter w-full h-fit">
          <Link
            className="navlink pointer flex flex-row items-center  min-w-[400px] w-[30%] ml-24 h-full smallphone:ml-1 smallphone1:min-w-fit"
            to={"home"}
            smooth={true}
          >
            {/* <LogoIcon /> */}
            <img
              style={
                y > 100
                  ? {
                      width: "150px",
                      height: "150px",
                      transition: ".5s",
                      objectFit: "contain",
                    }
                  : {
                      width: "200px",
                      height: "200px",
                      objectFit: "contain",
                    }
              }
              src={Logo}
              alt="Logo"
              loading="eager"
            />
            <h1 className="font20 extraBold text-white phone:text-sm smallphone1:hidden">
              International Education Gateway Cambodia
            </h1>
          </Link>

          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter h-fit w-[60%]">
            <li className="semiBold font15 pointer">
              <Link
                className="text-white"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link
                className="text-white"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="student"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Sudent Placement
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="text-white"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="summer"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Summer School
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="text-white"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="consultancy"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Consultancy
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="text-white"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="studentaccomendation"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Student Accommodation
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="text-white"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="aboutus"
                spy={true}
                smooth={true}
                offset={-80}
              >
                About Us
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                className="text-white"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact Us
              </Link>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 1444px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  @media (max-width: 1444px) {
    display: none;
  }
`;
