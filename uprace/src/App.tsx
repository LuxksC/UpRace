import { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { Home } from './pages/Home';
import { Race } from './pages/Race';
import { GameOver } from './pages/GameOver';

type EndGameContextType = {
  carCrashed: boolean,
  setCarCrashed: React.Dispatch<React.SetStateAction<boolean>>,
}

export const EndGameContext = createContext({} as EndGameContextType);

function App() {
  const [carCrashed, setCarCrashed] = useState(false)

  return (
    <div>
      <Toaster
      position="top-center"
      reverseOrder={false}
      />
      <BrowserRouter>
        <Switch>
          <EndGameContext.Provider value={{carCrashed, setCarCrashed}}>
            <Route path="/" exact component={Home} />
            <Route path="/race" exact component={Race} />
            <Route path="/gameover" exact component={GameOver} />
          </EndGameContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;