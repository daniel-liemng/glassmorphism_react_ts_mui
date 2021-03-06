import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Container,
  CssBaseline,
  // Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Grow,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GlassCard from "./GlassCard";
import GrowList from "./GrowList";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundImage: `url('leaves.jpg')`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  container: {
    paddingTop: 100,
    padding: theme.spacing(4),
  },
  content: {
    paddingTop: theme.spacing(6),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Container maxWidth='sm' className={classes.container}>
        <form>
          <Grow in>
            <GlassCard noBorders square>
              <GrowList className={classes.content}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                  Sign In
                </Typography>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='password'
                  label='Password'
                  name='password'
                  autoComplete='current-password'
                />
                <FormControlLabel
                  style={{ width: "100%" }}
                  label='Remember me'
                  control={<Checkbox value='remember' color='primary' />}
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href='#' variant='body1'>
                      Forget password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href='#' variant='body2'>
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </GrowList>
            </GlassCard>
          </Grow>
        </form>
      </Container>
    </div>
  );
};

export default App;
