import { toast } from 'react-toastify';

export const notifySuccess = (str: string) => {
  toast.success(str);
};
export const notifyError = (str: string) => {
  toast.error(str);
};
