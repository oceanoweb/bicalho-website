import React from "react"

import Layout from "../components/Layout"
import Slider from "../components/Slider"
import ProductsSection from "../components/ProductsSection"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <ProductsSection title="OFERTAS ESPECIAIS" />
    <ProductsSection title="SALA" />
    <ProductsSection title="COZINHAA" />
    <ProductsSection title="QUARTO" />
    <ProductsSection title="COPA" />
  </Layout>
)

export default IndexPage
