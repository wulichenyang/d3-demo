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
}
export const Header: React.FC<IProps> = ({ toggleSidebar }: IProps) => {
  const onToggleSidebar = () => {
    toggleSidebar()
  }
  return (
    <HeaderWrapper>
      <ButtonToggle onClick={onToggleSidebar}>
        <Icon type="menu-fold" />
      </ButtonToggle>
      <UserInfo>

      </UserInfo>
    </HeaderWrapper>
  );
}

export default Header