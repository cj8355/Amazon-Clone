import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <div>
        <HeaderLogo>
            Header
        </HeaderLogo>
        <HeaderOptionAddress>
            <span className='Header-optionLineOne'>Hello,</span>
            <span className='Header-optionLineTwo'>Select your address</span>
        </HeaderOptionAddress>
        </div>
  )
}

export default Header;


const HeaderLogo = styled.div`
    height: 60px;
    background-color: #0f1111;
`;

const HeaderOptionAddress = styled.div``;