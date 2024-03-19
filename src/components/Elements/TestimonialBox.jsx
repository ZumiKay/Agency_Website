import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";
import PropTypes from "prop-types";

export default function TestimonialBox({ text, author }) {
  return (
    <Wrapper className="darkBg radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>
      <p className="whiteColor font13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
      <p className="orangeColor font13" style={{ alignSelf: "flex-end" }}>
        <em>{author}</em>
      </p>
    </Wrapper>
  );
}
TestimonialBox.propTypes = {
  text: PropTypes.string,
  author: PropTypes.any,
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;
