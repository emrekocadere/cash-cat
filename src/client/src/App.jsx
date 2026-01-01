import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/store';
import { setApiClientStore } from './api/client/axios.client';
import { AppRoutes } from './routes/AppRoutes';
import { Chatbot } from './components/chatbot';
import './App.css';

setApiClientStore(store); // bu olmadan da çaşışır mı

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>

        <BrowserRouter>
          <AppRoutes />
          <Chatbot />
        </BrowserRouter>

    </Provider>
  );
}

export default App;
