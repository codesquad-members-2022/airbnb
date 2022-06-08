import { useContext } from 'react';
import Box from '@mui/material/Box';
import { GNB } from '@/Components/GNB';
import { SearchBar } from '@/Components/SearchBar';
import { SearchingProvider } from '@/Contexts/Searching';
import { ModalDispatchContext } from '@/Contexts/Modal';

export function Home() {
  // 문제점 null 일경우에 null. price, null.customers 는 불가능해서 에러
  // 구조분해 할당을 어떻게 해야할까?
  const { hideModal } = useContext(ModalDispatchContext);
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
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/7197/3c13/5882a37ecf9a1d0a40a9d0ab7837c66f?Expires=1655683200&Signature=SWeh~MPjSN6pMIUgsrfqdyG9AGaeRRhe5oH1kCSRNp0zeThLtG98TjFKDW7FGVYOmzL0kVNTe6QflOIFXDjeUA5GtjlufS-Qm4VQE27wjOHXZXylAUqODuAPVxGAEsynFc6Wef8NZNFu5EFLUcT48NWUK0U8AewtGlOv0WdCGuWp~QXEQS0iARV8dOce5fY6bUhVgGBmTrtB6iNMaI8Cs7cV1jBQHSFlVhrQk69S58a2HaEPd1aqn5RTDfCn0HWh~JrArqFxt3TQWtd6pl~UCrGPAu8T4GQpSi0kRYohqyG22dP-B2hHK-9Jg-mAWCNqnRyUltW9EJuoFyMo5HbvLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
      onClick={hideModal}
    >
      <GNB />
      <SearchingProvider>
        <SearchBar />
      </SearchingProvider>
    </Box>
  );
}
