import React, { useRef, useState } from 'react';
import {
  updateMeasurementOption,
  updateMeasurementStr,
} from '../helpers/updateMeasurement';
import '../styles/options.css';
import Select from 'react-select';

export default function InsertOptions({
  label,
  options,
  maxLength,
  measurement,
  setMeasurement,
}: {
  label: MeasurementOptionsKeys;
  options: string[];
  maxLength: number;
  measurement: IMeasurement;
  setMeasurement: React.Dispatch<React.SetStateAction<IMeasurement>>;
}) {
  const [selected, setSelected] = useState('');
  const otherRef = useRef<HTMLInputElement>(null);

  // 'other' functions
  const onChangeOther = () => {
    if (maxLength) {
      const value = otherRef.current?.value || '';
      updateMeasurementStr(setMeasurement, label, maxLength, value);
    }
  };

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      width: '10em',
      minHeight: '2.2em',
      height: '2.2em',
      fontSize: '0.8em',
    }),
    option: (
      styles: any,
      { isSelected, isFocused }: { isSelected: boolean; isFocused: boolean }
    ) => {
      return {
        ...styles,
        fontSize: '0.8em',
        color: '#000',
        backgroundColor: isSelected
          ? '#9EBFA6'
          : isFocused
          ? '#e2e2e2'
          : '#fff',
      };
    },
  };

  const optionsArr = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div className='input-container'>
      <label htmlFor={label}>{label.replaceAll('_', ' ')}: </label>
      <div className='select-container'>
        <Select
          styles={colourStyles}
          options={optionsArr}
          onChange={(e) => {
            const value = e?.value || '';
            setSelected(value);
            updateMeasurementOption(setMeasurement, label, value, maxLength);
          }}
        />
        {selected === 'other' ? (
          <input
            className='other-input'
            ref={otherRef}
            onChange={onChangeOther}
            value={measurement[label]}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
