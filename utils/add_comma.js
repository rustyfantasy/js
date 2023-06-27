export default function addComma(value) {
  let v;
  if(typeof value !== 'string') v = String(value);
  else v = value;

  // return v.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','); //safari 에서 지원 안함
  return v.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
