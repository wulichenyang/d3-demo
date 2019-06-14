import styled from 'styled-components'

export const SideBarWrapper = styled.aside`
flex: 0 0 256px;
max-width: 256px;
min-width: 256px;
width: 256px;
height: 100%;
position: relative;
box-shadow: 0 0 28px 0 rgba(0,0,0,.05);
transition: all .2s;
  
&.sidebar-collapsed {
  flex: 0 0 80px;
  max-width: 80px;
  min-width: 80px;
  width: 80px;
  transition: all .2s;
  .logo-wrapper {
    img {
      width: 48px;
      transition: width ease .3s;
    }
    span {
      width: 0;
      transition: width .3s ease;
    }
  }
  li {
    line-height: initial;
    }
    li>a {
      display: flex;
      justify-content: center;
      padding-left: 16px;
      text-align: center;
      &:after {
        border-right: none;
        transition: all ease .3s
      }
      i {
        font-size: 16px
        margin-right: 0;
        line-height: 40px;
        transition: font-size .15s cubic-bezier(.215,.61,.355,1),margin .3s cubic-bezier(.645,.045,.355,1);
      }
      span {
        transition: ease-out width .3s;
        display: inline-block;
        width: 0;
        opacity: 0;
      }
    }
  }
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
  box-shadow: 0 1px 9px -3px rgba(0,0,0,.2);
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
    position: relative;
    padding-left: 24px;
    padding-right: 16px;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1);
    color: ${props => props.theme.asideText};
    &:hover {
      color: ${props => props.theme.asideLinkActive};
    }
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      border-right: ${props=>props.theme.asideLinkRightBorderActive};
      transform: scaleY(.0001);
      transition: transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1);
      content: "";
    }
    &.active {
      color: ${props => props.theme.asideLinkActive};
      background-color: ${props => props.theme.asideLinkActiveBackground};
      &:after {
        transform: scaleY(1);
        opacity: 1;
        transition: transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1);
        border-right: ${props=>props.theme.asideLinkRightBorderActive};
      }
    }
    i {
      width: 14px;
      margin-right: 10px;
      font-size: 13px;
      transition: font-size .15s cubic-bezier(.215,.61,.355,1),margin .3s cubic-bezier(.645,.045,.355,1);    
    }
  }
  `

export const NavSpan = styled.span`
  display: inline;
  overflow:hidden;
  transition: opacity .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1);
`
export const LogoSpan = styled.span`
  display: inline-block;
  color: ${props=>props.theme.logoText}
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  transition: width .3s ease;
`


// export const SideBarSectionWrapper = styled.section`
//   padding: 5px 2px;
// `

