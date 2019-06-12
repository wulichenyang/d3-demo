import styled from 'styled-components'

export const SideBarWrapper = styled.aside`
  flex: 0 0 256px;
  max-width: 256px;
  min-width: 256px;
  width: 256px;
  height: 100%;
  position: relative;
  box-shadow: 0 0 28px 0 rgba(24,144,255,.1);
  transition: all .2s;
`

export const SideBarInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const LogoWrapper = styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SideContentWrapper = styled.div`
  height: calc(100vh - 72px);
`

export const SideNavList = styled.ul`
  padding: 0;
  height: 100%;
  overflow: auto;
  transition: background .3s,width .2s;
`

export const SideNavItem = styled.li`
  height: 40px;
  line-height: 40px;
  &:hover {
    
  }
  &>a {
    width: 100%;
    display: inline-block;
    padding-left: 24px;
    padding-right: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1);
    color: ${props => props.theme.asideText};
    &:hover {
      color: ${props => props.theme.asideLinkActive};
    }
    &.active {
      color: ${props => props.theme.asideLinkActive};
      background-color: ${props => props.theme.asideLinkActiveBackground};
    }
  }

`



// export const SideBarSectionWrapper = styled.section`
//   padding: 5px 2px;
// `

