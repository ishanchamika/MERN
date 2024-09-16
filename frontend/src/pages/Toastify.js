import { toast } from 'react-toastify';

// Toastify success notification
export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: 'top-center',
    autoClose: 2000,
  });
};

// Toastify error notification
export const handleErr = (msg) => {
  toast.error(msg, {
    position: 'top-center',
    autoClose: 2000,
  });
};
