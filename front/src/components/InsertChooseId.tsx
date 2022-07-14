import React, { useRef } from 'react';
import { updateMeasurementNum } from '../helpers/updateMeasurement';
import Select from 'react-select';

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

  const optionsArr = Object.keys(idObj).map((reactor_id) => ({
    value: reactor_id,
    label: idObj[reactor_id],
  }));

  return (
    <div className='input-container'>
      <label htmlFor={label}>{label.replaceAll('_', ' ')}: </label>
      <div className='select-container'>
        <Select
          styles={colourStyles}
          options={optionsArr}
          onChange={(e) => {
            const value = Number(e?.value || 0);
            updateMeasurementNum(setMeasurement, label, value);
          }}
        />
      </div>
    </div>
  );
}
