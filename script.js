
let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
// for loop 
for (let i = 0; i < 20; i++) {
    cconsole.log(a+i);  
}
// for-in loop
// first we creeate object 
let obj = {
    name: "Jalal",
    role: "Programmer",
    company: "JalaliStar"
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}
// for-of loop
for (const c of "jalal") {
    console.log(c)
}
// while loop
let b=0;
while(b<7){
    console.log(b)
    b++;
}

// do-while loop 
let m=0;
do {
    console.log(b)
    m++;
}while (m<6);
console.log("this is a tutorial on loops");