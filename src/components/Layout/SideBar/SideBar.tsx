import React from 'react';
import "./index.less";
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'
import {
  SideBarWrapper,
  SideBarInner,
  LogoWrapper,
  SideContentWrapper,
  SideNavList,
  SideNavItem
} from './styled';

// interface IProps {
//   className?: string;
//   style?: React.CSSProperties;
// }

const SideBar: React.FC = () => {
  return (
    <SideBarWrapper>
      <SideBarInner>
        <LogoWrapper><i></i>Graph Demo</LogoWrapper>
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
                      <Icon type={link.iconName} />{link.linkName}
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