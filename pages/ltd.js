import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LTD = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('https://ltd.eshway.com');
  }, []);

  return null; // Renders nothing, as the user is redirected
};

export default LTD;
