export default function iteratorCheck(object) {
  if (
    object === null
    || object === undefined
    || object === true
    || object === Number.isNaN
  ) {
    return false;
  }
  if (object[Symbol.iterator]) {
    return true;
  }
  return false;
}
