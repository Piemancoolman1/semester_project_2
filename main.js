console.log("hello")
var searchStr 
console.log(searchStr)
document.querySelector("#searchPage").style.display = "block"
document.querySelector("#infoPage").style.display = "none"
function inputFunction() {
    searchStr = document.getElementById('searchStr').value
    document.querySelector("#searchPage").style.display = "none"
    document.querySelector("#infoPage").style.display = "block"
    const searchStrArray = searchStr.split(" ")
    for (const word of searchStrArray) {
        if (word === "Info") {
            document.getElementById("department").innerHTML = "Academics";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor";
            document.getElementById("people").innerHTML = "Chris Spicer Brian McFarland Jen Dolphin";
            document.getElementById("phone").innerHTML = "5103 5388 5274";
        }
    }
}