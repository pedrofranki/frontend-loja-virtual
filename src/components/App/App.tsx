import React, {ReactNode} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Dashboard, {DashBoardProps} from '../../pages/Dashboard/Dashboard';


export interface AppProps {
  
}
 
const App: React.FC= () => {
  return (<>
    <NavBar />
    <Router>
      <Switch>
        <Route path="/" exact component={(props: DashBoardProps) => <Dashboard {...props} category="shirt" />} />
        <Route path="/pants" exact component={(props: DashBoardProps )=> <Dashboard {...props} category="pants" />} />

      </Switch>
    </Router>
  </>);
}

export default App;

