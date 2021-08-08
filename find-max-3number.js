function maxNumber(num1, num2, num3) {
    let max = num1;

    try {

        switch (true) {

            case num1 > num2 && num1 > num3:
                max = num1;
                break;

            case num2 > num1 && num2 > num3:
                max = num2;
                break;


            default:
                max = num3;


        }

        console.log('max:', max);

    } catch (error) {

        console.log('Give the correct input.')

    }




}

maxNumber(4, 4, 8);