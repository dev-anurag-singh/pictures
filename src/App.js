import { Router, Route } from 'react-router-dom';
import history from './history';

import Home from './components/Screens/Home';
import Search from './components/Screens/Search';
import Header from './components/layout/Header';

import './sass/main.scss';

const App = () => {
  return (
    <div className='app'>
      <Router history={history}>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/search/:term' component={Search} />
      </Router>
    </div>
  );
};

export default App;
