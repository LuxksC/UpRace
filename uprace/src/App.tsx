import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { Home } from './pages/Home';
import { Race } from './pages/Race';
import { GameOver } from './pages/GameOver';

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
          <Route path="/gameover" exact component={GameOver} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;