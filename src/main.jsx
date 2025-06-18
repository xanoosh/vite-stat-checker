import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Error from './components/Error/Error.jsx';
import Loading from './components/Loader/Loader.jsx';
const queryClient = new QueryClient();
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const SearchPokemonPage = React.lazy(() =>
  import('./pages/SearchPokemonPage.jsx')
);
const CompareStatsPage = React.lazy(() =>
  import('./pages/CompareStatsPage.jsx')
);

const SettingsPage = React.lazy(() => import('./pages/SettingsPage.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loading />}>
            <SearchPokemonPage />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: 'compare',
        element: (
          <React.Suspense fallback={<Loading />}>
            <CompareStatsPage />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: 'settings',
        element: (
          <React.Suspense fallback={<Loading />}>
            <SettingsPage />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
