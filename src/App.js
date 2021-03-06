import React from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();
  console.log(user)
  return (
    <div className='app'>
      <Router>
        {
          !user ? (
            <Login/>
          ) : (
            <>
              <Header/>
              <div className='app__body'>
                <Sidebar/> 
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat/>
                  </Route>
                  <Route path="/">
                    <h1>Hai</h1>
                  </Route>
                </Switch>
              </div>
            </>
          )
        }
      </Router>
    </div>
  );
}

export default App;
