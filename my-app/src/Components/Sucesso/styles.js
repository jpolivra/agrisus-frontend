import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #004643 0%, #012f2d 100%);
`;

export const imagemSucess = styled.img`
  width: 100%;
  height: 100%;
`;

export const textoSucess = styled.h1`
  font-size: 24px;
  text-align: center;
  font-family: Roboto, source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-weight: 400;
  color: #ffffff;
  padding: 10px;
`;
