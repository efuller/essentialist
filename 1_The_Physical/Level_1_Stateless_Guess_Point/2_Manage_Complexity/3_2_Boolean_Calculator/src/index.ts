// @ts-ignore
export const booleanCalculator = (text: string) => {
  if (text.includes('(') && text.includes(')')) {
    const test2 = text.split(/[()]+/);
    const filtered = test2.filter((item) => !!item);

    console.log('FILTERED', filtered);
    // @ts-ignore
    const result = filtered.map((item) => {
      return booleanCalculator(item);
    });

    return result[0] && result[1];
  }

  if (text.includes('AND') && text.includes('OR')) {
    const test = text.split(' AND ');
    // @ts-ignore
    const result = test.map((item) => {
      return booleanCalculator(item);
    });
    return (result[0] || result[1]);
  }

  if (text.includes('NOT')) {
    if (text.includes('FALSE')) {
      return true;
    } else {
      return false
    }
  }

  if (text.includes('AND')) {
    if (text.includes('FALSE')) {
      return false;
    } else {
      return true;
    }
  }

  if (text.includes('OR')) {
    if (text.includes('TRUE')) {
      return true;
    } else {
      return false;
    }
  }

  return text === 'TRUE'
}
