var output = document.getElementById("output");


document.getElementById("alert").onclick = function Alert() {
    alert("This is alert box")
}
// Alert()

document.getElementById("variableForString").onclick = function Variable() {
    var name = "Muhammad Bilal";
    output.innerHTML = name;
}

document.getElementById("variableForNumber").onclick = function VariableForNumber() {
    var name = 123456;
    output.innerHTML = name;
}

document.getElementById("variableNamesLegalIllegal").onclick = function () {
    output.innerHTML = "<li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li><li>I teach the camelCase naming convention. Why 'camelCase'? Because there is a hump or two(or three) in the middle if the name is formed by more than one word.A camelCase name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump.If you form a variable name with only one word, like response, there's no hump. It's a camel that's out of food. Please adopt the camelCase convention.It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.</li > "
}


function mathOperator() {
    var num1 = +prompt("Enter number 1")
    var num2 = +prompt("Enter number 2")

    console.log(num1 + num2)
}


document.getElementById("mathExpressions").onclick = function () {
    var num1 = +prompt("Enter num1")
    var num2 = +prompt("Enter num2")

    output.innerHTML = num1 + num2
}


var num = 0;


document.getElementById("unfamiliarOperators").onclick = function () {
    num++;
    output.innerHTML = num
}



var array = [
    {
        name: "",
        email: "",
        experience: [
            "1st",
            "2nd",
            "3rd",
            "4th",
            "5th",
            "6th",
            "7th",
        ]
    },
    {
        name: "",
        email: "",
        id: "",
    },
]