// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import LoginSuccess from './LoginSuccess';
import Bookings from './Bookings';
import MovieDetail from './MovieDetail';
import Profile from './Profile';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie-detail" element={<MovieDetail />} /> {/* No changes needed here */}
      </Routes>
    </Router>
  );
}

export default App;
