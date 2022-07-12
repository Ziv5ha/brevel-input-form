export const updateMeasurementNum = (
  setMeasurement: (value: React.SetStateAction<IMeasurement>) => void,
  label: MeasurementNumKeys,
  value: number
) => {
  setMeasurement((prev) => {
    const newState = structuredClone(prev) as IMeasurement;
    newState[label] = value;
    return newState;
  });
};

export const updateMeasurementStr = (
  setMeasurement: (value: React.SetStateAction<IMeasurement>) => void,
  label: MeasurementStrKeys | MeasurementOptionsKeys,
  maxLength: number,
  value: string
) => {
  setMeasurement((prev) => {
    const newState = structuredClone(prev) as IMeasurement;
    if (value.length < maxLength) newState[label] = value;
    return newState;
  });
};

export const updateMeasurementOption = (
  setMeasurement: (value: React.SetStateAction<IMeasurement>) => void,
  label: MeasurementOptionsKeys,
  value: string,
  maxLength: number
) => {
  setMeasurement((prev) => {
    const newState = structuredClone(prev) as IMeasurement;
    if (value === 'other') newState[label] = '';
    else if (value.length < maxLength) newState[label] = value;
    return newState;
  });
};

export const updateMeasurementDate = (
  setMeasurement: (value: React.SetStateAction<IMeasurement>) => void,
  value: string
) => {
  setMeasurement((prev) => {
    const newState = structuredClone(prev) as IMeasurement;
    newState.date_time = value;
    return newState;
  });
};

// export const updateMeasurementId = (
//     setMeasurement: (value: React.SetStateAction<IMeasurement>) => void,
//     label: 'reactor_id' | 'biology_id',
//     value: string
//   ) => {
//     setMeasurement((prev) => {
//       const newState = structuredClone(prev) as IMeasurement;
//      newState[label] = value;
//       return newState;
//     });
//   };
