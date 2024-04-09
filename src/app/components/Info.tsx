import React from 'react';
import { Box, Typography } from '@mui/material';
import Hollow from './wrapper/Hollow';

interface InfoProps {
  height: string;
  id: string;
  weight: string;
}

const Info: React.FC<InfoProps> = ({ height, id, weight }) => {
  return (
    <Hollow>
      <Property title='Height' value={`${height} m`} />
      <Property title='Number' value={id} />
      <Property title='Weight' value={`${weight} kg`} />
    </Hollow>
  );
};

const Property: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Typography variant='h5'>{value}</Typography>
    <Typography>{title}</Typography>
  </Box>
);
export default Info;
