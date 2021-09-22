import React, { useEffect } from 'react';

import db from '../../db';
import seedFakeData from '../../utilities/fakeData/seedFakeData';

const DatabaseManager = ({ onComplete }) => {
  useEffect(async () => {
    await db.down(); /* for debugging */
    await db.up();
    await seedFakeData(); /* for debugging */
    onComplete();
  }, [])

  return (
    <></>
  )
}

export default DatabaseManager;
