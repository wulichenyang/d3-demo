import React from 'react';
import "./index.less";
import { NavLink } from 'react-router-dom'

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
            {['graph', 'graph2', 'graph3'].map(LinkName => {
              return (
                <SideNavItem>
                  <NavLink 
                    to={`/d3demo/${LinkName}`}
                  >
                    {LinkName}
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