module.exports = {
  siteMetadata: {
    title: '<ayDigitalDesign>',
  },
  plugins: [
    'gatsby-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    // 'gatsby-source-filesystem',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Wire One`,
          `Open Sans` // I should also specify font weights and styles
        ]
      }
    }
  ]
}
