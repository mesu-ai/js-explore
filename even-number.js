

function oddNumber(lower, higher) {

    for (lower; lower <= higher; lower++) {

        if (lower % 2 == 0) {
            console.log(lower);

        }

    }
}

var lower = 50;
var higher = 60;

oddNumber(lower, higher);
