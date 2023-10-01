const reverseString = (str : string) : string => {
  let newStr: string = ""
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr;
};

reverseString('My name is');