import { QueryClient, QueryClientProvider } from 'react-query';
import { Routing } from './routes';
import { StatusBar } from 'expo-status-bar';
import { ModalProvider } from '../shared/lib/modal/modal.provider';
import { ModalManager } from '../widgets/modal-manager';
import { NavigationContainer } from '@react-navigation/native';

const queryClient = new QueryClient();

export const App = () => {
  return <>
      <StatusBar style='light' />
      <Routing />
    </>;
};

export default () => {
  return <NavigationContainer>
    <QueryClientProvider client={queryClient}>
  <ModalProvider>
    <App />
    <ModalManager />
  </ModalProvider>
</QueryClientProvider>
  </NavigationContainer>;
};
