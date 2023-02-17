/*question 1*/
let johnHolmes = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(johnHolmes)

/*question 2*/
let  motherTeresa = "Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."
console.log(motherTeresa)

/*question 3*/
console.log(10 ==='10')

/*question 4*/
console.log(10== parseFloat('9.8'))
console.log(Math.ceil(parseFloat('9.8'))==10)

/*question 5*/
let py = 'python'
let ja ='jargon'
console.log(ja.search(/on/gi)) 
console.log(py.search(/on/gi)) 

/*question 6*/
let course = 'I hope this course is not full of jargon.'
console.log(course.search(/jargon/))

/*question 7*/
const rdmNum = Math.random()
const rdmBtw0_100 = rdmNum * 101 
const rdmBtw0_100ToFloor = Math.floor(rdmBtw0_100)
console.log( rdmBtw0_100ToFloor );;

/*question 8*/
const rdmBtw50_100 = rdmNum * 51 + 50
const rdmBtw50_100ToFloor = Math.floor(rdmBtw50_100)
console.log( rdmBtw50_100ToFloor );

/*question 9*/
const rdmBtw0_255 = rdmNum * 256 
const rdmBtw0_255ToFloor = Math.floor(rdmBtw0_255)
console.log( rdmBtw0_255ToFloor );

/*question 10*/
let jav ='JavaScript'
const rdmJav = rdmNum * jav.length
const rdmJavToFloor = Math.floor(rdmJav)
console.log(rdmJavToFloor);;
console.log(jav[rdmJavToFloor]);;;;;;;;

/*question 11*/
const ptn = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125 '
console.log(ptn)

/*question 12*/
let bcs = 'You cannot end a sentence with because because because is a conjunction'
console.log(bcs.substr(31,23))