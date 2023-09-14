//  Chp # ARRAYS

// Q # 1
var studentname = [""];
console.log(studentname); 
 // Q # 2
var studentdata = {
    studentname: []
};
console.log(studentdata);

 // Q # 3
var stringsarr = ["Ali" , "Ahmed" , "Aliyan"];
console.log(stringsarr);

 // Q # 4
var Numberarr = ["12" , "20" , "30"]
console.log(Numberarr);

 // Q # 5
var booleanarry = ["Ture" , "False"];
console.log(booleanarry);

 // Q # 6
var mixedarry = ["Ali", "Ahmed" , "20", "30" , "ture" , "false"];
console.log(mixedarry);

 // Q # 7
var educationqulification = ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.Phil." , "PhD"]
document.write(educationqulification);

 // Q # 8
const studentNames = ["Micheal", "John", "Tony"];
const studentScores = [420, 380, 450];

function calculatePercentage(score, totalMarks) {
    return (score / totalMarks) * 100;
}


for (let i = 0; i < studentNames.length; i++) {
    const studentName = studentNames[i];
    const studentScore = studentScores[i];
    const totalMarks = 500; // Total marks for each student

    const percentage = calculatePercentage(studentScore, totalMarks);

    console.log(`${studentName}: Scored ${studentScore} out of ${totalMarks} (Percentage: ${percentage}%)`);
}

// Q # 9
var colorName = ["Red" , "Green" , "Blue" , "Yellow" , "Orange" , "Purple"];

function displayArray() {
    document.getElementById("arrayOutput").textContent = colorName.join(",");
}

function addcolortobegining() {
    const color = prompt("Enter a color to add to the begining:");
    colorName.unshift(color);
    consle.log(colorname);
}

function addtwocolortobegining() {
    const color1 = prompt ("Enter the first color to add to the begining:");
    const color2 = prompt ("Enter the second color to add to the begining:");
    colorName.unshift(color2, color1);
    displayArray();
}

function deletfirstcolor(){
    colorName.shift();
    displayArray();
}

function deletlastcolor(){
    colorName.pop();
    displayArray();
}

function addcoloratposition(){
    const position = parseInt(prompt("Enter the position (index) to add the color:"))
    const color = prompt("Enter the color name:");
    if (!isNaN(position) && position >= 0 && position <= colorNames.length){
        colorName.splice(position, 0 , color);
        displayArray();
    }else {
        alert("Invalid Position. color not added.")
    }
}

function deletcoloratposition(){
    const position = parseInt(prompt("Enter the postion (index) to start deleting colors:"));
    const count = parseInt(prompt("Enter the number of colors to delet"));
    if (!isNaN(position) && !isNaN(count) && position >= 0 && count >=0 && position + count <= colorName.length) {
        colorName.splice(position, count);
        displayArray();
    } else{
        alert("Invalid postion or count. colors not deleted.");
    }
}


 // Q # 10
var scoreofstudent = ["320" , "230" , "480" , "120"]
console.log(scoreofstudent);

var oderedscoreofstudent = ["120" , "230" , "320" , "480"];
console.log(oderedscoreofstudent);


// Q # 11
var cities = ["karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
var selectedcities = [""];
selectedcities.push(cities[2], cities[3]);
console.log("selected cities" , selectedcities);


// Q # 12
var arr = ["This" , "is" , "my" , "cat"];
var convert = arr.join(arr);
console.log(arr);

var string = ("This is my cat");
console.log(string);


// Q # 13
var arr = ["Devices"];
console.log(arr)
var string = ("Keyboard , mouse , printer , moniter");
console.log(string);

const fifoArray = [];

fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("printer");
fifoArray.push("moniter");


const firstValue = fifoArray.shift();
const secondValue = fifoArray.shift();
const thirdValue = fifoArray.shift();

console.log("Out:\n", firstValue);
console.log("Out:\n", secondValue);
console.log("Out:\n", thirdValue);


 // Q # 14
var arr = ["Devices"];
console.log(arr)
var string = ("Keyboard , mouse , printer , moniter");
console.log(string);

const lifoArray = [];

lifoArray.push("keyboard");
lifoArray.push("mouse");
lifoArray.push("printer");
lifoArray.push("moniter");

const lastValue = lifoArray.pop();
const secondLastValue = lifoArray.pop();
const thirdLastValue = lifoArray.pop();
const fourthLastValue = lifoArray.pop();

console.log("Last Value:", lastValue);
console.log("Second Last Value:", secondLastValue);
console.log("Third Last Value:", thirdLastValue);
console.log("fourth Last Value:", fourthLastValue);

// Q # 15
const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

        // Generate the dropdown/select menu
        document.write('<select id="manufacturerSelect">');
        for (let i = 0; i < manufacturers.length; i++) {
            document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
        }
        document.write('</select>');


                               //*********completed************