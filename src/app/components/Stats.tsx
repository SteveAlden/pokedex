import { Box, Grid, Typography } from '@mui/material';
import Filled from './wrapper/Filled';

interface Stat {
  baseStat: number;
  statName: string;
}

interface StatsProps {
  stats: Stat[];
}

const getStatName = (name: string) => {
  switch (name) {
    case 'speed':
      return 'Speed';
    case 'attack':
      return 'Attack';
    case 'defense':
      return 'Defence';
    case 'special-attack':
      return 'S.Attack';
    case 'special-defense':
      return 'S.Defence';
    case 'hp':
      return 'Hp';
    default:
      return null;
  }
};

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <Filled>
      <Typography
        variant='h4'
        sx={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          color: 'rgb(137, 137, 137)',
        }}
      >
        Base Stats
      </Typography>
      <StatChart stats={stats} />
    </Filled>
  );
};

export default Stats;

const StatChart: React.FC<StatsProps> = ({ stats }) => {
  return (
    <Box sx={{ width: '100%' }}>
      {stats?.map((stat) => {
        let { baseStat, statName } = stat;
        return (
          <Grid
            container
            spacing={2}
            columns={16}
            item
            key={baseStat}
            sx={{ alignItems: 'center', padding: '10px' }}
          >
            <Grid xs={6} md={4}>
              <Typography variant='h6'>{getStatName(statName)}</Typography>
            </Grid>
            <Grid xs={10} md={12}>
              <Box
                style={{
                  height: '20px',
                  borderRadius: '12px',
                  width: Math.min(baseStat, 100) + '%',
                  backgroundImage:
                    'linear-gradient(to right, rgb(25, 25, 25) 0%, rgba(239,9,105,1) 100%',
                }}
              >
                <Typography>{baseStat}</Typography>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};
