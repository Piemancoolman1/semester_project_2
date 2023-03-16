console.log("hello")
var searchStr = 'Info is the best and we all love it'//document.getElementById('searchStr').value
console.log(searchStr)
const searchStrArray = searchStr.split(" ")
for (const word of searchStrArray) {
    console.log(word)
    if (word === "Info") {
        document.getElementById("department").innerHTML = "Academics";
        document.getElementById("location").innerHTML = "Lewis Hall First Floor";
        document.getElementById("people").innerHTML = "Chris Spicer Brian McFarland Jen Dolphin";
        document.getElementById("phone").innerHTML = "5103 5388 5274";
    }
}