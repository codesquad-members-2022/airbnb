import Box from '@mui/material/Box';
import { GNB } from '../Component/GNB';
import { SearchBar } from '../Component/SearchBar';

export function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      px="80px" // 패딩 x 축
      py="24px" // 패딩 y 축
      sx={{
        width: '100%',
        height: 640,
        margin: '0 auto',
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/7197/3c13/5882a37ecf9a1d0a40a9d0ab7837c66f?Expires=1654473600&Signature=alJLZ3edAkCL1hqf4s6FWWu8l0WMjMzMuWGnubiQwp7j4VSITgLS4dSLbkvUrH~ClJFKCnyhgKv-RN86UhPHM~5xcfZOthf7k5ICmhZKI6Hvzaj3oiYx8r4rJ6869hhY9SSDMGteZ63MxRqzYrS3AIAOxYsN7faHXdY6P6~1xF-2WzhM1yuV2i-RRp495w4A8LSezSt-4wLaB9aDpjGy38t~M8lhoantdiPa3-4Jf0NIfifU8BU5tFHHN3j9xelYT9Jabc8BRxW52lSYGYtUgg3IjVGw2wQF6EdAWadA5SpYGLex7iUmfqIWsE9wp1s3vYw2JUPYFE8OqNMGYhQcsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <GNB />
      <SearchBar />
    </Box>
  );
}
