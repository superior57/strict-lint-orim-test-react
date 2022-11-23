import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export default function Main({ children }) {
  return (
    <Box
      sx={{
        mx: 5,
        my: 5,
      }}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};
