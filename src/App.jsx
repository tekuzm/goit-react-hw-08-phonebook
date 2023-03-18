import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import Navbar from 'components/Navbar/Navbar';
import Navigation from 'Navigation';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Navigation />
      </BrowserRouter>
    </Provider>
  );
};
