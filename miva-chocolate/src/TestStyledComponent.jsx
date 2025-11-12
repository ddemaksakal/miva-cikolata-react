import React from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  padding: 20px;
  background-color: #f5f5dc;
`;

const TestSection = styled.section`
  margin: 20px 0;
`;

function TestStyledComponent() {
  return (
    <TestContainer>
      <TestSection>
        <h1>Test Styled Component</h1>
        <p>This is a simple test to see if styled components work.</p>
      </TestSection>
    </TestContainer>
  );
}

export default TestStyledComponent;