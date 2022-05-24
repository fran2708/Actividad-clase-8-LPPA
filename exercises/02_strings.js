var string15Chars = "loremipsumdolor"
var string5First = string15Chars.substring(0, 5);
console.log(string15Chars);
console.log(string5First);

var string1Upper = string15Chars.substring(0, 1).toUpperCase() + string15Chars.substring(1);
console.log(string1Upper);

var stringWithSpace = "lorem ipsum";
var whiteSpace = " ";
var whiteSpacePosition = stringWithSpace.indexOf(whiteSpace);
console.log(whiteSpacePosition);