module.exports = {
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
            src: '', //ggImage,
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
            src: '', //theJamImage,
            alt: 'the Jam Screenshot'
          },
          links: {
            link: 'https://the-jam.heroku.com',
            github: 'https://github.com/applejax/thejam'
          }
        }
      ]
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet'
  ],
}
