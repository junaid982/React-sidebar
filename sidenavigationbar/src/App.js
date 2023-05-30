
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Routess from './Routess';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<h1><Link to='sidebar'>login</Link></h1>} />
          <Route path='/sidebar' element={<Routess />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='users' element={<h1>Users</h1>} />
            <Route path='message' element={<h1>Message</h1>} />
            <Route path='analytics' element={<h1>Analytics</h1>} />
            <Route path='filemanager' element={<h1>File Manager</h1>} />
            <Route path='order' element={<h1>Orders</h1>} />
            <Route path='saved' element={<h1>Saved</h1>} />
            <Route path='settings' element={<h1>Settings</h1>} />
            <Route path='*' element={<h1>404 Page not found</h1>} />
          </Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
