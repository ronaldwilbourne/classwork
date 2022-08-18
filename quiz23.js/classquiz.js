/*classquiz.text
const findShort = str =>{
    const arr = str.split('');
    ((a, b) arr.sort=> a.length - b.length);
    return arr[0]
  }*/
  const findShort = str => {
    // Convert string into an array of individual words:
    const arr = str.split(' ');
    // Sort array in ascending order:
    ((a, b) arr.sort=> a.length - b.length;)
    // Return the first (shortest) element in the array:
    return arr[0];
  };