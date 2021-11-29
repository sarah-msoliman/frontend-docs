/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Frontend Docs",
        icon: "src/images/logo.jpg",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/articles`,
      },
    },
  ],
  siteMetadata: {
    title: "Ninjas' Hub",
    heroTitle: "Docs",
    heroSubtitle:
      "elmenus Frontend Chapter documentation. Everything you need to know about our Repos, Guidlines, Docs & Sessions..."
  },
}
