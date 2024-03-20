
import styled from "styled-components";
// Assets

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contact Us</h1>
            <p className="font13">
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div
            className="row"
            style={{ paddingBottom: "30px", height: "65vh" }}
          >
            <div className="flex flex-col justify-start gap-y-20 pl-5">
              <h3 className="text-xl font-semibold">Address: </h3>
              <h3 className="text-xl font-semibold">Phone Number: </h3>
              <h3 className="text-xl font-semibold">Email: </h3>
              <h3 className="text-xl font-semibold"> Career </h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
// const Form = styled.form`
//   padding: 70px 0 30px 0;
//   input,
//   textarea {
//     width: 100%;
//     background-color: transparent;
//     border: 0px;
//     outline: none;
//     box-shadow: none;
//     border-bottom: 1px solid #707070;
//     height: 30px;
//     margin-bottom: 30px;
//   }
//   textarea {
//     min-height: 100px;
//   }
//   @media (max-width: 860px) {
//     padding: 30px 0;
//   }
// `;
// const ButtonInput = styled.input`
//   border: 1px solid #7620ff;
//   background-color: #7620ff;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #7620ff;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;
// const ContactImgBox = styled.div`
//   max-width: 180px;
//   align-self: flex-end;
//   margin: 10px 30px 10px 0;
// `;
// const SumbitWrapper = styled.div`
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 50px;
//   }
// `;
