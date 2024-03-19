import styled from "styled-components";
import Logo from "../../assets/img/Logo.png";

export default function Paymentsidebar() {
  return (
    <Paymentnav className="navyBlue">
      <img
        src={Logo}
        alt="logo"
        className="w-[150px] h-[150px] object-cover "
        loading="eager"
      />
      <h3 className="text-xl text-white w-fit h-fit smallerscreen:text-[17px]">
        International Education Gateway Co Ltd
      </h3>
    </Paymentnav>
  );
}

const Paymentnav = styled.nav`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 99;
`;
