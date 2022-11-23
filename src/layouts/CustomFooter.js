import {
  AppBar,
  Toolbar,
  Stack,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function CustomFooter() {
  return (
    <AppBar
      component={'nav'}
      color="inherit"
      position="relative"
      elevation={0}
      sx={{
        borderTop: 'solid 1px #dedede',
        py: 5,
        bgcolor: '#e7e7e7'
      }}
    >
      <Toolbar>
        <Stack direction={'row'}>
          <Link to={'/blog/1'}>
            <Button disableRipple >{'Blog 1'}</Button>
          </Link>
          <Link to={'/blog/2'}>
            <Button disableRipple >{'Blog 2'}</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
