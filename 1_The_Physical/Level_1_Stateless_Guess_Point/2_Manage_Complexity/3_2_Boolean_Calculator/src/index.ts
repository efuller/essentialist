export const booleanCalculator = (text: string) => {
  if (text === "TRUE") {
    return true;
  }

  if (text === "NOT FALSE") {
    return true;
  }

  if (text.includes(' AND ')) {
    let result = true;
    const value = text.split(' AND ');
    value.forEach((v) => {
      result = v === 'TRUE';
    })
    return result;
  }


  if (text.includes(' OR ')) {
    let result = false;
    const value = text.split(' OR ');
    value.forEach((v) => {
      if (v === 'TRUE') {
        result = true;
      }
    })
    return result;
  }
  return false;
}
