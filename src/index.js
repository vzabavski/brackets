module.exports = function check(str, bracketsConfig) {

  let input = str;
  let fin= ''
  bracketsConfig = bracketsConfig.join().split('')
  bracketsConfig = bracketsConfig.map(a => a !== ',' ? fin += a : fin += '')
  bracketsConfig = fin.split('')
  fin = ''
  for(let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i] !== '|' && bracketsConfig[i] !== '7') {
      if (bracketsConfig[i]!== '8') {
        fin += bracketsConfig[i]
      }
      
      
    }
  }
  let stack = [];
  for(let bracket of input) {
    let bracketsIndex = fin.indexOf(bracket)

    if (bracketsIndex === -1){
      continue
    }

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
} 