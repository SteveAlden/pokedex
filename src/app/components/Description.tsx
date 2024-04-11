import { Typography } from '@mui/material';
import Hollow from './wrapper/Hollow';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <Hollow>
      <Typography variant='h6'>{description}</Typography>
    </Hollow>
  );
};

export default Description;
