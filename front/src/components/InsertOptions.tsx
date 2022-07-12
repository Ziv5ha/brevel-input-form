import React, { useRef, useState } from 'react';
import {
  updateMeasurementOption,
  updateMeasurementStr,
} from '../helpers/updateMeasurement';

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
  const selectRef = useRef<HTMLSelectElement>(null);
  const otherRef = useRef<HTMLInputElement>(null);

  const onSelectFunc = () => {
    const value = selectRef.current?.value || '';
    setSelected(value);
    updateMeasurementOption(setMeasurement, label, value, maxLength);
  };

  // 'other' functions
  const onChangeOther = () => {
    if (maxLength) {
      const value = otherRef.current?.value || '';
      updateMeasurementStr(setMeasurement, label, maxLength, value);
    }
  };

  const optionsElems = options.map((option) => (
    <option key={option} value={option} label={option} />
  ));

  return (
    <div>
      <label htmlFor={label}>{label.replaceAll('_', ' ')}: </label>
      <select
        id={label}
        value={selected}
        onChange={onSelectFunc}
        placeholder={`Select ${label}`}
        required
        ref={selectRef}
      >
        <option value='' label={`-- Choose ${label} --`} />
        {optionsElems}
      </select>
      {selected === 'other' ? (
        <input
          ref={otherRef}
          onChange={onChangeOther}
          value={measurement[label]}
        />
      ) : (
        ''
      )}
    </div>
  );
}
