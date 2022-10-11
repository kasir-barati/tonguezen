export function isNil(param: unknown) {
  if (param === undefined || param === null) {
    return true;
  }

  return false;
}

export function isEmptyArray(param: unknown[]) {
  return param.length === 0;
}
