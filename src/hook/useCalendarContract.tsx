import { 
  ethers,
  Contract
} from 'ethers';
import { useEthersSigner } from './useEtherSigner';
import { CALENDAR_ABI } from '../abi/calendar';

export const useCalendarContract = () => {
  const signer = useEthersSigner();
  const contract = new Contract(
    '0xE5Ef204868E5a138c9adc8C132Bc5d2c766Ee17B',
    CALENDAR_ABI,
    signer,
  );
  return contract
}