import { Container } from '@mui/material';

export default function PokemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container maxWidth='md' sx={{ marginTop: '100px' }}>
      {children}
    </Container>
  );
}
