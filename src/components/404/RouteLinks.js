import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Classes from "Styles/classes";
import ButtonLink from "Common/ButtonLink";

const RouteLinks = ({ classes }) => (
  <div className={classes.container}>
    <ButtonLink to="/">Home</ButtonLink>
  </div>
);

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    marginTop: "25px",
    padding: "15px 0",
  },
});

export default withStyles(styles)(RouteLinks);
