import './App.css';
import General from './pages/General';
import Messages from './pages/Messages';
import Message from './pages/Message';
import Layout from './Layout';
import Discover from './pages/Discover';

import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<General />} />
                <Route path="messages" element={<Messages />} />
                <Route path="message" element={<Message />} />
                <Route path="dicover" element={<Discover />} />
            </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
