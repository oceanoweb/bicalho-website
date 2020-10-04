import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import media from "styled-media-query"

import { Menu } from "@styled-icons/entypo/Menu"
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const MenuWrapped = styled.nav`
  ${media.lessThan("medium")`
    display: ${props => (props.isMenuOpen ? "flex" : "none")};
  
  &.open-menu {
      animation: 1s ${fadeIn} ease-out;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 11;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.9);
      position: fixed;
      top: 0;
      left: 0;
    }
  `}
`

export const MenuLinks = styled(Link)`
  padding: 1.5rem 1.3rem;
  cursor: pointer;
  color: #790d19;
  transition: 0.5s ease;

  &:hover {
    color: #000;
  }

  &.active {
    border-bottom: 3px solid #790d19;
  }

  ${media.lessThan("medium")`
    transition-duration: 0.5s;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    display: block;
    text-align: center;
    text-transform: uppercase;

    &:hover {
      color: #790d19;
    }
    
    &.active {
      color: #790d19;
    }
  `}
`

export const MenuIcon = styled(Menu)`
  display: none;

  ${media.lessThan("medium")`
    display: block;
    width: 2.5rem;
    color: #000;
    cursor: pointer;
    `}
`

export const CloseOutlineIcon = styled(CloseOutline)`
  display: none;

  ${media.lessThan("medium")`
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: #fff;
    width: 2.5rem;
  `}
`
