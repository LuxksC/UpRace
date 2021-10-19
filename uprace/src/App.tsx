import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { Home } from './pages/Home';
import { Timer } from './components/Timer';
import { Race } from './pages/Race';

function App() {
  return (
    <div>
      <Toaster
      position="top-center"
      reverseOrder={false}
      />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/race" exact component={Race} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;