import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Header() {

    const [click, setClick] = useState(false)

    const handleMenuBar = () => setClick(!click)
    const handleMenuX = () => setClick(false)

    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='Tesla-Logo'/>
            </a>
            <Menu>
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <i className="fas fa-bars" onClick={handleMenuBar}></i>
            </RightMenu>
            {click &&   
            <MenuItems>
            <Fade right>  
            <i className="fas fa-times" onClick={handleMenuX}></i>
            <li><a href='#'>Model S</a></li>
            <li><a href='#'>Model 3</a></li>
            <li><a href='#'>Model X</a></li>
            <li><a href='#'>Model Y</a></li>
            <li><a href='#'>Solar Roof</a></li>
            <li><a href='#'>Solar Panels</a></li>
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-In</a></li>
            <li><a href='#'>Test Drive</a></li>
            <li><a href='#'>Powerwall</a></li>
            <li><a href='#'>Comercial Energy</a></li>
            <li><a href='#'>Utilities</a></li>
            <li><a href='#'>Charging</a></li>
            <li><a href='#'>Find Us</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Investor Relations</a></li>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>Account</a></li>
            <li><a href='#'>More</a></li>
            <li><a href='#' style={{ display: 'flex', alignItems:'center'}}>
                <i class="fas fa-globe" style={{justifyContent: 'left', paddingRight:'7px'}}></i>
                 United State
                 </a>
                <li style=
                    {{marginLeft:'20px',
                    borderBottom:'none',
                    paddingTop:'0',
                    cursor:'pointer'}}>
                        English
                </li>
            </li>
            </Fade>
            </MenuItems>
        
            }
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
display: flex;
flex: 1;
align-item: center;
justify-content: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px 10px;
    flex-wrap: no-wrap;
}

a:hover{
    background-color: rgba(23, 26, 32, 0.07);
    border-radius: 20px;
}

@media (max-width: 768px){
    display: none;
}

`

const RightMenu = styled.div`
dispaly: flex;
align-item: center;
cursor: pointer;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 5px 10px;
}

a:hover{
    background-color: rgba(23, 26, 32, 0.07);
    border-radius: 20px;
}

@media (max-width: 360px){
    a{
        display: none;
    }
}


`

const MenuItems = styled.div`
position: fixed;
top: 0;
buttom: 0;
right: 0; 
background-color: #fff;
width: 300px;
height: 100vh;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
z-index: 100;
overflow: scroll;
li{
    padding: 10px;
    margin-left: 20px;
}
a{
    font-weight: 600;
}

i{
    display: flex;
    align-item: right;
    justify-content: right;
    cursor: pointer;
}

li:hover{
    background-color: rgba(23, 26, 32, 0.07);
    border-radius: 20px;
}

`


