import styled from '@emotion/styled';
import { Mylib } from '@myorg/mylib';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Mylib />
      <NxWelcome title="myapp" />
    </StyledApp>
  );
}

export default App;
