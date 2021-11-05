import styled from "styled-components";

export const containerEquipe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const boxUm = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 10px;
  gap: 10px;
`;

export const boxDois = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const imagemEquipe = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;
export const textoDescricao = styled.h2`
  font-size: 20px;
  font-family: Roboto, source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-weight: 400;
  /* color: #001e1d; */
  padding: 10px;
  text-align: center;
`;

export const textoEquipe = styled.h1`
  font-size: 24px;
  font-family: Roboto, source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-weight: 400;
  /* color: #001e1d; */
  padding: 10px;
`;
