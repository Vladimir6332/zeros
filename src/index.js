module.exports = function zeros(expression) {
  let itemsArr = expression.split('*');  
  let parametrsCount = {
    '2': 0,
    '5': 0,    
  };
  let arrParametrs = [2, 5];
   

  const countParametrs = (item, param, even = 0) => {
    param.forEach((key) => {
      let counter = 0;
      let k;
      for (let i = 1; (k = Math.pow(key, i)) <= item; i++) {
        if (even === 2) {
          if (key % 2 === 0)
            counter += (item - (item % k)) / k;
          else
            counter += (item - (item % (k * 2))) / (k * 2);
        }
        else  if (even === 1) {
          if (key % 2 !== 0)
          counter += Math.round(item/(k * 2));          
        }
        else {
          counter += (item - (item % k)) / k;
        };
      };
      parametrsCount[String(key)] += counter;
    });
  };


  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i].indexOf('!!') > 0) {
      let item = +itemsArr[i].slice(0, -2);
      if (item % 2 === 0) {
        countParametrs(item, arrParametrs, 2);
      }
      else {
        countParametrs(item, arrParametrs, 1);
      };
    }
    else {
      let item = +itemsArr[i].slice(0, -1);
      countParametrs(item, arrParametrs);
    }

  };

  if (parametrsCount['2'] > parametrsCount['5']) return parametrsCount['5'];
  return parametrsCount['2'];
}
