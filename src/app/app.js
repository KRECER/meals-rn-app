import { QueryClient, QueryClientProvider } from 'react-query';
import { Routing } from './routes';

const queryClient = new QueryClient();

export const App = () => {
  return <QueryClientProvider client={queryClient}>
    <Routing />
  </QueryClientProvider>;
};
