import React, { useState } from 'react';
import { Provider } from 'react-redux';

import ColorManager from './components/managers/ColorManager';
import DatabaseManager from './components/managers/DatabaseManager';
import StatusBarManager from './components/managers/StatusBarManager';
import UserManager from './components/managers/UserManager';

import Screens from './Screens';
import store from './utilities/store';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Provider store={store}>
      <ColorManager />
      <DatabaseManager onComplete={() => setLoading(false)} />
      <UserManager />
      {!loading &&
        <Screens />
      }
      {loading &&
        <>{/* TODO */}</> 
      }
      <StatusBarManager />
    </Provider>
  )
}

export default App;
