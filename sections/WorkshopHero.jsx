'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Palette, Terminal, Globe, Database, Download } from 'lucide-react'
import { Button, TextField } from '@mui/material'

export default function WorkshopHero() {
  const [username, setUsername] = useState('')
  const [authenticated, setAuthenticated] = useState(false);
  const [showToast, setShowToast] = useState(false)

  const [userList, setUserList] = useState();

  const fetchUsernames = async () => {
    try {
      const response = await fetch('/api/fetchSheetData');
      const data = await response.json();

      // console.log(data);

      if (data && data.data) {
        // Flatten the array if necessary and set the user list
        setUserList(data.data.flat());
      }
    } catch (error) {
      console.error('Error fetching usernames:', error);
    }
  };

  useEffect(() => {
    fetchUsernames();
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    setUsername(e.target.value?.toLowerCase());
  };
  const handleSubmit = () => {
    const isValidUsername = userList?.some((element) => username === element)

    if (isValidUsername) {
      setAuthenticated(true)
    } else {
      setShowToast(true) // Show the toast when username is incorrect
      setAuthenticated(false)

      setTimeout(() => {
        setShowToast(false) // Hide the toast after 3 seconds
      }, 3000)
    }
  }

  const resources = [
    {
      name: <>HTML <Button
        href="/workshop/html.zip"
        download
        variant="text"
        sx={{ color: '#d86dfc' }}
      >
        <Download />
      </Button></>, description: 'Structure of web pages', icon: <Code className="w-6 h-6 text-orange-500" />
    },
    {
      name: <>CSS
        <Button
          href="/workshop/css.zip"
          download
          variant="text"
          sx={{ color: '#d86dfc' }}
        >
          <Download />
        </Button>
      </>, description: 'Styling of web pages', icon: <Palette className="w-6 h-6 text-blue-500" />
    },
    {
      name: <>JavaScript<Button
        href="/workshop/js.zip"
        download
        variant="text"
        sx={{ color: '#d86dfc' }}
      >
        <Download />
      </Button></>, description: 'Programming language for web', icon: <Terminal className="w-6 h-6 text-yellow-500" />
    },
    {
      name: <>React<Button
        href="/workshop/react.zip"
        download
        variant="text"
        sx={{ color: '#d86dfc' }}
      >
        <Download />
      </Button></>, description: 'JavaScript library for building user interfaces', icon: <Globe className="w-6 h-6 text-cyan-500" />
    },
    {
      name: <>Node.js & Express.js<Button
        href="/workshop/nodeandexpress.zip"
        download
        variant="text"
        sx={{ color: '#d86dfc' }}
      >
        <Download />
      </Button></>, description: 'JavaScript runtime for server-side development', icon: <Database className="w-6 h-6 text-green-500" />
    },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 text-white">
      {/* Welcome Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Welcome to EshVision Workshop
        </h1>
        <p className="sm:text-xl text-md text-gray-300 mt-2">Enter your username to access resources</p>
      </motion.div>

      {/* Username Input Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div className="flex gap-3 items-center">
          <TextField
            type="text"
            variant="outlined"
            placeholder="Enter your username"
            value={username}
            onChange={handleInput}
            InputProps={{ style: { color: 'white' } }}
            className="flex-grow bg-gray-800 text-white placeholder-gray-400"
          />
          <Button
            variant="outline"
            sx={{ backgroundColor: '#d86dfc', color: 'white' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </motion.form>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 px-4 py-2 rounded bg-red-600 text-white"
        >
          Incorrect username. Please try again.
        </motion.div>
      )}

      {/* Resources Table (Conditional) */}
      <AnimatePresence>
        {authenticated && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl mt-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Web Development Resources
            </h2>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4 text-gray-300">Resource</th>
                    <th className="p-4 text-gray-300">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((resource, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="p-4 text-white flex items-center gap-2">
                        {resource.icon}
                        {resource.name}
                      </td>
                      <td className="p-4 text-gray-300">{resource.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
