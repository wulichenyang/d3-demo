import { Link } from "react-router-dom";
import React from 'react'
import "./index.less";
import {
  HeaderWrapper,
  ButtonToggle,
  UserInfo
} from './styled'
import { Icon } from 'antd'
interface IProps {
  toggleSidebar: () => void,
  collapsed: boolean
}
export const Header: React.FC<IProps> = ({ toggleSidebar, collapsed }: IProps) => {
  const onToggleSidebar = () => {
    toggleSidebar()
  }
  return (
    <HeaderWrapper className={collapsed? 'sidebar-collapsed' : ''}>
      <ButtonToggle onClick={onToggleSidebar}>
        <Icon type="menu-fold" />
      </ButtonToggle>
      <UserInfo>

      </UserInfo>
    </HeaderWrapper>
  );
}

export default Header