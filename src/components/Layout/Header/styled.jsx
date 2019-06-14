import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  min-height: 72px;
  box-shadow: 4px 4px 40px 0 rgba(0,0,0,.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.headerBackground}
`
export const ButtonToggle = styled.div`
  width: 72px;
  height: 72px;
  line-height: 72px;
  text-align: center;
  transition: all .3s ease-out;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.linkHover}
    background: ${props => props.theme.ButtonToggleHover}
  }
`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  
`