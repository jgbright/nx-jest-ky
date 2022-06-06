import styled from '@emotion/styled';
import ky from "ky";
import React from 'react';

/* eslint-disable-next-line */
export interface MylibProps {}

const StyledMylib = styled.div`
  color: pink;
`;

type StarWarsPerson = {
  name: string;
};

export function Mylib(props: MylibProps) {
  const [state, setState] = React.useState<StarWarsPerson>();
  React.useEffect(() => {
    (async () => {
      setState(await ky.get('https://swapi.dev/api/people/4').json());
    })();
  }, []);
  return (
    <StyledMylib>
      <h1>Welcome to Mylib!</h1>
      <p>{state?.name ?? "Loading..."}</p>
    </StyledMylib>
  );
}

export default Mylib;
