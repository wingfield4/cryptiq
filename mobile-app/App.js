import React, { useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { Provider } from 'react-redux';

import AppLoading from './components/common/AppLoading';
import ColorManager from './components/managers/ColorManager';
import ConnectionManager from './components/managers/ConnectionManager';
import DatabaseManager from './components/managers/DatabaseManager';
import StatusBarManager from './components/managers/StatusBarManager';
import UserManager from './components/managers/UserManager';

import Screens from './Screens';
import store from './utilities/store';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(true);

  const handleComplete = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        500,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity
      )
    );

    setPlaying(false);
  }

  return (
    <Provider store={store}>
      <ColorManager />
      <ConnectionManager />
      <DatabaseManager onComplete={() => setLoading(false)} />
      <UserManager />
      {!loading && !playing && 
        <Screens />
      }
      {(playing || loading) &&
        <AppLoading onComplete={handleComplete} />
      }
      <StatusBarManager />
    </Provider>
  )
}

export default App;
