
function stringReduce(str) {
  if (!str) return 'Empty String';
  
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      res = res + '' + str[i];
    }else{
      i++;
    }
  }

  return res ? res : 'Empty String'
}

console.log(stringReduce('aaabbbcccd'));
