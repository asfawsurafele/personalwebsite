const courseList = [{
        code: "1620",
        class: "Web Fundamentals Technologies"
    },
    {
        code: "1420",
        class: "System Administration"
    },
    {
        code: "1630",
        class: "Database Systems"
    },
];

let usercode = prompt("Enter code to find class:");

while (usercode.length != 4 || (isNaN(Number(usercode))))
    console.log(code = prompt("Invalid input:"));

// var arrayLength = courseList.length;
// for (var i = 0; i < arrayLength; i++) {
courseList.forEach((element) => {
    var x = (element.code)
    if (usercode == x){
        if (usercode == 1620)
        console.log('Yes I am taking the course: ACIT 1620 - Web Fundamental Technologies');
    }
    else if (usercode == 1420){
        console.log('Yes I am taking the course: ACIT 1420 - System Administration');

    }
    else if (usercode == 1630){
        console.log('Yes I am taking the course: ACIT 1630 - Database Systems')
    }
    else 
 
    }
    });
// }



// do {
//     code = prompt("Enter code to find class:");
// } while (user_input.length = 4 && !isNaN(user_input))
//     if (user_input = "1620" || "1420" || "1630")