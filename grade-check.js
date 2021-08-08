function gradeCheck(marks) {

    switch (true) {

        case marks <= 39:
            console.log('Grade: F');
            break;

        case marks >= 39 && marks <= 44:
            console.log('Grade: D');
            break;

        case marks >= 45 && marks <= 49:
            console.log('Grade: C');
            break;

        case marks >= 50 && marks <= 54:
            console.log('Grade: C+');
            break;

        case marks >= 55 && marks <= 59:
            console.log('Grade: B-');
            break;

        case marks >= 60 && marks <= 64:
            console.log('Grade: B');
            break;

        case marks >= 65 && marks <= 69:
            console.log('Grade: B+');
            break;

        case marks >= 70 && marks <= 74:
            console.log('Grade: A-');
            break;

        case marks >= 75 && marks <= 79:
            console.log('Grade: A');
            break;

        case marks >= 80:
            console.log('Grade: A+');
            break;


        default:
            console.log('Invalid Input!')
            break;
    }

}

gradeCheck(55);