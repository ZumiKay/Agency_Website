import styled from "styled-components";

export function NotFound() {
  return (
    <Errordiv className="error_container">
      <h1 className="text-3xl font-bold">
        {" "}
        <span className="text-red-400">404</span> | Page Not Found
      </h1>
    </Errordiv>
  );
}

export function ErrorComponent({ error }) {
  return (
    <Errordiv className="error_container">
      <h1 className="text-3xl font-bold w-full break-words">
        {" "}
        <span className="text-red-400">Error Occured</span> |{" "}
        {error && error.toString()}
      </h1>
    </Errordiv>
  );
}

const Errordiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
