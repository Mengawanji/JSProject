// Task

// Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.

function isPositive(a) {
    try{
        if(a === 0) {
            throw new Error("Zero Error");
        } else if (a < 0) {
            throw new Error("Negative Error");
        } else {
            return "YES";
        }
    } catch (error) { 
        return `${error.message}`;
     }
}



//Exercise on RegEx

function regexVar(s) {

   const vowels = ["a", "e", "i", "o", "u"];

  if (!s || s.length === 0) return false;

  const firstChar = s[0];
  const lastChar = s[s.length - 1];

  let re = vowels.includes(firstChar) && firstChar === lastChar;
    
    return re;
}