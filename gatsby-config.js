const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@wapps/gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectImages`,
        path: path.join(__dirname, `src`, `images`, `projects`),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `openSourceImages`,
        path: path.join(__dirname, `src`, `images`, `open-source`),
      }
    }
  ],
  siteMetadata: {
    title: 'Kevin Brewer - Software Engineer',
    description: "Kevin Brewer's portfolio website",
    keywords: 'javascript, programming, software, blog, open source',
    section: {
      projects: [
        {
          header: {
            name: 'Gamegogakuen',
            description: 'Twitter Quiz Bot'
          },
          image: {
            alt: 'Gamegogakuen Screenshot'
          },
          links: {
            live: 'https://game-gogakuen.appspot.com',
            github: 'https://github.com/applejax/GG-JP'
          }
        },
        {
          header: {
            name: 'The Jam',
            description: 'Recipe Archive'
          },
          image: {
            alt: 'the Jam Screenshot'
          },
          links: {
            live: 'https://the-jam.herokuapp.com',
            github: 'https://github.com/applejax/thejam'
          }
        },
        {
          header: {
            name: 'Mac Rentals, Inc.',
            description: 'Technology Rental Company'
          },
          image: {
            alt: 'Mac Rentals, Inc. Screenshot'
          },
          links: {
            live: 'https://macrentalsinc.herokuapp.com',
            github: 'https://github.com/applejax/mri'
          }
        }
      ],
      openSource: [
        {
          header: {
            name: 'JavaScript Algorithms and Data Structures',
            description: 'Educational Code Samples'
          },
          image: {
            alt: 'JS Algos and Data Structures README.md'
          },
          links: {
            github: 'https://github.com/trekhleb/javascript-algorithms'
          }
        },
        {
          header: {
            name: 'Code Corps',
            description: 'Software Platform for Social Welfare'
          },
          image: {
            alt: 'Code Corps README.md'
          },
          links: {
            github: 'https://github.com/code-corps/code-corps-ember'
          }
        },
        {
          header: {
            name: 'Wiki Education Dashboard',
            description: 'Wikimedia Education Software'
          },
          image: {
            alt: 'Wiki Edu Dashboard README.md'
          },
          links: {
            github: 'https://github.com/WikiEducationFoundation/WikiEduDashboard'
          }
        }
      ]
    }
  }
}
