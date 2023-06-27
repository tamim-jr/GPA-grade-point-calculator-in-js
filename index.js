var input = prompt("Enter your marks here: ");

if (input >= 80 && input <= 100) {
    document.write("Congratulations! You got A+ Grade");
}
else if (input >= 70 && input <= 79) {
    document.write("Congratulations! You got A Grade");
}
else if (input >= 60 && input <= 69) {
    document.write("You got A- Grade");
}
else if (input >= 50 && input <= 59) {
    document.write("You got B Grade");
}
else if (input >= 40 && input <= 49) {
    document.write("You got B- Grade");
}
else if (input >= 33 && input <= 39) {
    document.write("You got C Grade");
}
else if (input >= 1 && input <= 32){
    document.write("You are failed!");
}
else if (input >= 101){ 
        document.write("Please put the currect value");
}
else  
    document.write("Please put the currect value");

