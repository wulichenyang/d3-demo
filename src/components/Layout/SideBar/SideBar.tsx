import React from 'react';
import "./index.less";
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'
import GraphLogo from '../../../assets/img/graph-logo.png'
import {
  SideBarWrapper,
  SideBarInner,
  LogoWrapper,
  SideContentWrapper,
  SideNavList,
  SideNavItem,
  NavSpan,
  LogoSpan
} from './styled';

interface IProps {
  className?: string;
  style?: React.CSSProperties;
}

const SideBar: React.FC<IProps> = ({ className, style }: IProps) => {
  return (
    <SideBarWrapper className={className} style={style}>
      <SideBarInner>
        <LogoWrapper className="logo-wrapper">
          <a href="/">
            <img src={GraphLogo} alt="GraphLogo" />
            <LogoSpan>
              Graph Demo
            </LogoSpan>
          </a>
        </LogoWrapper>
        <SideContentWrapper>
          <SideNavList>
            {[
              {
                linkName: 'Force-directed',
                iconName: 'dot-chart'
              },
              {
                linkName: 'Sunburst',
                iconName: 'bubble-chart'
              },
              {
                linkName: 'graph3',
                iconName: 'chart'
              }].map(link => {
                return (
                  <SideNavItem key={link.linkName}>
                    <NavLink
                      to={`/${link.linkName}`}
                    >
                      <Icon type={link.iconName} />
                      <NavSpan>
                        {link.linkName}
                      </NavSpan>
                    </NavLink>
                  </SideNavItem>)
              })}
          </SideNavList>
        </SideContentWrapper>
      </SideBarInner>
    </SideBarWrapper>
  );
}

export default SideBar