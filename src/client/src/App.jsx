import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/store';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
   
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>

    </Provider>
  );
}

export default App;
