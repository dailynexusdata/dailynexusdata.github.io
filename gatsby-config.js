module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Guide",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout/layout.js"),
        },
        extensions: [".md", ".mdx"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "guides",
        path: `${__dirname}/src/guides/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/guides`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 50,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
  ],
};
