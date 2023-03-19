import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

import { store, persistor } from 'redux/store';

import Navbar from 'components/modules/Navbar/Navbar';
import Navigation from 'Navigation';
import AuthLayout from 'components/modules/AuthLayout/AuthLayout';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <BrowserRouter basename="goit-react-hw-08-phonebook">
              <Navbar />
              <Navigation />
            </BrowserRouter>
          </AuthLayout>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
};
