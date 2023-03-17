import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import PhoneBook from './components/PhoneBook';
import Navbar from 'components/Navbar/Navbar';
import Navigation from 'Navigation';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Navigation />
        <PhoneBook />
      </BrowserRouter>
    </Provider>
  );
};
