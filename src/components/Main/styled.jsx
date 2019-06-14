import styled from 'styled-components'
export const RightWrapper = styled.div`
  height: 100vh;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
`
export const MainWrapper = styled.main`
  padding: 24px;
  background: ${props=>props.theme.mainBackground};
  min-height: calc(100vh - 144px)
`