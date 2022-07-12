import React, { useRef, useState } from 'react';
import {
  updateMeasurementNum,
  updateMeasurementOption,
  updateMeasurementStr,
} from '../helpers/updateMeasurement';

export default function InsertChooseId({
  label,
  idObj,
  measurement,
  setMeasurement,
}: {
  label: 'reactor_id' | 'biology_id';
  idObj: { [key: string]: string };
  maxLength?: number;
  measurement: IMeasurement;
  setMeasurement: React.Dispatch<React.SetStateAction<IMeasurement>>;
}) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const onSelectFunc = () => {
    const value = Number(selectRef.current?.value || 0);
    updateMeasurementNum(setMeasurement, label, value);
  };

  const optionsElems = Object.keys(idObj).map((reactor_id) => (
    <option key={reactor_id} value={reactor_id} label={idObj[reactor_id]} />
  ));

  return (
    <div>
      <label htmlFor={label}>{label.replaceAll('_', ' ')}: </label>
      <select
        id={label}
        value={measurement[label]}
        onChange={onSelectFunc}
        placeholder={`Select ${label}`}
        required
        ref={selectRef}
      >
        <option value='' label={`-- Choose ${label} --`} />
        {optionsElems}
      </select>
    </div>
  );
}
