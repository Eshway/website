'use client';

import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Button, TextField } from '@mui/material';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';
// import { eshvision } from '../constants';

const Table = () => {
  const [completed, setCompleted] = useState(false);
  const [completedTwo, setCompletedTwo] = useState(false);
  const [completedThird, setCompletedThird] = useState(false);
  const [ans, setAns] = useState();
  const [ans2, setAns2] = useState();
  const [ans3, setAns3] = useState();
  const handleOneKey = (qn) => {
    if (qn === '1' && ans === 'esh28') {
      setCompleted(true);
    } else {
      alert('Wrong Passcode');
    }
  };
  const handleAns = (answer) => {
    setAns(answer.target.value);
    // console.log('THIS IS THE ANSWER :', answer.target.value);
  };
  const handleTwoKey = () => {
    if (ans2 === 'esh01q') {
      setCompletedTwo(true);
    } else {
      alert('Wrong Passcode');
    }
  };
  const handleTwoAns = (answer) => {
    setAns3(answer.target.value);
    console.log('THIS IS THE ANSWER :', answer.target.value);
  };

  const handleThirdKey = () => {
    if (ans3 === 'eshvision2.0') {
      setCompletedThird(true);
    } else {
      alert('Wrong Passcode');
    }
  };
  const handleThirdAns = (answer) => {
    setAns3(answer.target.value);
    console.log('THIS IS THE ANSWER :', answer.target.value);
  };

  return (
    <section className={`${styles.paddings} relative z-10`} id="about">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Course Outline" textStyles="text-center" />

        <motion.section
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white w-[100%]"
          style={{ overflow: 'scroll' }}
        >

          {/* =======ESHVISION 1.0 TABLE======= */}

          {/* <table className="border-collapse w-[100%] border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 p-5">S.No</th>
              <th className="border border-slate-600 p-5">Topic</th>
              <th className="border border-slate-600 p-5">Complete By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 p-5">1.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Before-we-start-dffc29d9110d4603b175c5bab851025d" target="_blank" className="btn text-blue-200" rel="noreferrer">Before we start</a></td>
              <td className="border border-slate-700 p-5">30th August 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">2.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Basic-Requirements-4a6d848ab5de4a8e9c9256393b857be0" target="_blank" className="btn  text-blue-200" rel="noreferrer">Basic Requirements</a></td>
              <td className="border border-slate-700 p-5">30th August 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">3.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Introduction-to-HTML-f2cb285d295b40c8beb7d605cf52389d" target="_blank" className="btn btn-primary" rel="noreferrer">Introduction to HTML</a></td>
              <td className="border border-slate-700 p-5">30th June 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">4.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Advanced-HTML-f5997f3e62ed4d51b6351e28fd489ffb?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">Advanced HTML</a></td>
              <td className="border border-slate-700 p-5">2nd July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">5.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Task-1-db9e419d7b884fd680077775e6fc841f?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">Task - 1</a></td>
              <td className="border border-slate-700 p-5">2nd July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">6.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/CSS-8dc63612b48f4e4a8aa2c4e673fe5b46?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">CSS</a></td>
              <td className="border border-slate-700 p-5">3rd July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">7.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Bootstrap-f2b2976455b748ce8a97fbf7bec7c23a?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">Bootstrap</a></td>
              <td className="border border-slate-700 p-5">4th July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">8.</td>
              <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Task-2-0b3b266483f14d39b4ca07919f3c3dc5" target="_blank" className="btn btn-primary" rel="noreferrer">Task - 2</a></td>
              <td className="border border-slate-700 p-5">6th July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">9.</td>
              <td className="border border-slate-700 p-5"><a href="https://www.notion.so/eshller/JavaScript-d73bea34701042e09103ce34f5da2d68?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">JavaScript</a></td>
              <td className="border border-slate-700 p-5">9th July 2023</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-5">10.</td>
              <td className="border border-slate-700 p-5"><a href="https://www.notion.so/eshller/Assignment-1-8442bb99ec6b418e8e52f4e7098f9939?pvs=4" target="_blank" className="btn btn-primary" rel="noreferrer">Assignment - 1</a></td>
              <td className="border border-slate-700 p-5">11th July 2023</td>
            </tr>
          </tbody>
        </table> */}

          {/* =======ESHVISION 2.0 TABLE======= */}
          <table className="border-collapse border border-slate-500 ">
            <thead>
              <tr>
                <th className="border border-slate-600 p-5">S.No</th>
                <th className="border border-slate-600 p-5">Topic</th>
                <th className="border border-slate-600 p-5">Complete By</th>
                <th className="border border-slate-600 p-5">Resource</th>
                <th className="border border-slate-600 p-5">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 p-5">1</td>
                <td className="border border-slate-700 p-5">Before we start</td>
                <td className="border border-slate-700 p-5">2nd September</td>
                <td className="border border-slate-700 p-5">No Assessment</td>
                <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Before-we-start-dffc29d9110d4603b175c5bab851025d" target="_blank" className="btn text-blue-200" rel="noreferrer">Click here</a></td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-5">2</td>
                <td className="border border-slate-700 p-5">Basic Requirements</td>
                <td className="border border-slate-700 p-5">2nd September</td>
                <td className="border border-slate-700 p-5">No Assessment</td>
                <td className="border border-slate-700 p-5"><a href="https://eshller.notion.site/Basic-Requirements-4a6d848ab5de4a8e9c9256393b857be0" target="_blank" className="btn  text-blue-200" rel="noreferrer">Click here</a></td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-5">3</td>
                <td className="border border-slate-700 p-5">Introduction to HTML</td>
                <td className="border border-slate-700 p-5">7th September</td>
                <td className="border border-slate-700 p-5">No Assessment</td>
                <td className="border border-slate-700 p-5">{completed ? (<a href="https://eshller.notion.site/Introduction-to-HTML-f2cb285d295b40c8beb7d605cf52389d" target="_blank" className="btn btn-primary text-blue-200" rel="noreferrer">Click here</a>) : (
                  <>
                    <TextField onChange={(event) => handleAns(event)} InputLabelProps={{ style: { color: '#fff' } }} sx={{ color: 'white !important' }} variant="outlined" label="Enter key" />
                    <Button variant="outlined" onClick={() => handleOneKey('1')}>Submit</Button>
                  </>
                )}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-5">3</td>
                <td className="border border-slate-700 p-5">CSS</td>
                <td className="border border-slate-700 p-5">14th September</td>
                <td className="border border-slate-700 p-5"><a href="https://forms.gle/yKhArJMHBjEV9jou5" target="_blank" rel="noopener noreferrer">Assessment</a></td>
                <td className="border border-slate-700 p-5">{completedTwo ? (<a href="https://eshller.notion.site/CSS-8dc63612b48f4e4a8aa2c4e673fe5b46?pvs=4" target="_blank" className="btn btn-primary text-blue-200" rel="noreferrer">Click here</a>) : (
                  <>
                    <TextField onChange={(event) => handleTwoAns(event)} InputLabelProps={{ style: { color: '#fff' } }} sx={{ color: 'white !important' }} variant="outlined" label="Enter key" />
                    <Button variant="outlined" onClick={handleTwoKey}>Submit</Button>
                  </>
                )}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-5">4</td>
                <td className="border border-slate-700 p-5">JavaScript</td>
                <td className="border border-slate-700 p-5">23rd September</td>
                <td className="border border-slate-700 p-5"><a href="https://forms.gle/dzaSpqA8XkFxdE5H9" target="_blank" rel="noopener noreferrer">Assessment</a></td>
                <td className="border border-slate-700 p-5">{completedThird ? (<a href="https://eshller.notion.site/JavaScript-d73bea34701042e09103ce34f5da2d68" target="_blank" className="btn btn-primary text-blue-200" rel="noreferrer">Click here</a>) : (
                  <>
                    <TextField onChange={(event) => handleThirdAns(event)} InputLabelProps={{ style: { color: '#fff' } }} sx={{ color: 'white !important' }} variant="outlined" label="Enter key" />
                    <Button variant="outlined" onClick={handleThirdKey}>Submit</Button>
                  </>
                )}
                </td>
              </tr>
              {/* <tr>
                <td className="border border-slate-700 p-5">1</td>
                <td className="border border-slate-700 p-5"><a href="https" target="_blank" className="btn btn-primary" rel="noreferrer">Introduction to HTML</a></td>
                <td className="border border-slate-700 p-5">Deadline</td>
                <td className="border border-slate-700 p-5"><a href="https://forms.gle/8GzdYo1kCrozK6hq5" target="_blank" className="btn btn-primary" rel="noreferrer">Assessment</a></td>
                <td className="border border-slate-700 p-5">{completed ? (<a href="http" target="_blank" className="btn btn-primary" rel="noreferrer">Click here</a>) : (
                  <>
                    <TextField onChange={(event) => handleAns(event)} InputLabelProps={{ style: { color: '#fff' } }} sx={{ color: 'white !important' }} variant="outlined" label="Enter key" />
                    <Button variant="outlined" onClick={() => handleOneKey('1')}>Submit</Button>
                  </>
                )}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-5">1</td>
                <td className="border border-slate-700 p-5"><a href="https" target="_blank" className="btn btn-primary" rel="noreferrer">Introduction to HTML</a></td>
                <td className="border border-slate-700 p-5">Deadline</td>
                <td className="border border-slate-700 p-5"><a href="TEST LINK" target="_blank" className="btn btn-primary" rel="noreferrer">Assessment</a></td>
                <td className="border border-slate-700 p-5">{completed ? (<a href="http" target="_blank" className="btn btn-primary" rel="noreferrer">Click here</a>) : (
                  <>
                    <TextField onChange={(event) => handleAns(event)} InputLabelProps={{ style: { color: '#fff' } }} sx={{ color: 'white !important' }} variant="outlined" label="Enter key" />
                    <Button variant="outlined" onClick={() => handleOneKey('1')}>Submit</Button>
                  </>
                )}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-5">1</td>
                <td className="border border-slate-700 p-5"><a href="https" target="_blank" className="btn btn-primary" rel="noreferrer">Introduction to HTML</a></td>
                <td className="border border-slate-700 p-5">Deadline</td>
                <td className="border border-slate-700 p-5"><a href="TEST LINK" target="_blank" className="btn btn-primary" rel="noreferrer">Assessment</a></td>
                <td className="border border-slate-700 p-5">{completed ? (<a href="http" target="_blank" className="btn btn-primary" rel="noreferrer">Click here</a>) : (
                  <>
                    <TextField onChange={(event) => handleAns(event)} InputLabelProps={{ style: { color: '#fff' } }} sx={{ color: 'white !important' }} variant="outlined" label="Enter key" />
                    <Button variant="outlined" onClick={() => handleOneKey('1')}>Submit</Button>
                  </>
                )}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-5">1</td>
                <td className="border border-slate-700 p-5"><a href="https" target="_blank" className="btn btn-primary" rel="noreferrer">Introduction to HTML</a></td>
                <td className="border border-slate-700 p-5">Deadline</td>
                <td className="border border-slate-700 p-5"><a href="TEST LINK" target="_blank" className="btn btn-primary" rel="noreferrer">Assessment</a></td>
                <td className="border border-slate-700 p-5">{completed ? (<a href="http" target="_blank" className="btn btn-primary" rel="noreferrer">Click here</a>) : (
                  <>
                    <TextField onChange={(event) => handleAns(event)} InputLabelProps={{ style: { color: '#fff' } }} sx={{ color: 'white !important' }} variant="outlined" label="Enter key" />
                    <Button variant="outlined" onClick={() => handleOneKey('1')}>Submit</Button>
                  </>
                )}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-5">1</td>
                <td className="border border-slate-700 p-5"><a href="https" target="_blank" className="btn btn-primary" rel="noreferrer">Introduction to HTML</a></td>
                <td className="border border-slate-700 p-5">Deadline</td>
                <td className="border border-slate-700 p-5"><a href="TEST LINK" target="_blank" className="btn btn-primary" rel="noreferrer">Assessment</a></td>
                <td className="border border-slate-700 p-5">{completed ? (<a href="http" target="_blank" className="btn btn-primary" rel="noreferrer">Click here</a>) : (
                  <>
                    <TextField onChange={(event) => handleAns(event)} InputLabelProps={{ style: { color: '#fff' } }} sx={{ color: 'white !important' }} variant="outlined" label="Enter key" />
                    <Button variant="outlined" onClick={() => handleOneKey('1')}>Submit</Button>
                  </>
                )}
                </td>
              </tr> */}
            </tbody>
          </table>
        </motion.section>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default Table;
