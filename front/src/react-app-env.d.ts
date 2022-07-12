/// <reference types="react-scripts" />

declare interface IMeasurement {
  date_time: string;
  reactor_id: number;
  biology_id: number;
  experiment_name: string;
  algea_type: string;
  growing_type: string;
  dry_weight: number;
  nitrogen: number;
  glucose: number;
  protein: number;
  chlorophyl: number;
  phosphorus: number;
  microscope_observation: string;
  notes: string | null;
}

declare type MeasurementNumKeys =
  | 'reactor_id'
  | 'biology_id'
  | 'dry_weight'
  | 'nitrogen'
  | 'glucose'
  | 'protein'
  | 'chlorophyl'
  | 'phosphorus';

declare type MeasurementStrKeys = 'experiment_name' | 'notes';

declare type MeasurementOptionsKeys =
  | 'algea_type'
  | 'growing_type'
  | 'microscope_observation';

declare interface IMeasurementContext {
  measurement: IMeasurement;
  updateMeasurement: (part: QueryPart, value: string | number) => void;
}
