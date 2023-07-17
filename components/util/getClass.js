export default function getSize(size){
  const listSize = ["medium","large","xlarge"]
  if (listSize.indexOf(size) >=0) {
    return `bni-button-${size}`;
  }
  return 'bni-button-medium';
}


