import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

import * as S from "./styled"

const SimpleSlider = () => {
  const { sliderImages } = useStaticQuery(graphql`
    query {
      sliderImages: allFile(filter: { relativeDirectory: { eq: "slider" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }

  return (
    <Slider {...settings}>
      {sliderImages.edges.map(image => (
        <div key={image.node.childImageSharp.fluid.src}>
          <S.SliderImage fluid={image.node.childImageSharp.fluid} />
        </div>
      ))}
    </Slider>
  )
}

export default SimpleSlider
