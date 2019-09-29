let year = parseInt(prompt("Enter a year"));
if  (year % 4 ==0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year +  " is Leap year");
        } else {
            alert(year +  " is not Leap year");
        }
    } else {
        alert(year +  " is Leap year");
    }
}else {
    alert(year + " is not Leap year");
}
