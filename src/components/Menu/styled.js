import { Link } from "gatsby"
import styled from "styled-components"

export const MenuWrapped = styled.nav`
  display: flex;
`

export const MenuLinks = styled(Link)`
  padding: 1.5rem 2rem;
  cursor: pointer;
  color: #790d19;
  transition: 0.5s ease;

  &:hover {
    color: #000;
  }

  &.active {
    border-bottom: 3px solid #790d19;
  }
`
