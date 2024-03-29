// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Footer, Navbar } from '../components';
import EshVisionHero from '../sections/EshVisionHero.jsx';
import Table from '../sections/Table.jsx';
import { Feedback } from '../sections';

const EshVision = () => {
  // const list = ['likhitha', 'eshller', 'vallabh', 'akshat', 'prakhar', 'subham', 'sakshi', 'admin', 'mohitkrishna', 'ektaagarwal', 'kajal', 'nallasaisrikar', 'filzasiddiqui', 'adityamandhane', 'gauravshelke', 'piyushsoni', 'adityapratap', 'trishul', 'sangeeta', 'shivakoli', 'sankalpkushwaha', 'kamalmahour', 'vedantbhosale', 'tanishkashivhare', 'anishmahore', 'eeshasingh', 'aryanmishra', 'narender', 'meeragoyal', 'nikhilsaini', 'harshchaurasia', 'pratikshakapoor', 'rahulmj', 'sarita', 'sricharannanthakumaran', 'lalitkumar', 'anjalikapoor', 'sharvarilahane', 'adityakumarchoudhary', 'shyamk', 'laghudeepsingh', 'viyasudhirrajap', 'nashrasabiralisiddiqui', 'adwait', 'dineshp', 'ritika', 'nashra', 'ameysawalkar', 'dimpalaggarwal', 'adityakashyap', 'teena', 'prashasti'];
  const list = [
    'likhitha',
    'eshller',
    'vallabh',
    'akshat',
    'nakshita',
    'admin',
    'nashrasiddiqui',
    'vedantbhosale',
    'anitarawat',
    'chandershekha',
    'harshamge',
    'yashkumar',
    'akrativerma',
    'qunutshirgaonkar',
    'shaikhahme',
    'dhruvsudan',
    'aasthaagrawal',
    'tarunkurapaty',
    'yashasore',
    'rohitbenjamin',
    'ripankamil',
    'suhanirathor',
    'gunjangupta',
    'shashwattrived',
    'atharvavarpe',
    'astitvaraj',
    'aniruddhsharm',
    'akshikajai',
    'lucky6',
    '38675287',
    'yuvrajgupt',
    'ayushlodh',
    'mradulsonka',
    'ayushtaya',
    'ravira',
    'rounakgupt',
    'aakashgupta',
    'ashishchane',
    'abhaychandra',
    'sandhya',
    'lohithpol',
    'riteshkuma',
    'sahilpati',
    'sumantripathi',
    'teen',
    'samanthmarti',
    'ayushlonakad',
    'ashwinanand',
    'mohammadshafi',
    'nikhilsain',
    'rishibhand',
    'prajyot',
    'ayushnema',
    'somannagarianandith',
    'teena',
    'omnunase',
    'mayureshkathe',
    'nish',
    'amanverm',
    'anujyada',
    'shrutising',
    'jyotiprakash',
    'nashrasiddiqui',
    'vedantbhosale',
    'anitarawat',
    'chandershekhar',
    'ramkumarr',
    'harshamge',
    'yashkuma',
    'akrativerm',
    'qunutshirgaonkar',
    'shaikhahme',
    'dhruvsudan',
    'aasthaagrawal',
    'tarunkurapaty',
    'yashasore',
    'rohitbenjamin',
    'ripankamil',
    'suhanirathor',
    'gunjangupta',
    'shashwattrived',
    'atharvavarpe',
    'astitvaraj',
    'aniruddhsharm',
    'akshikajai',
    'lucky6',
    '38675287',
    'yuvrajgupt',
    'ayushlodh',
    'mradulsonka',
    'ayushtaya',
    'ravira',
    'rounakgupt',
    'aakashgupta',
    'ashishchane',
    'abhaychandra',
    'sandhyabarathi',
    'lohithreddypol',
    'riteshkuma',
    'sahilpati',
    'sumantripathi',
    'teen',
    'samanthmarti',
    'ayushlonakad',
    'ashwinanand',
    'mohammadshafi',
    'nikhilsain',
    'rishibhand',
    'prajyot',
    'ayushnema',
    'somannagarianandith',
    'omnunase',
    'mayureshkathe',
    'gowrisomisetty',
    'nish',
    'amanverm',
    'anujyada',
    'shrutising',
    'jyotiprakash',
    'nileshverma',
    'rudrapratapsingh',
    'anshumishra',
    'dhruvchaturvedi',
    'aryankashyap',
    'jyotiprakash',
    'eekshithasomisetty',
    'taiabansary',
    'k.sricharanraj',
    'yashitkumar',
    'purna',
    'shaikawezmehtab',
    'malaykedia',
    'tusharkumarjain',
    'shashankjoshi',
    'anirudhmamgain',
    'rupeshanilsonawane',
    'shubhamjoshu',
    'polipallimadhusudanarao',
    'mohankrishnakatta',
    'ayushlonakadi',
    'nikhilkhandelwal',
    'priyanshu',
    'nikhilnarera',
    'shreyassingh',
    'harishkumarlaxmikantgajakosh',
    'sanyamsingh',
    'ronakgupta',
    'priyanshusengar',
    'divyanshsharma',
    'ashwinisinghtomar',
    'anujyadav',
    'aaryakokate',
    'ashwinanand',
    'leelalaharimalla',
    'mohiboddinshaikh',
    'ashasingh',
    'ripankamila',
    'nashrasiddiqui',
    'vedantbhosale',
    'anitarawat',
    'chandershekhar',
    'ramkumarr',
    'harshamge',
    'yashkumar',
    'akrativerma',
    'qunutikhtiyarshirgaonkar',
    'shaikhtehreemirshadahmed',
    'dhruvsudan',
    'aasthaagrawal',
    'tarunkurapaty',
    'yashasore',
    'rohitbenjamine',
    'ripankamila',
    'suhanirathore',
    'gunjangupta',
    'shashwattrivedi',
    'atharvavarpe',
    'astitvaraj',
    'aniruddhsharma',
    'akshikajain',
    'lucky@6386752877',
    'yuvrajgupta',
    'ayushlodhi',
    'mradulsonkar',
    'ayushtayal',
    'raviraj',
    'rounakgupta',
    'aakashgupta',
    'ashishchanel',
    'abhaychandra',
    'sandhyabarathik',
    'lohithreddypolu',
    'riteshkumar',
    'sahilravindrapatil',
    'sumantripathi',
    'teena',
    'samanthmartis',
    'ayushlonakadi',
    'ashwinanand',
    'mohammadsamiuddinshafi',
    'nikhilsaini',
    'rishibhande',
    'prajyot',
    'ayushnema',
    'somannagariananditha',
    'omnunase',
    'mayureshudaykathe',
    'gowrisaieekshithasomisetty',
    'nisha',
    'amanverma',
    'anujyadav',
    'shrutisingh',
    'jyotiprakash',
  ];
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
        </div>
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};
export default EshVision;
