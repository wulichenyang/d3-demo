import styled from 'styled-components'
export const RightWrapper = styled.div`
  padding-top: 72px;
  height: calc(100vh - 72px);
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
`
export const MainWrapper = styled.main`
  padding: 24px;
  background: ${props=>props.theme.mainBackground};
  min-height: calc(100vh - 144px)
`

export const BreadTabWrapper = styled.section`
  margin-bottom: 24px;
  color: ${props => props.theme.breadTabText}
`