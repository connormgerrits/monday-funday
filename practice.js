/*
function grader(numGrade) {
    if (numGrade >= 0 && numGrade < 60) {
        return "F";
    }
    else if (numGrade >= 60 && numGrade < 70) {
        return "D";
    }
    else if (numGrade >= 70 && numGrade < 80) {
        return "C";
    }
    else if (numGrade >= 80 && numGrade < 90) {
        return "B";
    }
    else if (numGrade >= 90 && numGrade <= 100) {
        return "A";
    }
    else {
        return "What kind of grading system are you using?";
    }
}

for (var i = 60; i <= 100; i++) {
    console.log("For " + i + " your grade is: " + grader(i));
}
*/

let myFavs = ["Episode III", "Episode VI", "Episode II", "Episode V", "Episode IV", "Episode I"];
var nth;
for (var i = 0; i < myFavs.length; i++) {
    if (i == 0) { nth = "all-time"; }
    else if (i == 1) { nth = "second"; }
    else if (i == 2) { nth = "third"; }
    else if (i == 3) { nth = "fourth"; }
    else if (i == 4) { nth = "fifth"; }
    else if (i == 5) { nth = "sixth"; }
    console.log(myFavs[i] + " is my " + nth + " favorite Star Wars movie.");
}
