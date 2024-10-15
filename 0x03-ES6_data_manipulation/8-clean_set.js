export default function cleanSet(set, startString) {
  const strlen = startString.length;
  let formNewString = "";
  set.forEach((elem) => {(startString && elem.startsWith(startString)) ? (formNewString = (formNewString + ((!formNewString) ? "" : "-") + elem.slice(strlen))) : ""; });
  return formNewString;
}
