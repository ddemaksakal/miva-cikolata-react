import React from 'react';
import styled from 'styled-components';

// Test component that previously would cause styled-components warnings
const TestContainer = styled.div`
  background: ${props => props.$active ? '#4B2E2E' : '#f0f0f0'};
  opacity: ${props => props.$visible ? 1 : 0};
  padding: 1rem;
  transition: all 0.3s ease;
`;

const TestImage = styled.div`
  background: url(${props => props.$image}) center/cover no-repeat;
  width: 100px;
  height: 100px;
`;

function TestComponent() {
  return (
    <div>
      <TestContainer $active={true} $visible={true}>
        This should not cause DOM warnings
      </TestContainer>
      <TestImage $image="/test.jpg" />
    </div>
  );
}

export default TestComponent;