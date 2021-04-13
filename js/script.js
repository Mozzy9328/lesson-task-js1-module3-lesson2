// Q1

function greet(name= "Mustafa") {
    return `Hello ${name}!`;
}

greet();

// Q2

const header = document.querySelector("header")

header.innerHTML += reusableFunction("read", "Welcome");


// Q3

async function getFact() {
    try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results[8].text);
}
catch(error){
    header.innerHTML += `This is what happened ${error}`
}
finally{
    console.log("Whats your next step?")
}
}

getFact();