const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
            name: 'GameGogakuen',
            description: 'Twitter Quiz Bot'
          },
          image: {
            alt: 'GameGogakuen Screenshot'
          },
          links: {
            live: 'https://game-gogakuen.appspot.com',
            github: 'https://github.com/applejax/GG-JP'
          }
        },
        {
          header: {
            name: 'Pawn Shopify',
            description: 'Marketplace for Used Goods'
          },
          image: {
            alt: 'Pawn Shopify Screenshot'
          },
          links: {
            live: 'https://pawn-shopify.netlify.com',
            github: 'https://github.com/applejax/pawn-shopify'
          }
        },
        {
          header: {
            name: 'GameGogakuen Discord',
            description: 'Discord Quiz Bot'
          },
          image: {
            alt: 'GG Discord Screenshot'
          },
          links: {
            live: 'https://discord.gg/NXSgjT8',
            github: 'https://github.com/applejax/gg-discord'
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
            live: 'https://thejam.herokuapp.com',
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
            name: 'Discord.js Guide',
            description: 'Getting Started Guide for Discord.js'
          },
          image: {
            alt: 'Discord.js Guide README.md'
          },
          links: {
            github: 'https://github.com/discordjs/guide'
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
