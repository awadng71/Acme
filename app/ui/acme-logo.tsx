import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/font';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon 
      className="h-12 w-12 rotate-[15deg]" 
      style  ={{width: '48px', height: '48px'}}/>
      <p className="text-[44px]-blue-500 ">Acme</p>
    </div>
  );
}
