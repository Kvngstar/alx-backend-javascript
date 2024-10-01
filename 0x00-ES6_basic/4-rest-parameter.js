export default function returnHowManyArguments() {
  let i
  
  for (; i < arguments.length; i++){}
  
  return i;
}