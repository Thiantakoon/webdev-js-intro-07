// Prevent us from attempting to use variables
// that are not declared
"use strict"

function farewell(Goodbye) {
    console.log( 'Goodbye,' +'!');
}
const farewell = (Goodbye)=> {
    return 'Goodbye,'+ '!';
};
function farewell(name='Friend') {
    console.log( 'Goodbye,' +name +'!');
    farewell(John);
}
//