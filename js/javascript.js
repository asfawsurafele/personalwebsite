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

var a = false

let testobject = {
    code: "0",
    class: null
};
let copiedobject = testobject

let usercode = ""
do {
    usercode = prompt("Enter code to find class:");
}
while(usercode.length != 4 || (isNaN(Number(usercode))))

courseList.forEach((element) => {
    var x = (element.code)
    if (usercode == x){
        if (usercode == 1620){
        console.log('Yes I am taking the course: ACIT 1620 - Web Fundamental Technologies');
        a = true;
    }
        else if (usercode == 1420){
        console.log('Yes I am taking the course: ACIT 1420 - System Administration');
        a = true;

    }
        else if (usercode == 1630){
        console.log('Yes I am taking the course: ACIT 1630 - Database Systems');
        a = true;
    }   
    } 

   
});
if (a === false) {
    copiedobject.code = usercode;
    courseList.push(testobject);
}
console.log(courseList)
//  if (Number(usercode) !== 1620){
//         copiedobject.code = usercode;
//         courseList.push(testobject);
//     };
// if (Number(usercode) !== 1420){
//         copiedobject.code = usercode;
//         courseList.push(testobject);
//     };
// if (Number(usercode) !== 1630){
//         copiedobject.code = usercode;
//         courseList.push(testobject);
//     };
    // if (Number(usercode) != 1620 && 1420 && 1630){
    //     courseList.push(testobject);
    //     }

// console.log(courseList)




// do {
//     code = prompt("Enter code to find class:");
// } while (user_input.length = 4 && !isNaN(user_input))
//     if (user_input = "1620" || "1420" || "1630")