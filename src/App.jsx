import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  const navigationArray = [
    { path: '/', name: 'Search' },
    { path: 'compare', name: 'Compare' },
  ];
  return (
    <main>
      <NavBar navigationArray={navigationArray} />
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default App;
