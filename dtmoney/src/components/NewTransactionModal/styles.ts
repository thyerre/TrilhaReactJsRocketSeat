import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.form``;

export const InputForm = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;

  border-radius: 0.25rem;
  background: #e7e9ee;
  border: 1px solid #d7d7d7;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
`;

export const ButtonSubimit = styled.button`
  width: 100%;
  padding: 0 1.5em;
  height: 4rem;
  background: var(--green);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const TitleModal = styled.h2`
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.7);
  }
`;
