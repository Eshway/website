import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Footer, Navbar } from '../components';
import EshVisionHero from '../sections/EshVisionHero.jsx';
import Table from '../sections/Table.jsx';
import { Feedback } from '../sections';

const EshVision = () => {
  // const list = ['likhitha', 'eshller', 'vallabh', 'akshat'];
  const list = ['likhitha', 'eshller', 'vallabh', 'akshat', 'sakshi', 'admin', 'mohitkrishna', 'ektaagarwal', 'kajal', 'nallasaisrikar', 'filzasiddiqui', 'adityamandhane', 'gauravshelke', 'piyushsoni', 'adityapratap', 'trishul', 'sangeeta', 'shivakoli', 'sankalpkushwaha', 'kamalmahour', 'vedantbhosale', 'tanishkashivhare', 'anishmahore', 'eeshasingh', 'aryanmishra', 'narender', 'meeragoyal', 'nikhilsaini', 'harshchaurasia', 'pratikshakapoor', 'rahulmj', 'sarita', 'sricharannanthakumaran', 'lalitkumar', 'anjalikapoor', 'sharvarilahane', 'adityakumarchoudhary', 'shyamk', 'laghudeepsingh', 'viyasudhirrajap', 'nashrasabiralisiddiqui', 'adwait', 'dineshp', 'ritika', 'nashra', 'ameysawalkar', 'dimpalaggarwal'];
  const [authenticated, setauthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const handleInput = (e) => {
    e.preventDefault();
    setUsername(e.target.value?.toLowerCase());
  };
  const handleSubmit = () => {
    list?.forEach((element) => {
      if (username === element) {
        setauthenticated(true);
      }
    });
  };
  // if()
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <EshVisionHero />
      <div className="relative">
        {authenticated ? (
          <Table />
        ) : (
          <div className="text-center">
            <h1 className="text-transparent bg-clip-text font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono bg-gradient-to-tl from-[#1a232e] to-blue-300">
              LOGIN HERE
            </h1>
            <TextField
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              id="outlined-basic" label="username" variant="filled" onChange={handleInput} type="password"
            />
            <Button sx={{ margin: '10px', color: 'white' }} variant="contained" onClick={handleSubmit}>Login</Button>

          </div>
        )}
        <div className="text-white text-center font-bold">
          Not Registered? Click : <a href="https://forms.gle/zxnNxp6kb4Bc71G26" className="text-blue-200 hover:text-white">Registration Link</a>
          <div className="gradient-03 z-0" />
        </div>
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};
export default EshVision;
