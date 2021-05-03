/* {} brackets are 'object literal', but its empty, lets call the empty object 'country' and we will add some data to it, below. */


/*adding 5 properties to the 'object literal', key- value pairs associated to the 'object' */

let country = {
/*adding data to the 5 property. A value can be of any data type, boolean, function, string, integer and objects */

  name: "england",
  population: 4.224,
  sea: true,
  islands: 1000,
  rivers: {
    amount: 198,
    fish: "yes",
    boats: "yes",
    swimming: "no"
  } 


};

country.name = "ireland";  /*usng dot notation, this is updating the object value*/
console.log(country.name); /*using dot notation to get the objects value*/

console.log (country.rivers.amount); /*using dot natation twice to get inner object */
