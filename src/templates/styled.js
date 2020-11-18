import styled from "styled-components"
import Img from "gatsby-image"
import { Whatsapp } from "@styled-icons/icomoon/Whatsapp"

export const ProductSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1.0875rem 1.5rem;
  margin-bottom: 1rem;
`

export const ProductCapa = styled(Img)`
  width: 100%;
  margin-bottom: 1.5rem;
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`

export const ProductDetailsWrapper = styled.div`
  width: 50%;
`

export const ProductDetails = styled.div`
  background: #f2f2f2;
  margin-bottom: 1rem;
  padding: 0.5rem;
`

export const ProductTitle = styled.h1`
  color: #790d19;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
`

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #7f7f7f;
  margin-bottom: 0.5rem;
`

export const ProductLabel = styled.p`
  font-size: 0.9rem;
  color: #7f7f7f;
  margin-bottom: 0.3rem;
`

export const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: 900;
  color: #790d19;
`

export const ProductPart = styled.p`
  font-size: 0.6rem;
  color: #7f7f7f;
`

export const ProductButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25d366;
  border-radius: 3px;
  padding: 0.5rem 1rem;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 1rem;
  color: white;
  margin-right: 5px;
`

export const ProductButtonLabel = styled.p`
  color: white;
  text-transform: uppercase;
`

export const ProducImaageWrapper = styled.div`
  width: 45%;
`
export const ProductImage = styled.img``
