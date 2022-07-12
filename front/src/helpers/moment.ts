import moment from 'moment';

export const getMoment = (time?: string | undefined) => {
  return time
    ? moment(time).format('YYYY-MM-DD HH:mm')
    : moment().format('YYYY-MM-DD HH:mm');
};
