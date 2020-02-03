let moonPhase = 'full';

switch (moonPhase){
    case 'full':
        console.log('Howl!');
        break;
    case 'mostly full':
        console.log('Arms and legs are getting hairier');
        break;
    case 'mostly new':
        console.log('Back on two feet');
        break;
    default:
        console.log('Invalid moon phase');
    break;
}

// Log the day of the week
var my_day = new Date();

switch (my_day.getDay()) 
   {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case 5:
        console.log("Today is Friday");
        break;

    case 6:
        console.log("Today is Saturday");
        break;

    default:
        console.log("value of i is not equal to any given days");
        break;

}