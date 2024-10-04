import ClassRoom from './0-classroom.js';
import initializeRooms from './1-make_classrooms.js';
import Currency from './3-currency.js';

const room = new ClassRoom(10);
console.log(room._maxStudentsSize);
console.log(initializeRooms());
const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());
