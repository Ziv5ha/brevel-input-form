import { Request } from 'express';

declare interface InsertRequest extends Request {
  body: {
    Date: string;
    Reactor_ID: number;
    Biology_ID: number;
    Experiment_Name: string;
    Algea_Type: string;
    Dry_Weight: number;
    Nitrogen: number;
    Glucose: number;
    Protein: number;
    Chlorophyl: number;
    phosphorus: number;
    Microscope_Observation: string;
    Notes: string | null;
  };
}
