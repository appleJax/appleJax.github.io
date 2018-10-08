import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const CodeWarsIcon = ({ classes }) =>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 480 480'
    height='32px'
  >
    <g
      id='Page-1'
      stroke='none'
      strokeWidth='1'
      fill='none'
      fillRule='evenodd'
    >
      <g
        className={classes.icon}
        id='vendor-codewars'
        transform='translate(-40.000000, -40.000000)'
      >
        <path d='M479.473333,40.32 L80.1133333,40.32 C58.1133333,40.32 40.1133333,58.32 40.1133333,80.32 L40.1133333,479.68 C40.1133333,501.68 58.1133333,519.68 80.1133333,519.68 L479.473333,519.68 C501.473333,519.68 519.473333,501.68 519.473333,479.68 L519.473333,80.32 C519.473333,58.32 501.473333,40.32 479.473333,40.32 Z M488.56,325.193333 C486.586667,327.136667 484.706667,329.176667 482.033333,331.946667 C485.883333,355.08 470.733333,368.803333 454.116667,381.633333 C436.81,394.996667 419.496667,408.356667 401.976667,421.44 C398.066667,424.36 393.29,426.116667 388.873333,428.426667 C377.96,458.563333 373.843333,462.266667 350.72,461.74 C345.186667,476.613333 334.2,482.536667 318.216667,478.336667 C317.156667,478.06 315.51,477.123333 315.156667,477.483333 C299.613333,493.47 281.776667,481.15 265.583333,480.096667 C253.616667,479.32 241.49,471.636667 230.706667,464.97 C221.596667,459.336667 215.15,448.98 202.2,451.976667 C201.706667,452.09 201,451.963333 200.593333,451.67 C188.11,442.633333 173.02,448.183333 160.356667,444.78 C143.93,440.37 129.326667,428.89 114.29,419.873333 C112.026667,418.516667 111.58,414.03 110.436667,410.94 C109.67,408.87 109.663333,405.22 108.45,404.806667 C92.03,399.203333 92.65,383.59 87.2166667,371.096667 C82.16,359.473333 78.65,349.083333 85.0566667,337.013333 C86.57,334.163333 86.5033333,329.39 85.22,326.316667 C76.9366667,306.526667 76.76,306.593333 78.7933333,286.913333 C61.8066667,272.436667 59.31,261.443333 73.1133333,244.003333 C67.58,231.48 64.7966667,218.823333 79.9033333,209.77 C81.0333333,209.093333 81.41,206.89 81.81,205.316667 C86.7366667,185.98 101.35,173.82 116.68,164.31 C130.736667,155.593333 147.85,153.413333 157.113333,135.826667 C160.576667,129.25 171.316667,125.4 173.476667,115.393333 C173.986667,113.03 176.613333,110.7 178.84,109.21 C189.91,101.8 202.84,97.99 212.956667,87.99 C217.206667,83.7933333 229.063333,87.2933333 240.316667,87.2933333 C255.266667,68.62 275.8,83.8 294.76,86.2233333 C303.73,87.3666667 311.75,95.3533333 320.403333,99.8466667 C324.206667,101.823333 328.45,103.106667 332.633333,104.14 C335.266667,104.79 338.513333,103.576667 340.876667,104.603333 C354.17,110.373333 367.413333,114.133333 381.886667,108.55 C383.87,107.786667 388.316667,109.293333 389.453333,111.106667 C398.753333,125.97 417.586667,121.17 428.973333,130.826667 C432.246667,133.603333 432.77,139.62 434.996667,145.266667 C445.88,148.823333 457.76,153.113333 454.886667,169.416667 C466.55,176.613333 458.916667,191.79 467.62,200.21 C458.433333,220.286667 479.85,237.02 473.833333,258.09 C476.683333,260.063333 480.983333,261.87 483.51,265.073333 C487.136667,269.676667 493.25,277.666667 491.726667,280.096667 C482.413333,294.983333 502.6,311.363333 488.56,325.193333 Z M275.113333,143.253333 C252.986667,151.446667 252.72,151.84 257.663333,171.68 C246.906667,176.463333 240.403333,184.253333 246.083333,197.32 C246.803333,198.98 246.373333,202.086667 245.213333,203.45 C240.123333,209.416667 241.093333,214.943333 243.723333,221.853333 C245.173333,225.663333 242.323333,231.11 241.423333,235.753333 C246.15,242.256667 251.273333,248.463333 255.313333,255.31 C256.83,257.876667 257.21,263.673333 255.656667,264.906667 C253.26,266.806667 248.15,267.433333 245.246667,266.17 C233.66,261.136667 221.49,256.51 211.473333,249.11 C203.636667,243.32 198.15,233.996667 192.57,225.613333 C188.496667,219.493333 185.966667,212.346667 181.243333,202.526667 C182.293333,200.44 185.04,195.28 187.5,189.986667 C189.233333,186.26 192.76,181.543333 191.693333,178.68 C188.553333,170.263333 194.563333,163.783333 194.696667,156.926667 C195.036667,139.17 214.66,135.573333 218.233333,120.996667 C237.216667,112.633333 254.77,98.87 277.73,105.68 C281.29,106.736667 285.183333,106.666667 288.436667,107.06 C292.57,115.43 288.12,120.056667 283.926667,125.56 C280.093333,130.593333 278.106667,137.036667 275.113333,143.253333 Z M412.606667,158.73 C420.993333,166.156667 427.45,171.876667 434.756667,178.346667 C436.543333,186.25 438.59,195.29 440.633333,204.326667 C439.506667,205.21 438.383333,206.09 437.256667,206.973333 C422.516667,197.363333 403.8,208.026667 389.546667,195.536667 C388.463333,194.586667 386.303333,194.293333 384.77,194.526667 C370.493333,196.703333 355.51,197.01 342.15,201.806667 C316.953333,210.846667 293.9,224.19 277.83,250.083333 C266.806667,238.4 266.923333,226.403333 269.443333,214.53 C271.876667,203.063333 275.956667,191.946667 279.603333,179.703333 C293.536667,179.86 292.916667,166.786667 296.72,159.056667 C327.72,147.143333 357.536667,134.15 392.61,146.503333 C395.93,154.21 402.366667,162.183333 412.606667,158.73 Z M278.506667,294.48 C290.876667,321.25 281.926667,344.726667 270.766667,366.846667 C265.996667,373.13 261.2,379.39 256.476667,385.706667 C255.16,387.466667 254.056667,390.996667 252.86,390.993333 C236.18,390.956667 226.22,407.546667 208.66,407.37 C194.576667,407.23 181.163333,409.9 166.75,404.993333 C149.896667,399.253333 136.44,390.533333 123.866667,378.113333 C113.583333,367.956667 110.88,358.043333 114.59,344.833333 L148.366667,344.833333 C156.453333,354.706667 167.906667,360.096667 182.69,351.296667 C185.123333,349.846667 189.003333,350.976667 192.173333,350.58 C198.583333,349.776667 205.05,349.126667 211.326667,347.696667 C217.53,346.286667 223.53,343.98 229.623333,342.086667 C231.72,341.436667 234.44,341.47 235.84,340.12 C244.676667,331.606667 253.376667,322.936667 261.81,314.023333 C267.11,308.416667 271.866667,302.296667 278.506667,294.48 Z M141.88,176.04 C140.306667,189.896667 142.016667,200.753333 155.04,207.496667 C149.926667,221.876667 148.963333,234.52 166.666667,239.653333 C167.65,239.936667 169.18,240.773333 169.236667,241.453333 C170.55,257.246667 184.396667,258.903333 194.523333,265.88 C210.72,277.043333 226.88,284.17 246.743333,281.81 C249.993333,281.423333 253.486667,283.063333 257.183333,283.83 C255.176667,299.766667 243.076667,307.253333 233.233333,310.766667 C214.56,317.43 195.596667,329.65 173.716667,318.976667 C169.53,316.936667 163.05,319.593333 159.363333,319.926667 C136.53,309.316667 125.56,287.333333 106.413333,273.193333 C107.326667,263.286667 114.683333,251.673333 102.13,244.986667 C105.213333,214.763333 116.033333,191.106667 141.88,176.04 Z M419.96,379.24 C417.823333,373.526667 414.48,369.156667 415.17,365.563333 C417.28,354.57 412.956667,347.293333 403.473333,341.27 C407.836667,327.85 403.24,318.01 391.223333,310.866667 C388.513333,309.256667 386.216667,305.036667 385.836667,301.773333 C384.75,292.476667 379.87,287.993333 370.92,286.876667 C368.266667,286.546667 364.6,286.1 363.313333,284.32 C350.4,266.473333 330.376667,266.793333 311.733333,263.553333 C307.24,262.773333 302.72,262.156667 297.75,261.396667 C299.123333,245.366667 311.993333,240.726667 320.363333,237.646667 C339.506667,230.603333 360.373333,221.003333 380.866667,229.736667 C397.186667,236.693333 417.263333,237.87 428.036667,256.156667 C431.343333,261.773333 438.963333,264.846667 444.586667,269.066667 C447.74,278.766667 451.046667,288.933333 454.863333,300.673333 L454.863333,333.523333 C446.103333,346.77 439.426667,365.106667 419.96,379.24 Z M230.09,435.27 C261.333333,435.69 264.673333,433.653333 271.693333,410.656667 C285.003333,406.226667 296.436667,399.283333 296.603333,382.24 C296.623333,380.16 299.833333,378.116667 301.563333,376.05 C303.66,373.543333 307.276667,371.22 307.606667,368.496667 C310.06,348.193333 314.44,327.77 307.326667,307.516667 C304.506667,299.486667 301.353333,291.573333 297.143333,280.396667 C305.323333,281.22 310.76,280.713333 315.386667,282.413333 C335.06,289.633333 350.813333,302.84 363.126667,319.196667 C368.92,326.893333 370.453333,337.793333 374.85,349.796667 C370.01,356.92 367.753333,367.243333 376.72,377.716667 C364.913333,387.283333 358.78,398.536667 360.683333,411.583333 C351.33,420.56 342.846667,428.706667 331.913333,439.203333 C325.82,441.916667 316.063333,446.256667 306.88,450.34 C298.966667,451.83 291.233333,453.996667 283.386667,454.556667 C275.833333,455.093333 266.676667,456.46 260.876667,453.006667 C251.243333,447.266667 235.78,451.596667 230.09,435.27 Z' id='codewars'></path>
      </g>
    </g>
  </svg>

const styles = (theme) => ({
  icon: {
    fill: theme.palette.primary.main,
    '&:hover': {
      fill: theme.palette.primary.light
    }
  }
})

export default withStyles(styles)(CodeWarsIcon)