const displayText = (str: string): string => {
  return str === 'reactor_id'
    ? 'Reactor Name'
    : str === 'biology_id'
    ? 'Experimenter'
    : str === 'experiment_name'
    ? 'Experiment ID'
    : uppercaseFirstLetters(str);
};
const uppercaseFirstLetters = (str: string): string => {
  return str
    .split('_')
    .map((s) => s.replace(s[0], s[0].toUpperCase()))
    .join(' ');
};
export default displayText;
