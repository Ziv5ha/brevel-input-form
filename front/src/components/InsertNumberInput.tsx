import React, { useRef } from 'react';
import { updateMeasurementNum } from '../helpers/updateMeasurement';

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
    const value = Number(inputRef.current?.value) || 0;
    updateMeasurementNum(setMeasurement, label, value);
  };
  const onBlurFunc = () => {
    if (inputRef.current) {
      if (inputRef.current.value) {
        inputRef.current.value = measurement[label].toString();
      } else {
        inputRef.current.value = '0';
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
    <div>
      <label htmlFor={label}>{label.replaceAll('_', ' ')}: </label>
      <input
        id={label}
        type='number'
        ref={inputRef}
        onChange={onChangeFunc}
        onBlur={onBlurFunc}
        onFocus={onFocusFunc}
        value={measurement[label]}
        required
      />
      {UnitOfMeasure ? UnitOfMeasure : ''}
    </div>
  );
}
