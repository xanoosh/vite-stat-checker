import './styles/index.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <p>nav placeholder</p>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default App;
