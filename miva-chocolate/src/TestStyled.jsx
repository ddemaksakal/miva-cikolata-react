import React from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  padding: 20px;
  background-color: #f5f5dc;
`;

function TestStyled() {
  return (
    <TestContainer>
      <h1>Test Styled Component</h1>
      <p>This is a simple test to see if styled components work.</p>
    </TestContainer>
  );
}

export default TestStyled;