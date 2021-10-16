import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { Home } from './pages/Home';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;