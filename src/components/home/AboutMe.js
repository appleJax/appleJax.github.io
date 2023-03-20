import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Classes from "Styles/classes";
import Colors from "Styles/colors";

const HandWave = () => (
  <span role="img" aria-label="hand-wave">
    👋
  </span>
);

const AboutMe = ({ classes }) => (
  <div className={classes.background}>
    <div className={classes.container}>
      <div className={classes.intro}>
        <HandWave /> Hi, I'm Kevin.
      </div>
      <div className={classes.descriptionBg}>
        <p>
          I'm a software engineering tech lead with a demonstrated track record
          of shipping complex projects in a fast-paced, high-pressure
          environment.
        </p>
        <p>
          Experienced building infrastructure tooling, automating code
          quality/consistency, modernizing tech stacks, automating processes,
          and full stack development.
        </p>
        <p>
          As a tech lead, I foster a culture of collaboration and knowledge
          sharing, encouraging proactive communication, continual innovation,
          and impact. Proven aptitude for simplifying technical solutions to
          minimize points of failure and establish maintainable, extensible
          architecture.
        </p>
      </div>
      <a
        className={classes.hireMe}
        href="mailto:kevNbrewer@gmail.com?subject=Come Work For Us!"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className={classNames("fas fa-keyboard", classes.keyboard)} /> Hire
        Me
      </a>
    </div>
  </div>
);

const styles = (theme) => ({
  background: {
    ...Classes.flexRow,
    background: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    padding: "30px 0",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  container: {
    ...Classes.flexColumn,
    margin: "20px 0",
    maxWidth: "800px",
  },
  descriptionBg: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "5px",
    color: theme.palette.secondary.main,
    font: "1.3em Roboto",
    padding: "10px 20px",
  },
  hireMe: {
    background: theme.palette.secondary.light,
    borderRadius: "10px",
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)",
    color: "rgba(255, 255, 255, 0.6)",
    font: "1.5em Roboto, sans-serif",
    marginTop: "25px",
    padding: "10px 20px",
    textDecoration: "none",
    textShadow: `1px 1px ${Colors.secondary.main}`,
    "&:hover, &:focus": {
      opacity: "0.9",
    },
  },
  intro: {
    color: theme.palette.secondary.main,
    font: "bold 4em Carter One, cursive",
    textAlign: "center",
    textShadow: `2px 2px 4px ${Colors.secondary.highlight}`,
  },
  keyboard: {
    marginRight: "10px",
  },
});

export default withStyles(styles)(AboutMe);
