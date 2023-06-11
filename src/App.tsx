import React from 'react';
import MultiselectDropdown from './Components/MultiSelect';

const App: React.FC = () => {
  return (
    <div >
      <h1>select Value</h1>
      <MultiselectDropdown value={['val1', 'val2']} readonly={true} />
    </div>
  );
};

export default App;
