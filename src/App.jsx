import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Home'
import EditPage from './pages/Edit'


function App() {
  return (
    <div className="App min-h-screen bg-gray-100 dark:bg-gray-900 ">
      <h1 className='text-4xl font-bold text-center text-gray-800 dark:text-white mt-0 mb-10'>Meme Generator</h1>
      
      

      <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/edit/" element={<EditPage />} />
      </Routes>

      <footer className="py-4 bg-gray-800 text-center hover:text-blue-500 transition duration-300">
        <a target='_blank' className="text-white" href="https://bento.me/mddanish004">
          Created by Md Danish Ansari
        </a>
      </footer>
    </div>
  )
}

export default App
