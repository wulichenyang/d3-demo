import styled from 'styled-components'

export const AppWrapper = styled.div`

`

export const StyledWrapper = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
// font-family: ${props => props.theme.primaryFontFamily};
font-size: 13px;
-webkit-font-smoothing: antialiased;
overflow: hidden;
`
export const BreadTabWrapper = styled.section`
  margin-bottom: 24px;
  color: ${props=>props.theme.breadTabText}
`
export const GraphViewWrapper = styled.section`
  padding: 24px 36px;
  background-color: ${props=>props.theme.graphViewWrapperBackground}
  transition: all .3s ease
  &:hover {
    box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    transition: all .3s ease
  }
`