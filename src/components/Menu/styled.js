import { Link } from "gatsby"
import styled from "styled-components"

export const MenuWrapped = styled.nav`
  display: flex;
`

export const MenuLinks = styled(Link)`
  padding: 0.5rem 2rem;
  cursor: pointer;
  color: #932330;
  transition: 0.5s ease;

  &:hover {
    color: #000;
  }

  &.active {
    border-bottom: 3px solid #932330;
  }
`
