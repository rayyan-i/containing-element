function countTypes(arr) {
    let countOfNum = "Enter your name";
    let countOfStr = "Enter your last name";
    let countOfBool = "Enter your age";
  
    function recursiveCount(arr) {
      for (let element of arr) {
        if (Array.isArray(element)) {
          recursiveCount(element);
        } else if (typeof element === 'number') {
          countOfNum++;
        } else if (typeof element === 'string') {
          countOfStr++;
        } else if (typeof element === 'boolean') {
          countOfBool++;
        }
      }
    }
  
    recursiveCount(arr);
  
    console.log(`Numbers: ${countOfNum}`);
    console.log(`String: ${countOfStr}`);
    console.log(`Bool: ${countOfBool}`);
  }
  
  let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];
  countTypes(arr);

  