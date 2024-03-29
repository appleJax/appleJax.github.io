import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const HackerRankIcon = ({ classes }) =>
  <svg
    className={classes.icon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    height='32px'
  >
    <path d="M8 0c.857 0 6.5 3.257 6.928 4 .43.743.43 7.257 0 8-.43.743-6.07 4-6.928 4-.858 0-6.5-3.257-6.93-4-.427-.743-.427-7.257 0-8C1.5 3.257 7.143 0 8 0zm1.53 4.532c-.094 0-.172.077-.172.172v2.583H6.642V4.605h.467c.094 0 .17-.077.17-.172 0-.062-.033-.117-.082-.147L6.148 3.28c-.032-.042-.094-.073-.15-.073-.056 0-.107.03-.138.072L4.74 4.286c-.048.03-.08.084-.08.146 0 .095.076.172.17.172h.47l.004 6.69c0 .096.075.172.17.172h.995c.094 0 .172-.077.172-.17v-2.67h2.716v2.768H8.89c-.094 0-.17.077-.17.172 0 .062.032.116.08.146l1.052 1.007c.03.04.094.073.15.073.056 0 .106-.03.138-.073l1.12-1.007c.048-.03.08-.084.08-.146 0-.095-.077-.172-.17-.172h-.47l-.004-6.69c0-.096-.076-.173-.17-.173H9.53z"/>
  </svg>

const styles = (theme) => ({
  icon: {
    fill: theme.palette.primary.main
  }
})

export default withStyles(styles)(HackerRankIcon)