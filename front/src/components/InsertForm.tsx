import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InsertChooseId from './InsertChooseId';
import InsertDatetime from './InsertDatetime';
import InsertNumberInput from './InsertNumberInput';
import InsertOptions from './InsertOptions';
import InsertTextInput from './InsertTextInput';

import AWN from 'awesome-notifications';
let notifier = new AWN({});

export default function InsertForm() {
  const emptyMeasurement = {
    date_time: '',
    reactor_id: 0,
    biology_id: 0,
    experiment_name: '',
    algea_type: '',
    growing_type: '',
    dry_weight: 0,
    nitrogen: 0,
    glucose: 0,
    protein: 0,
    chlorophyl: 0,
    phosphorus: 0,
    microscope_observation: '',
    notes: '',
  };
  const [measurement, setMeasurement] =
    useState<IMeasurement>(emptyMeasurement);
  const [reactorsObj, setReactorsObj] = useState<{ [key: string]: string }>({});
  const [biologyObj, setBiologyObj] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    (async () => {
      try {
        const reactorsRes = await axios.get('http://localhost:8081/id/reactor');
        const biologyRes = await axios.get('http://localhost:8081/id/biology');
        setReactorsObj(reactorsRes.data);
        setBiologyObj(biologyRes.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSubmitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post('http://localhost:8081/insert/', measurement);
    setMeasurement(emptyMeasurement);
    notifier.success('Measurement inserted successfully.');
  };

  return (
    <form onSubmit={onSubmitFunc}>
      <InsertDatetime
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertChooseId
        label='reactor_id'
        idObj={reactorsObj}
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertChooseId
        label='biology_id'
        idObj={biologyObj}
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertTextInput
        label='experiment_name'
        maxLength={30}
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertOptions
        label='algea_type'
        options={['Cp utex 25', 'Cp SAG 211/7a', 'other']}
        maxLength={20}
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertOptions
        label='growing_type'
        options={['Mixotrophy', 'Heterotrophy', 'other']}
        maxLength={15}
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertNumberInput
        label='dry_weight'
        UnitOfMeasure='g/L'
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertNumberInput
        label='nitrogen'
        UnitOfMeasure='mg/L'
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertNumberInput
        label='glucose'
        UnitOfMeasure='g/L'
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertNumberInput
        label='protein'
        UnitOfMeasure='%'
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertNumberInput
        label='chlorophyl'
        UnitOfMeasure='µg/ml'
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertNumberInput
        label='phosphorus'
        UnitOfMeasure='mg/L'
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertOptions
        label='microscope_observation'
        options={['Contaminated', 'Not contaminated', 'other']}
        maxLength={25}
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <InsertTextInput
        label='notes'
        maxLength={200}
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <button
        type='submit'
        // onClick={(e) => {
        //   e.preventDefault();
        //   console.log(measurement);
        //   setMeasurement(emptyMeasurement);
        // }}
      >
        submit
      </button>
    </form>
  );
}
