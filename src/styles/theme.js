import { createMuiTheme } from '@material-ui/core/styles'
import Colors from './colors'

export default createMuiTheme({
  palette: {
    primary: {
      light: Colors.primary.light,
      main: Colors.primary.main,
      dark: Colors.primary.dark,
      contrastText: Colors.primary.white
    },
    secondary: {
      light: Colors.secondary.light,
      main: Colors.secondary.main,
      dark: Colors.secondary.dark,
      contrastText: Colors.secondary.white
    }
  },
  typography: {
    fontSize: 18
  }
})
