import './global/root.scss';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import QuostesProvider from './context/QuotesProvider';
import Home from './pages/Home';
import Author from './pages/Author';

function App() {
  return (
    <QuostesProvider>
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
    </QuostesProvider>
  );
}

export default App;
