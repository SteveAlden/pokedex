import { Container } from '@mui/material';

export default function RPokemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container maxWidth='md'>{children}</Container>;
}