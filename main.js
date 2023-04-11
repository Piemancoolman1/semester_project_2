const keyWords = ["Academics",  "Academic Support Center ", "Advising", "Athletic Injuries", "Athletics", "Bookstore", "Campus Ministry", "Campus Safety and Security", 
                  "Career Services", "Disabilities Services", "Emotional or Personal Concerns", "Financial Aid", "Food Service", "Health Services", "International Students", 
                  "Maintenance", "Residence Life", "Student Accounts", "Student Life Issues", "Student Payroll", "Study Abroad", "Technology", "Title IX Coordinator", 
                  "Transcript Request/Registrar", "University Engagement", "Writing Center", "Withdraw/Exit From College"]
const department = keyWords
const locationA = ["Lewis Hall First Floor", "Hickman-Johnson-Furrow", "Lewis Hall First Floor Room 120", "Rosen Verdoorn Sports Center", "Hindman-Hobbs Center", 
                  "Olsen Student Center, Lower Level", "Olsen Student Center, Lower Level", "Hickman-Johnson-Furrow First Floor Room 109", "Krone Center", 
                  "Lewis Hall First Floor Room 120", "Olsen Student Center Lower Level", "Lewis Hall Second Floor Room 209", "Olsen Student Center", 
                  "Olsen Student Center Lower Level", "Lewis Hall First Floor Room 120", "Physical Plant", "Olsen Student Center Lower Level", "Lewis Hall First floor/Room 100", 
                  "Lewis Hall First Floor Room 120", "Lewis Hall First Floor Room 110", "Lewis Hall First Floor Room 120", "Olsen Student Center Lower Level", 
                  "Lewis Hall First Floor Room 120", "Lewis Hall First Floor Room 104", "Krone Center Alumni", "Hickman Johnson Furrow", "Lewis Hall First Floor Room 120"]
const people = ["Chris Spicer, Brian McFarland, Jen Dolphin", "Regina Bade", "Beth Boettcher", "Katy Burford", "Jim Sykes", "Jodi Strohbeen", "Andy Nelson", 
                "Brett Lyon", "Stacie Hays", "Beth Boettcher", "Bobbi Meister", "Financial Aid Office", "Nick Gunn", "Judi Neswick", "Beth Boettcher", "Alison Jones", 
                "Residence Life Office", "Ashley Diediker", "Student Life Office", "Brenda Woodbury", "Beth Boettcher", "Help Desk", "Karmen Ten Napel", "Registrar's Office", 
                "Alex Watters", "David Elder", "Student Life Office"]
const phone = ["5103, 5388, 5274", "5166", "5034", "5314", "5371", "5133", "5148", "5234", "5032", "5034", "5606", "5159", "5303", 
               "5178", "5034", "5116", "5161", "5263", "5031", "5142", "5544", "5191", "5109", "5036", "5008", "5031"]
var searchStr 
console.log(searchStr)
document.querySelector("#searchPage").style.display = "block"
document.querySelector("#infoPage").style.display = "none"
function inputFunction() {
    searchStr = document.getElementById('searchStr').value
    document.querySelector("#searchPage").style.display = "none"
    document.querySelector("#infoPage").style.display = "block"
    //const searchStrArray = searchStr.split(" ")
    for (let i = 0; i < keyWords.legnth(); i++) {
        if (searchStr === keyWords[i]) {
            document.getElementById("department").innerHTML = department[i];
            document.getElementById("location").innerHTML = locationA[i];
            document.getElementById("people").innerHTML = people[i];
            document.getElementById("phone").innerHTML = phone[i];
        } 
    }
}
console.log(keyWords.length)
console.log(locationA.length)
console.log(people.length)
console.log(phone.length)

/*
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
*/