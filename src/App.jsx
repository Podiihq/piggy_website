import { Route, Routes, useLocation } from 'react-router';
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  )

}

export default App
