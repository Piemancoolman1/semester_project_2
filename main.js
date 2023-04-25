const keyWords = ["Academics",  "Academic Support Center ", "Advising", "Athletic Injuries", "Athletics", "Bookstore", "Campus Ministry", "Campus Safety and Security", 
                  "Career Services", "Disabilities Services", "Emotional or Personal Concerns", "Financial Aid", "Food Service", "Health Services", "International Students", 
                  "Maintenance", "Residence Life", "Student Accounts", "Student Life Issues", "Student Payroll", "Study Abroad", "Technology", "Title IX Coordinator", 
                  "Transcript Request/Registrar", "University Engagement", "Writing Center", "Withdraw/Exit From College"]
let termsOfKeyWords = [
    ["finale"], //Academics
    ["tutoring", "math", "school"], //ASC
    ["advising", "add", "dropping", "graduate"], //Advising
    ["blank"], //Athletic Injuires
    ["sports"], //Athletics
    ["book", "bookstore"], //Bookstore
    ["ministry"], //Campus Ministry
    ["safety", "security", "ticket", "parking"], //Campus Saftey and Security
    ["job", "internship"], //Career Services
    ["disabled", "501", "disability", "allergies", "dyslexia"], //Disabilities Services
    ["blank"], //Emotional or Personal Concerns
    ["aid", "loan", "scholarship"], //Financial Aid
    ["Food Service", "flex", "points", "meal", "plan", "food"], //Food Services
    ["sick", "broken", "ill", "medicine:"], //Health Services
    ["foreigner", "visa", "deported", "employement"], //International Students
    ["heater", "plumbing", "light", "lighting", "electricity", "door", "repair", "washer", "dryer"], //Maintenance
    ["roommate"], //Residence Life
    ["logged", "account"], //Student Accounts
    ["health", "counseling student", "life", "issue"], //Student Life Issues
    ["pay", "payroll", "paycheck"], //Student Payroll
    ["abroad"], //Study Abroad
    ["computer", "technology", "tech", "charger", "cord"], //Technology
    ["blank"], //title IX Coordinator
    ["transcript"], //Transcript Request/Registrar
    ["blank"], //University Engagement
    ["writing", "paper"], //Writing Center
    ["withdraw", "exit", "leave"] //Withdraw/Exit From College
];
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
var searchStr;
var peopleCurrentVarStr = ""
var phoneNumberStr = ""
//Array of images
let imgs = [
    ["LHtoBR.png", "BRtoLIBR.png", "LHtoBR.png", "BRtoAG.png", "BRtoHPER.png",
    "BRtoOSC.png", "BRtoOSC.png", "BRtoLIBR.png", "BRtoKC.png",
    "LHtoBR.png", "BRtoOSC.png", "LHtoBR.png", "BRtoOSC.png",
    "BRtoOSC.png", "LHtoBR.png", "BRtoFAC.png", "BRtoOSC.png", "LHtoBR.png",
    "LHtoBR.png", "LHtoBR.png", "LHtoBR.png", "BRtoOSC.png",
    "LHtoBR.png", "LHtoBR.png", "BRtoKC.png", "BRtoLIBR.png", "LHtoBR.png",],
     ["CCtoLH.png", "CCtoLIBR.png", "CCtoLH.png", "CCtoAG.png", "CCtoHPER.png",
      "OSCoCC.png", "OSCoCC.png", "CCtoLIBR.png", "CCtoKC.png",
      "CCtoLH.png", "OSCoCC.png", "CCtoLH.png", "OSCoCC.png",
      "OSCoCC.png", "CCtoLH.png", "CCtoFAC.png", "OSCoCC.png", "CCtoLH.png",
      "CCtoLH.png", "CCtoLH.png", "CCtoLH.png", "OSCoCC.png",
      "CCtoLH.png", "CCtoLH.png", "CCtoKC.png", "CCtoLICC.png", "CCtoLH.png",],
      ["LHtoEP.png", "LIBRtoEP.png", "LHtoEP.png", "AGtoEP.png", "HPERtoEP.png",
      "OSCtoEP.png", "OSCtoEP.png", "LIBRtoEP.png", "EPtoKC.png",
      "LHtoEP.png", "OSCtoEP.png", "LHtoEP.png", "OSCtoEP.png",
      "OSCtoEP.png", "LHtoEP.png", "EPtoFAC.png", "OSCtoEP.png", "LHtoEP.png",
      "LHtoEP.png", "LHtoEP.png", "LHtoEP.png", "OSCtoEP.png",
      "LHtoEP.png", "LHtoEP.png", "EPtoKC.png", "LIBRtoEP.png", "LHtoEP.png",],
      ["HPERtoLH.png", "HPERtoLIBR.png", "HPERtoLH.png", "AGtoHPER.png", "HPERtoHPER.png",
      "HPERtoOSC.png", "HPERtoOSC.png", "HPERtoLIBR.png", "HPERtoKC.png",
      "HPERtoLH.png", "HPERtoOSC.png", "HPERtoLH.png", "HPERtoOSC.png",
      "HPERtoOSC.png", "HPERtoLH.png", "HPERtoFAC.png", "HPERtoOSC.png", "HPERtoLH.png",
      "HPERtoLH.png", "HPERtoLH.png", "HPERtoLH.png", "HPERtoOSC.png",
      "HPERtoLH.png", "HPERtoLH.png", "HPERtoKC.png", "HPERtoLIBR.png", "HPERtoLH.png",],
      ["KNtoLH.png", "KNtoLIBR.png", "KNtoLH.png", "AGtoKN.png", "KNtoKN.png",
      "OSCtoKN.png", "OSCtoKN.png", "KNtoLIBR.png", "KNtoKC.png",
      "KNtoLH.png", "OSCtoKN.png", "KNtoLH.png", "OSCtoKN.png",
      "OSCtoKN.png", "KNtoLH.png", "KNtoFAC.png", "OSCtoKN.png", "KNtoLH.png",
      "KNtoLH.png", "KNtoLH.png", "KNtoLH.png", "OSCtoKN.png",
      "KNtoLH.png", "KNtoLH.png", "KNtoKC.png", "KNtoLIBR.png", "KNtoLH.png",],
      ["LHtoKC.png", "LIBRtoKC.png", "LHtoKC.png", "AGtoKC.png", "KCtoKC.png",
      "OSCtoKC.png", "OSCtoKC.png", "LIBRtoKC.png", "KCtoKC.png",
      "LHtoKC.png", "OSCtoKC.png", "LHtoKC.png", "OSCtoKC.png",
      "OSCtoKC.png", "LHtoKC.png", "FACtoKC.png", "OSCtoKC.png", "LHtoKC.png",
      "LHtoKC.png", "LHtoKC.png", "LHtoKC.png", "OSCtoKC.png",
      "LHtoKC.png", "LHtoKC.png", "KCtoKC.png", "LIBRtoKC.png", "LHtoKC.png",],
      ["LHtoLIBR.png", "LIBRtoLIBR.png", "LHtoLIBR.png", "AGtoLIBR.png", "LIBRtoLIBR.png",
      "OSCtoLIBR.png", "OSCtoLIBR.png", "LIBRtoLIBR.png", "LIBRtoLIBR.png",
      "LHtoLIBR.png", "OSCtoLIBR.png", "LHtoLIBR.png", "OSCtoLIBR.png",
      "OSCtoLIBR.png", "LHtoLIBR.png", "LIBRtoFAC.png", "OSCtoLIBR.png", "LHtoLIBR.png",
      "LHtoLIBR.png", "LHtoLIBR.png", "LHtoLIBR.png", "OSCtoLIBR.png",
      "LHtoLIBR.png", "LHtoLIBR.png", "LIBRtoLIBR.png", "LIBRtoLIBR.png", "LHtoLIBR.png",],
      ["LHtoLH.png", "LHtoLIBR.png", "LHtoLH.png", "AGtoLH.png", "LHtoLH.png",
      "OSCtoLH.png", "OSCtoLH.png", "LHtoLIBR.png", "LHtoLH.png",
      "LHtoLH.png", "OSCtoLH.png", "LHtoLH.png", "OSCtoLH.png",
      "OSCtoLH.png", "LHtoLH.png", "LHtoFAC.png", "OSCtoLH.png", "LHtoLH.png",
      "LHtoLH.png", "LHtoLH.png", "LHtoLH.png", "OSCtoLH.png",
      "LHtoLH.png", "LHtoLH.png", "LHtoLH.png", "LHtoLIBR.png", "LHtoLH.png",],
      ["LCtoLH.png", "LCtoLIBR.png", "LCtoLH.png", "AGtoLC.png", "HPERtoLC.png",
      "OSCtoLC.png", "OSCtoLC.png", "LCtoLIBR.png", "LCtoKC.png",
      "LCtoLH.png", "OSCtoLC.png", "LCtoLH.png", "OSCtoLC.png",
      "OSCtoLC.png", "LCtoLH.png", "LCtoFAC.png", "OSCtoLC.png", "LCtoLH.png",
      "LCtoLH.png", "LCtoLH.png", "LCtoLH.png", "OSCtoLC.png",
      "LCtoLH.png", "LCtoLH.png", "LCtoKC.png", "LCtoLIBR.png", "LCtoLH.png",],
      ["LHtoMAC.png", "LIBRtoMAC.png", "LHtoMAC.png", "AGtoMAC.png", "HPERtoMAC.png",
      "OSCtoMAC.png", "OSCtoMAC.png", "LIBRtoMAC.png", "MACtoKC.png",
      "LHtoMAC.png", "OSCtoMAC.png", "LHtoMAC.png", "OSCtoMAC.png",
      "OSCtoMAC.png", "LHtoMAC.png", "MACtoFAC.png", "OSCtoMAC.png", "LHtoMAC.png",
      "LHtoMAC.png", "LHtoMAC.png", "LHtoMAC.png", "OSCtoMAC.png",
      "LHtoMAC.png", "LHtoMAC.png", "MACtoKC.png", "LIBRtoMAC.png", "LHtoMAC.png",],
      ["LHtoFAC.png", "LIBRtoFAC.png", "LHtoFAC.png", "AGtoFAC.png", "HPERtoFAC.png",
      "OSCtoFAC.png", "OSCtoFAC.png", "LIBRtoFAC.png", "KCtoFAC.png",
      "LHtoFAC.png", "OSCtoFAC.png", "LHtoFAC.png", "OSCtoFAC.png",
      "OSCtoFAC.png", "LHtoFAC.png", "FACtoFAC.png", "OSCtoFAC.png", "LHtoFAC.png",
      "LHtoFAC.png", "LHtoFAC.png", "LHtoFAC.png", "OSCtoFAC.png",
      "LHtoFAC.png", "LHtoFAC.png", "KCtoFAC.png", "LIBRtoFAC.png", "LHtoFAC.png",],
      ["OSCtoLH.png", "OSCtoLIBR.png", "OSCtoLH.png", "AGtoOSC.png", "HPERtoOSC.png",
      "OSCtoOSC.png", "OSCtoOSC.png", "OSCtoLIBR.png", "OSCtoKC.png",
      "OSCtoLH.png", "OSCtoOSC.png", "OSCtoLH.png", "OSCtoOSC.png",
      "OSCtoOSC.png", "OSCtoLH.png", "OSCtoFAC.png", "OSCtoOSC.png", "OSCtoLH.png",
      "OSCtoLH.png", "OSCtoLH.png", "OSCtoLH.png", "OSCtoOSC.png",
      "OSCtoLH.png", "OSCtoLH.png", "OSCtoKC.png", "OSCtoLIBR.png", "OSCtoLH.png",],
      ["LHtoSC.png", "LIBRtoSC.png", "LHtoSC.png", "AGtoSC.png", "HPERtoSC.png",
      "OSCtoSC.png", "OSCtoSC.png", "LIBRtoSC.png", "SCtoKC.png",
      "LHtoSC.png", "OSCtoSC.png", "LHtoSC.png", "OSCtoSC.png",
      "OSCtoSC.png", "LHtoSC.png", "SCtoSC.png", "OSCtoSC.png", "LHtoSC.png",
      "LHtoSC.png", "LHtoSC.png", "LHtoSC.png", "OSCtoSC.png",
      "LHtoSC.png", "LHtoSC.png", "SCtoKC.png", "LIBRtoSC.png", "LHtoSC.png",],
      ["DHtoLH.png", "DHtoLIBR.png", "DHtoLH.png", "AGtoDH.png", "DHtoHPER.png",
      "DHtoOSC.png", "DHtoOSC.png", "DHtoLIBR.png", "DHtoKC.png",
      "DHtoLH.png", "DHtoOSC.png", "DHtoLH.png", "DHtoOSC.png",
      "DHtoOSC.png", "DHtoLH.png", "DHtoSC.png", "DHtoOSC.png", "DHtoLH.png",
      "DHtoLH.png", "DHtoLH.png", "DHtoLH.png", "DHtoOSC.png",
      "DHtoLH.png", "DHtoLH.png", "DHtoKC.png", "DHtoLIBR.png", "DHtoLH.png",],
      ["APtoLH.png", "APtoLIBR.png", "APtoLH.png", "APtoAG.png", "APtoHPER.png",
      "APtoOSC.png", "APtoOSC.png", "APtoLIBR.png", "APtoKC.png",
      "APtoLH.png", "APtoOSC.png", "APtoLH.png", "APtoOSC.png",
      "APtoOSC.png", "APtoLH.png", "APtoSC.png", "APtoOSC.png", "APtoLH.png",
      "APtoLH.png", "APtoLH.png", "APtoLH.png", "APtoOSC.png",
      "APtoLH.png", "APtoLH.png", "APtoKC.png", "APtoLISC.png", "APtoLH.png",],
      ["RDtoLH.png", "RDtoLIBR.png", "RDtoLH.png", "RDtoAG.png", "RDtoHPER.png",
      "RDtoOSC.png", "RDtoOSC.png", "RDtoLIBR.png", "RDtoKC.png",
      "RDtoLH.png", "RDtoOSC.png", "RDtoLH.png", "RDtoOSC.png",
      "RDtoOSC.png", "RDtoLH.png", "RDtoSC.png", "RDtoOSC.png", "RDtoLH.png",
      "RDtoLH.png", "RDtoLH.png", "RDtoLH.png", "RDtoOSC.png",
      "RDtoLH.png", "RDtoLH.png", "RDtoKC.png", "RDtoLIBR.png", "RDtoLH.png",],
      ["PLXtoLH.png", "PLXtoLIBR.png", "PLXtoLH.png", "PLXtoAG.png", "PLXtoHPER.png",
      "PLXtoOSC.png", "PLXtoOSC.png", "PLXtoLIBR.png", "PLXtoKC.png",
      "PLXtoLH.png", "PLXtoOSC.png", "PLXtoLH.png", "PLXtoOSC.png",
      "PLXtoOSC.png", "PLXtoLH.png", "PLXtoSC.png", "PLXtoOSC.png", "PLXtoLH.png",
      "PLXtoLH.png", "PLXtoLH.png", "PLXtoLH.png", "PLXtoOSC.png",
      "PLXtoLH.png", "PLXtoLH.png", "PLXtoKC.png", "PLXtoLIBR.png", "PLXtoLH.png",],
      ["AGtoLH.png", "AGtoLIBR.png", "AGtoLH.png", "AGtoAG.png", "AGtoHPER.png",
      "AGtoOSC.png", "AGtoOSC.png", "AGtoLIBR.png", "AGtoKC.png",
      "AGtoLH.png", "AGtoOSC.png", "AGtoLH.png", "AGtoOSC.png",
      "AGtoOSC.png", "AGtoLH.png", "AGtoSC.png", "AGtoOSC.png", "AGtoLH.png",
      "AGtoLH.png", "AGtoLH.png", "AGtoLH.png", "AGtoOSC.png",
      "AGtoLH.png", "AGtoLH.png", "AGtoKC.png", "AGtoLISC.png", "AGtoLH.png"]
        ];
let walk =[
    ["http://logok.org/wp-content/uploads/2014/03/abc-gold-logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/779px-NBC_logo.svg.png"],
    ["https://s-media-cache-ak0.pinimg.com/originals/96/e6/d9/96e6d9e141ac42bf9aad1aaae0a15c61.jpg", "http://fontmeme.com/images/CNN-Logo.jpg"],
    ["http://logok.org/wp-content/uploads/2014/12/TBS-logo-blue.png", "http://www.doddlenews.com/wp-content/uploads/2012/05/fox-tv-logo.jpg"]
];
console.log(searchStr)
document.querySelector("#searchPage").style.display = "block"
document.querySelector("#infoPage").style.display = "none"
function inputFunction() {
    var img = document.getElementById("myImage");
    var j = document.getElementById("startingPoint").value;
    console.log(j);
    searchStr = document.getElementById('searchStr').value.toLowerCase()
    document.querySelector("#searchPage").style.display = "none"
    document.querySelector("#infoPage").style.display = "block"
    const searchStrArray = searchStr.split(" ")
    console.log(searchStrArray)
    for (let i = 0; i < searchStrArray.length; i++) {
        for(var a = 0; a < termsOfKeyWords.length; a++) {
            for(var b = 0; b < termsOfKeyWords[a].length; b++) {
                if(termsOfKeyWords[a][b] === searchStrArray[i]){
                    console.log(termsOfKeyWords[a][b] === searchStrArray[i])
                    peopleCurrentVarStr = people[a]
                    phoneNumberStr = phone[a]
                    peopleCurrentVarStr.setA
                    document.getElementById("department").innerHTML = department[a]
                    document.getElementById("location").innerHTML = locationA[a]
                    document.getElementById("people").innerHTML = peopleCurrentVarStr.replace(/,/g, "<br>")
                    document.getElementById("phone").innerHTML = phoneNumberStr.replace(/,/g, "<br />")
                    //Changing image based on index
                    img.src = imgs[j][a];
                    img.alt = imgs[j][a];
                }
            }
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
