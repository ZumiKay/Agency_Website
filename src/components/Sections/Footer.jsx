import styled from "styled-components";
import { Link } from "react-scroll";
import Logo from "../../assets/img/Logo.png";
// Assets

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="navyBlue">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <img
                src={Logo}
                alt="logo"
                className="w-[250px] h-[250px] object-cover"
                loading="eager"
              />

              <h1
                className="font20 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                Internation Education Gateway Cambodia
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="text-white font13">IEG Cambodia</span> All Right
              Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13 font-bold"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
