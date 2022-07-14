import React, { useRef } from 'react';
import { getMoment } from '../helpers/moment';
import { updateMeasurementDate } from '../helpers/updateMeasurement';
import '../styles/datetime.css';

export default function InsertDatetime({
  measurement,
  setMeasurement,
}: {
  measurement: IMeasurement;
  setMeasurement: React.Dispatch<React.SetStateAction<IMeasurement>>;
}) {
  const datetimeRef = useRef<HTMLInputElement>(null);
  const onChangeFunc = () => {
    const dateSrting = getMoment(datetimeRef.current?.value);
    updateMeasurementDate(setMeasurement, dateSrting);
  };

  const btnOnClick = () => {
    const dateSrting = getMoment();
    updateMeasurementDate(setMeasurement, dateSrting);
  };
  return (
    <div className='input-container'>
      <label htmlFor='datetime'>Date and time: </label>
      <span className='output'>{measurement.date_time}</span>
      <div className='time-container'>
        <input
          className='date-input'
          id='datetime'
          type='datetime-local'
          ref={datetimeRef}
          onChange={onChangeFunc}
        />
        <button
          className='date-btn date-input'
          type='button'
          onClick={btnOnClick}
        >
          Now
        </button>
      </div>
    </div>
  );
}
