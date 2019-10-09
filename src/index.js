module.exports = function zeros(expression) {
  let itemsArr = expression.split('*');
  let counterZeros = 0;
  let parametrsCount = {
    '2' : 0,
    '5' : 0,
    '10' :0,   
  };
  let arrParametrs = [2, 5];
  let arrParametrsEven = [2, 10];
  let arrParametrsOdd = [5];
  let number;

  const countParametrs = (item, param) => {
            param.forEach( (key) => {
                let counter = 0;
                let k;
                for (let i = 1; (k = Math.pow(key, i)) <= item; i++) {
                    counter += (item - (item % k)) / k;
                };
                parametrsCount[String(key)] += counter;
            });
        };
  


  
  
  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i].indexOf('!!') > 0) {
      let item = +itemsArr[i].slice(0, -2);
      if (item % 2 === 0) {
        countParametrs(item, arrParametrsEven);
      }
      else {
        countParametrs(item, arrParametrsOdd);
      };
    }    
    else {
        let item = +itemsArr[i].slice(0, -1);
        countParametrs(item, arrParametrs);
    }
    
  };

  if (parametrsCount['2'] > parametrsCount['5']) return parametrsCount['5'] + parametrsCount['10'];
  return parametrsCount['2'] + parametrsCount['10'];
}
