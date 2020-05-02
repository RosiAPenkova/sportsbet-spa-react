import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
 Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import Logo from '../assets/img/sportsbetio.png';

const HeaderNavbar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
        <Navbar  dark expand="md">
        <div className="container">
        <NavbarBrand href="/"> <img src={Logo} alt="Logo" /></NavbarBrand>
      <Dropdown className="dropdown-btn" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
        English
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>English</DropdownItem>
          <DropdownItem>中文</DropdownItem>
          <DropdownItem >Español</DropdownItem>
          <DropdownItem>Português</DropdownItem>
          <DropdownItem>Русский</DropdownItem>
          <DropdownItem>Deutsch</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    </Navbar>
    );
}

export default HeaderNavbar;