
import React from 'react'
import styled from 'styled-components'
import BaseLayout from '../BaseLayout'

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 50vw;
  max-width: 500px;
  height: ${({ theme }) => `calc(100vh - ${theme.headerHeight} - ${theme.footerHeight})`};
`

interface CardProps {
  children: React.ReactChild
}

const CardLayout = ({ children }: CardProps) => {
  return (
    <BaseLayout>
      <CardContainer>
        {children}
      </CardContainer>
    </BaseLayout>
  )
}

export default CardLayout