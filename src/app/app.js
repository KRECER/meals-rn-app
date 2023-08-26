import { QueryClient, QueryClientProvider } from 'react-query';
import { CategoriesScreen } from '../screens/categories';

const queryClient = new QueryClient();

export const App = () => {
  return <QueryClientProvider client={queryClient}>
        <CategoriesScreen />
  </QueryClientProvider>;
};
