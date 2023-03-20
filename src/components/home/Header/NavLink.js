import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Colors from "Styles/colors";
import Typography from "@material-ui/core/Typography";

const NavLink = ({ active, children, classes, scrollOffset, to }) => {
  const Label = () => (
    <Typography
      color="inherit"
      className={active ? classes.active : classes.linkText}
      variant="body1"
    >
      {children}
    </Typography>
  );

  return (
    <AnchorLink href={`#${to}`} className={classes.link} offset={scrollOffset}>
      <Label />
    </AnchorLink>
  );
};

const styles = (theme) => ({
  active: {
    borderBottom: `5px solid ${Colors.primary.light}`,
    background: Colors.primary.night,
    color: Colors.primary.highlight,
    fontWeight: "500",
    padding: "10px 15px",
    "&:hover": {
      background: Colors.primary.night,
      borderBottom: `5px solid ${Colors.primary.light}`,
      color: Colors.primary.highlight,
      cursor: "default",
    },
  },
  link: {
    color: Colors.primary.main,
    margin: 0,
    textDecoration: "none",
  },
  linkText: {
    borderBottom: `5px solid ${Colors.primary.night}`,
    background: Colors.primary.night,
    fontWeight: "500",
    padding: "10px 15px",
    "&:hover": {
      background: Colors.primary.light,
      borderBottom: `5px solid ${Colors.primary.light}`,
      color: Colors.primary.night,
    },
  },
});

export default withStyles(styles)(NavLink);
