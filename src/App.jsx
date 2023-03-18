import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

import Navbar from 'components/modules/Navbar/Navbar';
import Navigation from 'Navigation';
import AuthLayout from 'components/modules/AuthLayout/AuthLayout';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <Navbar />
            <Navigation />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};
