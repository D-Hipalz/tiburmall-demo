import { memo } from 'react';
import Tira from '../components/tiraa-logo.png'
const MemoLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src={Tira}
        alt="Tiraa Jewels" 
        className="w-auto h-16"
      />
    </div>
  );
};

const Logo = memo(MemoLogo);
export default Logo;