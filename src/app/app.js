import { QueryClient, QueryClientProvider } from 'react-query';
import { Routing } from './routes';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

export const App = () => {
  return <QueryClientProvider client={queryClient}>
    <StatusBar style='light' />
    <Routing />
  </QueryClientProvider>;
};
