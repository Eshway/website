// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Footer, Navbar } from '../components';
import EshVisionHero from '../sections/EshVisionHero.jsx';
import Table from '../sections/Table.jsx';
import { Feedback } from '../sections';
import WorkshopHero from '../sections/WorkshopHero.jsx';

const EshVision = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      {/* HERE IS{process.env.NEXT_PUBLIC_SHEET_ID} */}
      <WorkshopHero />
      <div className="relative">
        {/* {authenticated ? (
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
              id="outlined-basic"
              label="username"
              placeholder="Enter Username"
              variant="filled"
              onChange={handleInput}
              type="password"
              // sx={{ backgroundImage: 'linear-gradient(97.86deg,#a509ff 0%,#34acc7 53.65%,#a134c7 100%)' }}
              sx={{ color: 'white' }}
            />
            <Button
              sx={{ margin: '10px', color: 'white' }}
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
        )}
        <div className="text-white text-center font-bold">
          Not Registered? Click :{' '}
          <a
            href="https://forms.gle/WC4vf5itBtnTxXZV7"
            className="text-blue-200 hover:text-white"
          >
            Registration Link
          </a>
          <div className="gradient-03 z-[-1]" />
        </div> */}
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};
export default EshVision;
