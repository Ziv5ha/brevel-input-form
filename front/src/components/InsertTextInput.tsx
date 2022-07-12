import React, { useRef } from 'react';
import { updateMeasurementStr } from '../helpers/updateMeasurement';

export default function InsertTextInput({
  label,
  maxLength,
  measurement,
  setMeasurement,
}: {
  label: MeasurementStrKeys;
  maxLength: number;
  measurement: IMeasurement;
  setMeasurement: React.Dispatch<React.SetStateAction<IMeasurement>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeFunc = () => {
    const value = inputRef.current?.value || '';
    updateMeasurementStr(setMeasurement, label, maxLength, value);
  };
  return (
    <div>
      <label htmlFor={label}>{label.replaceAll('_', ' ')}: </label>
      <input
        id={label}
        ref={inputRef}
        onChange={onChangeFunc}
        value={measurement[label] || ''}
        maxLength={maxLength}
        required
      />
    </div>
  );
}
