import {
  AppBar,
  Toolbar,
  Stack,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function CustomHeader() {
  return (
    <AppBar
      component={'nav'}
      color="inherit"
      position="relative"
      elevation={0}
      sx={{
        borderBottom: 'solid 1px #dedede',
      }}
    >
      <Toolbar>
        <Stack direction={'row'}>
          <Link to={'/home'}>
            <Button disableRipple >{'Home'}</Button>
          </Link>
          <Link to={'/customer/1'}>
            <Button disableRipple >{'Customer 1'}</Button>
          </Link>
          <Link to={'/customer/2'}>
            <Button disableRipple >{'Customer 2'}</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
