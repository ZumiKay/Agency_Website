import styled from "styled-components";
// Assets

import PropTypes from "prop-types";

export default function ServiceBox({ icon, title, subtitle }) {
  return (
    <Wrapper className="flex flexColumn">
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}
ServiceBox.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  subtitle: PropTypes.any,
};

const Wrapper = styled.div`
  width: 100%;
`;

const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
