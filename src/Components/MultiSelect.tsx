import React, { useState } from 'react';

interface MultiselectDropdownProps {
  value: string[];
  readonly: boolean;
}

const MultiselectDropdown: React.FC<MultiselectDropdownProps> = ({
  value,
  readonly,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: checkboxValue, checked } = event.target;

    if (checked) {
      setSelectedValues([...selectedValues, checkboxValue]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== checkboxValue));
    }
  };
  //fake data for list map 
  const country = [
    { "name": "Afghanistan" },
    { "name": "Albania" },
    { "name": "Algeria" },
    { "name": "Andorra" },
    { "name": "Angola" },
    { "name": "Antigua and Barbuda" },
    { "name": "Argentina" },
    { "name": "Armenia" },
    { "name": "Australia" },
    { "name": "Austria" },
    { "name": "Azerbaijan" },
    { "name": "Bahamas" },
    { "name": "Bahrain" },
    { "name": "Bangladesh" },
    { "name": "Barbados" },
    { "name": "Belarus" },
    { "name": "Belgium" },
    { "name": "Belize" },
    { "name": "Benin" },
    { "name": "Bhutan" },
    { "name": "Bolivia" },
  ]



  return (
    <div className='main-container'>
      <label>Options:</label>
      <div>
        <input
          type="checkbox"
          value="val1"
          checked={selectedValues.includes('val1')}
          disabled={readonly}
          onChange={handleChange}
        />
        <label>Value 1</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="val2"
          checked={selectedValues.includes('val2')}
          disabled={readonly}
          onChange={handleChange}
        />
        <label>Value 2</label>
      </div>
      {
        country.map((cname: any) => {
          return (
            <div>
              <input
                type="checkbox"
                value={cname.name}
                checked={selectedValues.includes(cname.name)}
                disabled={readonly}
                onChange={handleChange}
              />
              <label>{cname.name}</label>
            </div>
          )
        })
      }
    </div>
  );
};

export default MultiselectDropdown;
