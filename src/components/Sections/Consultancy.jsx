import FullButton from "../Buttons/FullButton";

import styled from "styled-components";

import { Link } from "react-scroll";
// Components
export default function Consultancy() {
  return (
    <Wrapper
      id="consultancy"
      className="consultancy flex flex-col h-fit pt-32 pb-24 items-left justify-start text-left gap-y-5"
    >
      <div className="container">
        <h1 className="extraBold font40">Consultancy</h1>
        <h3 className="font13 semiBold w-full min-h-[100px] h-fit break-words">
          {" "}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.fdsfdsfdsdfdsdsfsd Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.fdsfdsfdsdfdsdsfsd Lorem ipsum dolor
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea
          rebum.fdsfdsfdsdfdsdsfsd
        </h3>
        <div style={{ width: "190px" }}>
          <Link className="pointer" to="contact" smooth={true}>
            <FullButton title="Contact Us" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
