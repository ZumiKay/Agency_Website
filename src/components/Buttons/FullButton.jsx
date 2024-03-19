import PropTypes from "prop-types";

import styled from "styled-components";

export default function FullButton({ title, action, border, size, type, bg }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      type={type}
      onClick={action ? () => action() : null}
      border={border}
      style={size ? { padding: size } : bg ? { backgroundColor: bg } : {}}
    >
      {title}
    </Wrapper>
  );
}
FullButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
  border: PropTypes.any,
  size: PropTypes.any,
  type: PropTypes.string,
  bg: PropTypes.string,
};

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "" : "#7620ff")};
  width: 100%;
  padding: ${(props) => (props.size ? props.size : "15px")};
  outline: none;
  color: ${(props) => (props.border ? "white" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "#fff" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

const LoadingStatus = ({ color }) => {
  return (
    <div style={{ color }} className="text-lg w-full h-fit animate-pulse">
      Loading...
    </div>
  );
};
LoadingStatus.propTypes = {
  color: PropTypes.any,
};

export const SecondaryButton = ({
  title,
  onClick,
  disable,
  style,
  type,
  loading,
  id,
}) => {
  return (
    <button
      id={id}
      type={type ? type : "button"}
      onClick={() => {
        !loading && !disable && onClick && onClick();
      }}
      style={style}
      className={`w-full h-[50px] text-[15px] ${
        disable ? "opacity-50" : "opacity-100"
      } rounded-lg bg-[#11406E] text-white font-bold transition duration-300 hover:bg-black active:bg-black`}
    >
      {loading ? loading ? <LoadingStatus /> : title : title}
    </button>
  );
};

SecondaryButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  style: PropTypes.any,
  type: PropTypes.string,
  loading: PropTypes.bool,
  id: PropTypes.any,
};
