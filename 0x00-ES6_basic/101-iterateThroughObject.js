export default function iterateThroughObject(reportWithIterator) {
  const iteratorLength = reportWithIterator.length;
  let stringConstruct = '';
  let counter = 0;
  //eslint-disable
  for (const value of reportWithIterator) {
    if (counter === iteratorLength - 1) {
      stringConstruct = stringConstruct + value;
    } else {
      stringConstruct = stringConstruct + value + ' | ';
    }

    counter += 1;
  }

  return stringConstruct;
}
