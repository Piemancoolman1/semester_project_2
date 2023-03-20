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
        if (word === "Academics") {
            document.getElementById("department").innerHTML = "Academics";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor";
            document.getElementById("people").innerHTML = "Chris Spicer Brian McFarland Jen Dolphin";
            document.getElementById("phone").innerHTML = "5103 5388 5274";
        }
        if (word === "Academic Support Center ") {
            document.getElementById("department").innerHTML = "Academic Support Center ";
            document.getElementById("location").innerHTML = "Hickman-Johnson-Furrow";
            document.getElementById("people").innerHTML = "Regina Bade";
            document.getElementById("phone").innerHTML = "5166";
        }
        if (word === "Advising") {
            document.getElementById("department").innerHTML = "Advising";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 120";
            document.getElementById("people").innerHTML = "Beth Boettcher";
            document.getElementById("phone").innerHTML = "5034";
        }
        if (word === "Athletic Injuries") {
            document.getElementById("department").innerHTML = "Athletic Injuries";
            document.getElementById("location").innerHTML = "Rosen Verdoorn Sports Center";
            document.getElementById("people").innerHTML = "Katy Burford";
            document.getElementById("phone").innerHTML = "5314";
        }
        if (word === "Athletics") {
            document.getElementById("department").innerHTML = "Athletics";
            document.getElementById("location").innerHTML = "Hindman-Hobbs Center";
            document.getElementById("people").innerHTML = "Jim Sykes ";
            document.getElementById("phone").innerHTML = "5371";
        }
        if (word === "Bookstore") {
            document.getElementById("department").innerHTML = "Bookstore";
            document.getElementById("location").innerHTML = "Olsen Student Center, Lower Level ";
            document.getElementById("people").innerHTML = "Jodi Strohbeen";
            document.getElementById("phone").innerHTML = "5133";
        }
        if (word === "Campus Ministry") {
            document.getElementById("department").innerHTML = "Campus Ministry";
            document.getElementById("location").innerHTML = "Olsen Student Center, Lower Level";
            document.getElementById("people").innerHTML = "Andy Nelson";
            document.getElementById("phone").innerHTML = "5148";
        }
        if (word === "Campus Safety and Security") {
            document.getElementById("department").innerHTML = "Campus Safety and Security";
            document.getElementById("location").innerHTML = "Hickman-Johnson-Furrow First Floor Room 109";
            document.getElementById("people").innerHTML = "Brett Lyon";
            document.getElementById("phone").innerHTML = "5234";
        }
        if (word === "Career Services") {
            document.getElementById("department").innerHTML = "Career Services";
            document.getElementById("location").innerHTML = "Krone Center";
            document.getElementById("people").innerHTML = "Stacie Hays";
            document.getElementById("phone").innerHTML = "5032";
        }
        if (word === "Disabilities Services") {
            document.getElementById("department").innerHTML = "Disabilities Services";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 120";
            document.getElementById("people").innerHTML = "Beth Boettcher";
            document.getElementById("phone").innerHTML = "5034";
        }
        if (word === "Emotional or Personal Concerns") {
            document.getElementById("department").innerHTML = "Emotional or Personal Concerns";
            document.getElementById("location").innerHTML = "Olsen Student Center Lower Level";
            document.getElementById("people").innerHTML = "Bobbi Meister";
            document.getElementById("phone").innerHTML = "5606";
        }
        if (word === "Financial Aid") {
            document.getElementById("department").innerHTML = "Financial Aid";
            document.getElementById("location").innerHTML = "Lewis Hall Second Floor Room 209";
            document.getElementById("people").innerHTML = "Financial Aid Office";
            document.getElementById("phone").innerHTML = "5159";
        }
        if (word === "Food Service") {
            document.getElementById("department").innerHTML = "Food Service";
            document.getElementById("location").innerHTML = "Olsen Student Center";
            document.getElementById("people").innerHTML = "Nick Gunn";
            document.getElementById("phone").innerHTML = "5303";
        }
        if (word === "Health Services") {
            document.getElementById("department").innerHTML = "Health Services";
            document.getElementById("location").innerHTML = "Olsen Student Center Lower Level";
            document.getElementById("people").innerHTML = "Judi Neswick";
            document.getElementById("phone").innerHTML = "5178";
        }
        if (word === "International Students") {
            document.getElementById("department").innerHTML = "International Students";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 120";
            document.getElementById("people").innerHTML = "Beth Boettcher";
            document.getElementById("phone").innerHTML = "5034";
        }
        if (word === "Maintenance") {
            document.getElementById("department").innerHTML = "Maintenance";
            document.getElementById("location").innerHTML = "Physical Plant";
            document.getElementById("people").innerHTML = "Alison Jones";
            document.getElementById("phone").innerHTML = "5116";
        }
        if (word === "Residence Life") {
            document.getElementById("department").innerHTML = "Residence Life";
            document.getElementById("location").innerHTML = "Olsen Student Center Lower Level";
            document.getElementById("people").innerHTML = "Residence Life Office";
            document.getElementById("phone").innerHTML = "5161";
        }
        if (word === "Student Accounts") {
            document.getElementById("department").innerHTML = "Student Accounts";
            document.getElementById("location").innerHTML = "Lewis Hall First floor/Room 100";
            document.getElementById("people").innerHTML = "Ashley Diediker";
            document.getElementById("phone").innerHTML = "5263";
        }
        if (word === "Student Life Issues") {
            document.getElementById("department").innerHTML = "Student Life Issues";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 120";
            document.getElementById("people").innerHTML = "Student Life Office";
            document.getElementById("phone").innerHTML = "5031";
        }
        if (word === "Student Payroll") {
            document.getElementById("department").innerHTML = "Student Payroll";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 110";
            document.getElementById("people").innerHTML = "Brenda Woodbury";
            document.getElementById("phone").innerHTML = "5142";
        }
        if (word === "Study Abroad") {
            document.getElementById("department").innerHTML = "Study Abroad";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 120";
            document.getElementById("people").innerHTML = "Beth Boettcher";
            document.getElementById("phone").innerHTML = "5034";
        }
        if (word === "Technology") {
            document.getElementById("department").innerHTML = "Technology";
            document.getElementById("location").innerHTML = "Olsen Student Center Lower Level";
            document.getElementById("people").innerHTML = "Help Desk";
            document.getElementById("phone").innerHTML = "5544";
        }
        if (word === "Title IX Coordinator") {
            document.getElementById("department").innerHTML = "Title IX Coordinator";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 120";
            document.getElementById("people").innerHTML = "Karmen Ten Napel";
            document.getElementById("phone").innerHTML = "5191";
        }
        if (word === "Transcript Request/Registrar") {
            document.getElementById("department").innerHTML = "Transcript Request/Registrar";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 104";
            document.getElementById("people").innerHTML = "Registrar's Office";
            document.getElementById("phone").innerHTML = "5109";
        }
        if (word === "University Engagement") {
            document.getElementById("department").innerHTML = "University Engagement";
            document.getElementById("location").innerHTML = "Krone Center Alumni";
            document.getElementById("people").innerHTML = "Alex Watters";
            document.getElementById("phone").innerHTML = "5036";
        }
        if (word === "University Engagement") {
            document.getElementById("department").innerHTML = "University Engagement";
            document.getElementById("location").innerHTML = "Krone Center Communication, Media Relations, Website Photography, Marketing, Social Media";
            document.getElementById("people").innerHTML = "Erin Edlund, Tasha Goodvin, Skyler McDermott";
            document.getElementById("phone").innerHTML = "5411 5440 5108";
        }
        if (word === "University Engagement") {
            document.getElementById("department").innerHTML = "University Engagement";
            document.getElementById("location").innerHTML = "Physical Plant Bldg. Gaphic Design, Business Cards, Other Marketing services Mailroom Printing";
            document.getElementById("people").innerHTML = "Randee Small, Lauretta Shaver";
            document.getElementById("phone").innerHTML = "5262 5198";
        }
        if (word === "University Engagement") {
            document.getElementById("department").innerHTML = "University Engagement";
            document.getElementById("location").innerHTML = "Krone Center Sports Information";
            document.getElementById("people").innerHTML = "Nick Buth";
            document.getElementById("phone").innerHTML = "5306";
        }
        if (word === "Writing Center") {
            document.getElementById("department").innerHTML = "Writing Center";
            document.getElementById("location").innerHTML = "Hickman Johnson Furrow";
            document.getElementById("people").innerHTML = "David Elder";
            document.getElementById("phone").innerHTML = "5008";
        }
        if (word === "Withdraw/Exit From College") {
            document.getElementById("department").innerHTML = "Withdraw/Exit From College";
            document.getElementById("location").innerHTML = "Lewis Hall First Floor Room 120";
            document.getElementById("people").innerHTML = "Student Life Office";
            document.getElementById("phone").innerHTML = "5031";
        }
          
    }
}
