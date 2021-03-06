import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { notifySuccess, notifyError } from '../helpers/notifications';
import InsertChooseId from './InsertChooseId';
import InsertDatetime from './InsertDatetime';
import InsertNumberInput from './InsertNumberInput';
import InsertOptions from './InsertOptions';
import InsertTextInput from './InsertTextInput';
import '../styles/form.css';
import Disconected from './Disconnected';

export default function InsertForm() {
  const emptyMeasurement = {
    date_time: '',
    reactor_id: 0,
    biology_id: 0,
    experiment_name: '',
    algea_type: '',
    growing_type: '',
    dry_weight: 0.0,
    nitrogen: 0.0,
    glucose: 0.0,
    protein: 0.0,
    chlorophyl: 0.0,
    phosphorus: 0.0,
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
        // const reactorsRes = await axios.get('http://localhost:8081/id/reactor');
        // const biologyRes = await axios.get('http://localhost:8081/id/biology');
        const reactorsRes = await axios.get('./id/reactor');
        const biologyRes = await axios.get('./id/biology');
        setReactorsObj(reactorsRes.data);
        setBiologyObj(biologyRes.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSubmitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // await axios.post('http://localhost:8081/insert/', measurement);
      await axios.post('./insert/', measurement);
      setMeasurement(emptyMeasurement);
      notifySuccess('Measurement inserted successfully.');
    } catch (error) {
      notifyError('Failed to insert Measurement.');
    }
  };

  if (
    Object.keys(reactorsObj).length === 0 ||
    Object.keys(biologyObj).length === 0
  ) {
    return <Disconected />;
  } else {
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
          UnitOfMeasure='??g/ml'
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
        <button type='submit' className='submit-btn'>
          submit
        </button>
      </form>
    );
  }
}
