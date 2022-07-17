import { Request } from 'express';

declare interface InsertRequest extends Request {
  body: {
    date_time: string;
    reactor_id: number;
    biology_id: number;
    experiment_name: string;
    algea_type: string;
    dry_weight: number;
    nitrogen: number;
    glucose: number;
    protein: number;
    chlorophyl: number;
    phosphorus: number;
    microscope_observation: string;
    notes: string | null;
  };
}
