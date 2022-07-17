import React, { useRef } from 'react';
import displayText from '../helpers/displaytext';
import { updateMeasurementStr } from '../helpers/updateMeasurement';
import '../styles/textInput.css';

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
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const onChangeFunc = () => {
    const value = inputRef.current?.value || '';
    updateMeasurementStr(setMeasurement, label, maxLength, value);
  };
  return (
    <div className='input-container'>
      <label htmlFor={label}>{displayText(label)}: </label>
      <textarea
        className='text-input'
        id={label}
        ref={inputRef}
        onChange={onChangeFunc}
        value={measurement[label] || ''}
        rows={Math.ceil((measurement[label]?.length || 1) / 30)}
        maxLength={maxLength}
        required={label === 'experiment_name'}
      />
    </div>
  );
}
