let personne = 'Employee'
let authorization; 

switch(personne){
    case 'Employee':
        authorization = 'Access to Dietary Services';
        break;
    case 'Enrolled Member':
        authorization = 'Access to "Dietary Services" and one-on-one interaction with a dietician';
        break;
    case 'Subscriber':
        authorization = ' Partial access to facilitate Dietary Services only';
        break;
    default:
        authorization = 'You need to enroll or at least subscribe first to avail this facility'
 }

console.log('Authorization', authorization)