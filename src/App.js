import './global/root.scss';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Author from './pages/Author';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main className='hero'>
          <article className='hero-wrapper'>
              <Route exact path='/' component={Home} />
              <Route exact path='/:author' component={Author} />
          </article>
        </main>
        <footer>
        created by iCode-Cat - devChallenges.io
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
