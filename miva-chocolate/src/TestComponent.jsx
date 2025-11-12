import React from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  padding: 20px;
  background-color: #f5f5dc;
`;

function TestComponent() {
  return (
    <TestContainer>
      <h1>Test Component</h1>
      <p>This is a simple test component to verify our setup.</p>
    </TestContainer>
  );
}

export default TestComponent;