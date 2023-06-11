import React from 'react';
import MultiselectDropdown from './Components/MultiSelect';
import "./App.css"
const App: React.FC = () => {
  return (
    <div className='container'>
      <h3>select Value</h3>
      <MultiselectDropdown value={['val1', 'val2']} readonly={true} />
    </div>
  );
};

export default App;
