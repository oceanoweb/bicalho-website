module.exports = {
  siteMetadata: {
    title: `Mobiliadora Bicalho`,
    description: `Mobiliadora Bicalho loja online`,
    author: `Marquinhus Gonçalves - Oceano Web`,
    siteUrl: `https://mobiliadorabicalho.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/products`,
        name: `products`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products-images`,
        path: `${__dirname}/static/products-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "products-images",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mobiliadora-bicalho`,
        short_name: `bicalho`,
        start_url: `/`,
        background_color: `#790d19`,
        theme_color: `#790d19`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
