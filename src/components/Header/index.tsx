import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { UserMenu } from '../UserMenu';
import { HeaderContainer } from './styles';
import { DropDownMenu } from '../DropDownMenu';

export const Header = () => {
  return (
    <HeaderContainer>
      <DropDownMenu cover={FaUserCircle} content={UserMenu} />
    </HeaderContainer>
  );
};
