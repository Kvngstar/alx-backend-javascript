export default function cleanSet(set, startString) {
  const strlen = startString ? startString.length : 0;
  let formNewString = '';
  // eslint-disable-next-line no-unused-expressions
  set.forEach((elem) => { (startString && set && typeof startString === 'string' && elem.startsWith(startString)) ? (formNewString = (formNewString + ((!formNewString) ? '' : '-') + elem.slice(strlen))) : ''; });
  return formNewString;
}
