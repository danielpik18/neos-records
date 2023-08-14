import './App.scss';

/* REACT LIBS */
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { Navigate, Route, Routes } from 'react-router-dom';


/* PAGES */
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import Contact from 'pages/Contact/Contact';
import News from 'pages/News/News';
import MyAccount from 'pages/MyAccount/MyAccount';
import NewsItemDetails from 'pages/NewsItemDetails/NewsItemDetails';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';

/* COMPONENTS */
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

function App() {

  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <section className="App-content">
        <Navbar />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/news'
            //element={user ? <News /> : <Navigate to='/login' />}
            element={<News />}
          >
          </Route>

          <Route path='news/:id' element={<NewsItemDetails/>} />

          <Route
            path='/about-us'
            element={<AboutUs />}
          />
          
          <Route
            path='/contact'
            element={<Contact />}
          />

          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/' />}
          />
          
          <Route
            path='/register'
            element={<Register />}
          />

          <Route
            path='/my-account'
            element={user ? <MyAccount /> : <Navigate to='/login' />}
          />
        </Routes>

        <Footer />
      </section>
    </div>
  );
}

export default App;