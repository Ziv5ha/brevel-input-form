import React, { useRef } from 'react';
import { getMoment } from '../helpers/moment';
import { updateMeasurementDate } from '../helpers/updateMeasurement';

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
    <div>
      <label htmlFor='datetime'>Date and time: </label>
      <input
        id='datetime'
        type='datetime-local'
        ref={datetimeRef}
        onChange={onChangeFunc}
      />
      <button type='button' onClick={btnOnClick}>
        Now
      </button>
      {measurement.date_time}
    </div>
  );
}
