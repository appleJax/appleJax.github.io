import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import AppleTouchIcon from "Images/favicon/apple-touch-icon.png";
import Favicon16 from "Images/favicon/favicon-16x16.png";
import Favicon32 from "Images/favicon/favicon-32x32.png";
import SafariPinnedTab from "Images/favicon/safari-pinned-tab.svg";

export function Head() {
  const { site } = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `);

  return (
    <>
      <title>{site.siteMetadata.title}</title>
      <meta property="og:title" content="Kevin Brewer - Software Engineer" />
      <meta property="og:title" content="Kevin Brewer - Software Engineer" />
      <meta
        property="og:description"
        content="Kevin Brewer's Online Portfolio"
      />
      <meta property="og:url" content="https://applejax.github.io" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/kbrew/image/upload/v1539638048/screenshots/githubPages.png"
      />
      <meta property="og:image:alt" content="My Portfolio Screenshot" />
      <meta property="og:image:type" content="image/png" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="keywords" content={site.siteMetadata.keywords} />
      <meta name="msapplication-TileColor" content="#201407" />
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
      <link rel="mask-icon" href={SafariPinnedTab} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300400500"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Carter+One&text=HiI'mKevn.brwLog"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />
    </>
  );
}
