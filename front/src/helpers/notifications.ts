import { toast } from 'react-toastify';

export const success = (str: string) => {
  toast.success(str, {
    // position: 'bottom-right',
    // autoClose: 3000,
    // hideProgressBar: false,
    // closeOnClick: true,
    // pauseOnHover: true,
    // draggable: true,
    // progress: undefined,
  });
};
