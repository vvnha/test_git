const list1 = ['aaa', 'aabc', 'zyz'];
const list2 = ['bbb', 'cccc', 'zyx'];

const check = (str1, str2) => {
  const firstChars = [];
  for (let index = 0; index < str1.length; index++) {
    const char = str1[index];
    if (firstChars.findIndex((value) => value === char) === -1) {
      firstChars.push(char);
    }
  }

  const secondChars = [];
  for (let index = 0; index < str2.length; index++) {
    const char = str2[index];
    if (secondChars.findIndex((value) => value === char) === -1) {
      secondChars.push(char);
    }
  }

  for (let i = 0; i < firstChars.length; i++) {
    for (let j = 0; j < secondChars.length; j++) {
      const firstChar = firstChars[i];
      const secondChar = secondChars[j];
      var regex1 = new RegExp(firstChar, 'g');
      var regex2 = new RegExp(secondChar, 'g');
      const newText1 = str1.toString().replace(regex1, secondChar);
      const newText2 = str2.toString().replace(regex2, firstChar);

      console.log(newText1, str1, newText2, str2);

      if (str2 === newText1 || str1 === newText2) {
        return true;
      }
    }
  }
  return false;
};

const checkAll = (strList1, strList2) => {
  const result = [];
  for (let i = 0; i < strList1.length; i++) {
    const checkStr = check(strList1[i], strList2[i]);

    if (checkStr === true) {
      result.push('YES');
    } else {
      result.push('NO');
    }
  }

  return result;
};

console.log(checkAll(list1, list2));
