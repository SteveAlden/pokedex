import React from 'react';

import { Typography } from '@mui/material';
import Hollow from './wrapper/Hollow';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <Hollow>
      <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h6'>
        {description}
      </Typography>
    </Hollow>
  );
};

export default Description;
