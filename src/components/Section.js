import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({model, backgroundImg, description, leftBtn,rightBtn}) {
    return (
        <Wrap bgImage= {backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{model}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>

        <Buttons>
        <Fade bottom>    
            <ButtonGroup>
                <LeftButton>
                    {leftBtn}
                </LeftButton>
                {rightBtn && 
                     <RightButton>
                     {rightBtn}
                 </RightButton>
                }
            </ButtonGroup>
        </Fade>    
            <DownArrow src='/images/down-arrow.svg'/>
        </Buttons>     
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}

`

const ItemText = styled.div`
    z-idex: -1;
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
align-items: center;
justify-content: center;
text-align:center;

@media (max-width: 768px){
    flex-direction: column;
}

`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.6);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: #000;

`

const DownArrow = styled.img`
    margin-top: 20px;
    opacity: 0.65;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;

`

const Buttons = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;

`