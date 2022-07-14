import React, { useRef } from 'react';
import { updateMeasurementNum } from '../helpers/updateMeasurement';
import '../styles/numInput.css';

export default function InsertNumberInput({
  label,
  UnitOfMeasure,
  measurement,
  setMeasurement,
}: {
  label: MeasurementNumKeys;
  UnitOfMeasure?: string;
  measurement: IMeasurement;
  setMeasurement: React.Dispatch<React.SetStateAction<IMeasurement>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Event handlers
  const onChangeFunc = () => {
    const value = Number(Number(inputRef.current?.value).toFixed(2)) || 0;
    updateMeasurementNum(setMeasurement, label, value);
  };
  const onBlurFunc = () => {
    if (inputRef.current) {
      if (inputRef.current.value) {
        inputRef.current.value = measurement[label].toString();
      } else {
        inputRef.current.value = '0.0';
        updateMeasurementNum(setMeasurement, label, 0);
      }
    }
  };
  const onFocusFunc = () => {
    const value = Number(inputRef.current?.value) || 0;
    if (value !== 0) updateMeasurementNum(setMeasurement, label, value);
    else if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className='input-container'>
      <label htmlFor={label}>{label.replaceAll('_', ' ')}: </label>
      <div className='num-container'>
        <input
          className='num-input'
          id={label}
          type='number'
          ref={inputRef}
          onChange={onChangeFunc}
          onBlur={onBlurFunc}
          onFocus={onFocusFunc}
          defaultValue='0.0'
          value={measurement[label]}
          required
        />
        {UnitOfMeasure ? UnitOfMeasure : ''}
      </div>
    </div>
  );
}
