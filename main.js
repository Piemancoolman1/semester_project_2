const keyWords = ["Academics",  "Academic Support Center ", "Advising", "Athletic Injuries", "Athletics", "Bookstore", "Campus Ministry", "Campus Safety and Security", 
                  "Career Services", "Disabilities Services", "Emotional or Personal Concerns", "Financial Aid", "Food Service", "Health Services", "International Students", 
                  "Maintenance", "Residence Life", "Student Accounts", "Student Life Issues", "Student Payroll", "Study Abroad", "Technology", "Title IX Coordinator", 
                  "Transcript Request/Registrar", "University Engagement", "Writing Center", "Withdraw/Exit From College"]
let termsOfKeyWords = [
    ["finale", "policies", "procedures, class, classroom"], //Academics
  ["tutoring", "math", "school", "test"], //ASC
  ["advising", "add", "dropping", "graduate"], //Advising
  ["concussion", "injury"], //Athletic Injuries
  ["sports", "socker", "baseball", "football", "basketball", "reselling", "cheerleading", "swimming", "dance"], //Athletics
  ["book", "bookstore", "merch"], //Bookstore
  ["ministry", "religion", "faith"], //Campus Ministry
  ["safety", "security", "parking", "escort"], //Campus Safety and Security
  ["job", "internship"], //Career Services
  ["disabled", "501", "disability", "allergies", "dyslexia"], //Disabilities Services
  ["therapy", "counselor", "depresion"], //Emotional or Personal Concerns
  ["aid", "loan", "scholarship"], //Financial Aid
  ["flex", "points", "meal", "plan", "food", "lunch"], //Food Services
  ["sick", "broken", "ill", "medicine", "prescription" ,"std", "fever", "birth","pregnant", "pregnancy", "vaccine", "raped", "rape"], //Health Services
  ["foreigner", "visa", "deported", "employment"], //International Students
  ["heater", "plumbing", "light", "lighting", "electricity", "door", "repair", "washer", "dryer"], //Maintenance
  ["roommate"], //Residence Life
  ["logged", "account"], //Student Accounts
  ["health", "student", "life", "issue"], //Student Life Issues
  ["pay", "payroll", "paycheck"], //Student Payroll
  ["abroad"], //Study Abroad
  ["computer", "technology", "tech", "charger", "cord"], //Technology
  ["sexual", "assault", "sex", "discrimination"], //title IX Coordinator
  ["transcript", "registrar"], //Transcript Request/Registrar
  ["engagement"], //University Engagement
  ["writing", "paper", "essay"], //Writing Center
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
    ["Maps/LHtoBR.png", "Maps/BRtoLIBR.png", "Maps/LHtoBR.png", "Maps/BRtoAG.png", "Maps/BRtoHPER.png",
    "Maps/OSCtoBR.png", "Maps/OSCtoBR.png", "Maps/BRtoLIBR.png", "Maps/BRtoKC.png",
    "Maps/LHtoBR.png", "Maps/OSCtoBR.png", "Maps/LHtoBR.png", "Maps/OSCtoBR.png",
    "Maps/OSCtoBR.png", "Maps/LHtoBR.png", "Maps/BRtoFAC.png", "Maps/OSCtoBR.png", "Maps/LHtoBR.png",
    "Maps/LHtoBR.png", "Maps/LHtoBR.png", "Maps/LHtoBR.png", "Maps/OSCtoBR.png",
    "Maps/LHtoBR.png", "Maps/LHtoBR.png", "Maps/BRtoKC.png", "Maps/BRtoLIBR.png", "Maps/LHtoBR.png",],
     ["Maps/CCtoLH.png", "Maps/CCtoLIBR.png", "Maps/CCtoLH.png", "Maps/CCtoAG.png", "Maps/CCtoHPER.png",
      "Maps/OSCoCC.png", "Maps/OSCoCC.png", "Maps/CCtoLIBR.png", "Maps/CCtoKC.png",
      "Maps/CCtoLH.png", "Maps/OSCoCC.png", "Maps/CCtoLH.png", "Maps/OSCoCC.png",
      "Maps/OSCoCC.png", "Maps/CCtoLH.png", "Maps/CCtoFAC.png", "Maps/OSCoCC.png", "Maps/CCtoLH.png",
      "Maps/CCtoLH.png", "Maps/CCtoLH.png", "Maps/CCtoLH.png", "Maps/OSCoCC.png",
      "Maps/CCtoLH.png", "Maps/CCtoLH.png", "Maps/CCtoKC.png", "Maps/CCtoLICC.png", "Maps/CCtoLH.png",],
      ["Maps/LHtoEP.png", "Maps/LIBRtoEP.png", "Maps/LHtoEP.png", "Maps/AGtoEP.png", "Maps/HPERtoEP.png",
      "Maps/OSCtoEP.png", "Maps/OSCtoEP.png", "Maps/LIBRtoEP.png", "Maps/EPtoKC.png",
      "Maps/LHtoEP.png", "Maps/OSCtoEP.png", "Maps/LHtoEP.png", "Maps/OSCtoEP.png",
      "Maps/OSCtoEP.png", "Maps/LHtoEP.png", "Maps/EPtoFAC.png", "Maps/OSCtoEP.png", "Maps/LHtoEP.png",
      "Maps/LHtoEP.png", "Maps/LHtoEP.png", "Maps/LHtoEP.png", "Maps/OSCtoEP.png",
      "Maps/LHtoEP.png", "Maps/LHtoEP.png", "Maps/EPtoKC.png", "Maps/LIBRtoEP.png", "Maps/LHtoEP.png",],
      ["HPERtoLH.png", "HPERtoLIBR.png", "HPERtoLH.png", "AGtoHPER.png", "HPERtoHPER.png",
      "Maps/HPERtoOSC.png", "Maps/HPERtoOSC.png", "Maps/HPERtoLIBR.png", "Maps/HPERtoKC.png",
      "Maps/HPERtoLH.png", "Maps/HPERtoOSC.png", "Maps/HPERtoLH.png", "Maps/HPERtoOSC.png",
      "Maps/HPERtoOSC.png", "Maps/HPERtoLH.png", "Maps/HPERtoFAC.png", "Maps/HPERtoOSC.png", "Maps/HPERtoLH.png",
      "Maps/HPERtoLH.png", "Maps/HPERtoLH.png", "Maps/HPERtoLH.png", "Maps/HPERtoOSC.png",
      "Maps/HPERtoLH.png", "Maps/HPERtoLH.png", "Maps/HPERtoKC.png", "Maps/HPERtoLIBR.png", "Maps/HPERtoLH.png",],
      ["Maps/KNtoLH.png", "Maps/KNtoLIBR.png", "Maps/KNtoLH.png", "Maps/AGtoKN.png", "Maps/KNtoKN.png",
      "Maps/OSCtoKN.png", "Maps/OSCtoKN.png", "Maps/KNtoLIBR.png", "Maps/KNtoKC.png",
      "Maps/KNtoLH.png", "Maps/OSCtoKN.png", "Maps/KNtoLH.png", "Maps/OSCtoKN.png",
      "Maps/OSCtoKN.png", "Maps/KNtoLH.png", "Maps/KNtoFAC.png", "Maps/OSCtoKN.png", "Maps/KNtoLH.png",
      "Maps/KNtoLH.png", "Maps/KNtoLH.png", "Maps/KNtoLH.png", "Maps/OSCtoKN.png",
      "Maps/KNtoLH.png", "Maps/KNtoLH.png", "Maps/KNtoKC.png", "Maps/KNtoLIBR.png", "Maps/KNtoLH.png",],
      ["Maps/LHtoKC.png", "Maps/LIBRtoKC.png", "Maps/LHtoKC.png", "Maps/AGtoKC.png", "Maps/KCtoKC.png",
      "Maps/OSCtoKC.png", "Maps/OSCtoKC.png", "Maps/LIBRtoKC.png", "Maps/KCtoKC.png",
      "Maps/LHtoKC.png", "Maps/OSCtoKC.png", "Maps/LHtoKC.png", "Maps/OSCtoKC.png",
      "Maps/OSCtoKC.png", "Maps/LHtoKC.png", "Maps/FACtoKC.png", "Maps/OSCtoKC.png", "Maps/LHtoKC.png",
      "Maps/LHtoKC.png", "Maps/LHtoKC.png", "Maps/LHtoKC.png", "Maps/OSCtoKC.png",
      "Maps/LHtoKC.png", "Maps/LHtoKC.png", "Maps/KCtoKC.png", "Maps/LIBRtoKC.png", "Maps/LHtoKC.png",],
      ["Maps/LHtoLIBR.png", "Maps/LIBRtoLIBR.png", "Maps/LHtoLIBR.png", "Maps/AGtoLIBR.png", "Maps/LIBRtoLIBR.png",
      "Maps/OSCtoLIBR.png", "Maps/OSCtoLIBR.png", "Maps/LIBRtoLIBR.png", "Maps/LIBRtoLIBR.png",
      "Maps/LHtoLIBR.png", "Maps/OSCtoLIBR.png", "Maps/LHtoLIBR.png", "Maps/OSCtoLIBR.png",
      "Maps/OSCtoLIBR.png", "Maps/LHtoLIBR.png", "Maps/LIBRtoFAC.png", "Maps/OSCtoLIBR.png", "Maps/LHtoLIBR.png",
      "Maps/LHtoLIBR.png", "Maps/LHtoLIBR.png", "Maps/LHtoLIBR.png", "Maps/OSCtoLIBR.png",
      "Maps/LHtoLIBR.png", "Maps/LHtoLIBR.png", "Maps/LIBRtoLIBR.png", "Maps/LIBRtoLIBR.png", "Maps/LHtoLIBR.png",],
      ["Maps/LHtoLH.png", "Maps/LHtoLIBR.png", "Maps/LHtoLH.png", "Maps/AGtoLH.png", "Maps/LHtoLH.png",
      "Maps/OSCtoLH.png", "Maps/OSCtoLH.png", "Maps/LHtoLIBR.png", "Maps/LHtoLH.png",
      "Maps/LHtoLH.png", "Maps/OSCtoLH.png", "Maps/LHtoLH.png", "Maps/OSCtoLH.png",
      "Maps/OSCtoLH.png", "Maps/LHtoLH.png", "Maps/LHtoFAC.png", "Maps/OSCtoLH.png", "Maps/LHtoLH.png",
      "Maps/LHtoLH.png", "Maps/LHtoLH.png", "Maps/LHtoLH.png", "Maps/OSCtoLH.png",
      "Maps/LHtoLH.png", "Maps/LHtoLH.png", "Maps/LHtoLH.png", "Maps/LHtoLIBR.png", "Maps/LHtoLH.png",],
      ["Maps/LCtoLH.png", "Maps/LCtoLIBR.png", "Maps/LCtoLH.png", "Maps/AGtoLC.png", "Maps/HPERtoLC.png",
      "Maps/OSCtoLC.png", "Maps/OSCtoLC.png", "Maps/LCtoLIBR.png", "Maps/LCtoKC.png",
      "Maps/LCtoLH.png", "Maps/OSCtoLC.png", "Maps/LCtoLH.png", "Maps/OSCtoLC.png",
      "Maps/OSCtoLC.png", "Maps/LCtoLH.png", "Maps/LCtoFAC.png", "Maps/OSCtoLC.png", "Maps/LCtoLH.png",
      "Maps/LCtoLH.png", "Maps/LCtoLH.png", "Maps/LCtoLH.png", "Maps/OSCtoLC.png",
      "Maps/LCtoLH.png", "Maps/LCtoLH.png", "Maps/LCtoKC.png", "Maps/LCtoLIBR.png", "Maps/LCtoLH.png",],
      ["Maps/LHtoMAC.png", "Maps/LIBRtoMAC.png", "Maps/LHtoMAC.png", "Maps/AGtoMAC.png", "Maps/HPERtoMAC.png",
      "Maps/OSCtoMAC.png", "Maps/OSCtoMAC.png", "Maps/LIBRtoMAC.png", "Maps/MACtoKC.png",
      "Maps/LHtoMAC.png", "Maps/OSCtoMAC.png", "Maps/LHtoMAC.png", "Maps/OSCtoMAC.png",
      "Maps/OSCtoMAC.png", "Maps/LHtoMAC.png", "Maps/MACtoFAC.png", "Maps/OSCtoMAC.png", "Maps/LHtoMAC.png",
      "Maps/LHtoMAC.png", "Maps/LHtoMAC.png", "Maps/LHtoMAC.png", "Maps/OSCtoMAC.png",
      "Maps/LHtoMAC.png", "Maps/LHtoMAC.png", "Maps/MACtoKC.png", "Maps/LIBRtoMAC.png", "Maps/LHtoMAC.png",],
      ["Maps/LHtoFAC.png", "Maps/LIBRtoFAC.png", "Maps/LHtoFAC.png", "Maps/AGtoFAC.png", "Maps/HPERtoFAC.png",
      "Maps/OSCtoFAC.png", "Maps/OSCtoFAC.png", "Maps/LIBRtoFAC.png", "Maps/KCtoFAC.png",
      "Maps/LHtoFAC.png", "Maps/OSCtoFAC.png", "Maps/LHtoFAC.png", "Maps/OSCtoFAC.png",
      "Maps/OSCtoFAC.png", "Maps/LHtoFAC.png", "Maps/FACtoFAC.png", "Maps/OSCtoFAC.png", "Maps/LHtoFAC.png",
      "Maps/LHtoFAC.png", "Maps/LHtoFAC.png", "Maps/LHtoFAC.png", "Maps/OSCtoFAC.png",
      "Maps/LHtoFAC.png", "Maps/LHtoFAC.png", "Maps/KCtoFAC.png", "Maps/LIBRtoFAC.png", "Maps/LHtoFAC.png",],
      ["Maps/OSCtoLH.png", "Maps/OSCtoLIBR.png", "Maps/OSCtoLH.png", "Maps/AGtoOSC.png", "Maps/HPERtoOSC.png",
      "Maps/OSCtoOSC.png", "Maps/OSCtoOSC.png", "Maps/OSCtoLIBR.png", "Maps/OSCtoKC.png",
      "Maps/OSCtoLH.png", "Maps/OSCtoOSC.png", "Maps/OSCtoLH.png", "Maps/OSCtoOSC.png",
      "Maps/OSCtoOSC.png", "Maps/OSCtoLH.png", "Maps/OSCtoFAC.png", "Maps/OSCtoOSC.png", "Maps/OSCtoLH.png",
      "Maps/OSCtoLH.png", "Maps/OSCtoLH.png", "Maps/OSCtoLH.png", "Maps/OSCtoOSC.png",
      "Maps/OSCtoLH.png", "Maps/OSCtoLH.png", "Maps/OSCtoKC.png", "Maps/OSCtoLIBR.png", "Maps/OSCtoLH.png",],
      ["Maps/LHtoSC.png", "Maps/LIBRtoSC.png", "Maps/LHtoSC.png", "Maps/AGtoSC.png", "Maps/HPERtoSC.png",
      "Maps/OSCtoSC.png", "Maps/OSCtoSC.png", "Maps/LIBRtoSC.png", "Maps/SCtoKC.png",
      "Maps/LHtoSC.png", "Maps/OSCtoSC.png", "Maps/LHtoSC.png", "Maps/OSCtoSC.png",
      "Maps/OSCtoSC.png", "Maps/LHtoSC.png", "Maps/SCtoSC.png", "Maps/OSCtoSC.png", "Maps/LHtoSC.png",
      "Maps/LHtoSC.png", "Maps/LHtoSC.png", "Maps/LHtoSC.png", "Maps/OSCtoSC.png",
      "Maps/LHtoSC.png", "Maps/LHtoSC.png", "Maps/SCtoKC.png", "Maps/LIBRtoSC.png", "Maps/LHtoSC.png",],
      ["Maps/DHtoLH.png", "Maps/DHtoLIBR.png", "Maps/DHtoLH.png", "Maps/AGtoDH.png", "Maps/DHtoHPER.png",
      "Maps/DHtoOSC.png", "Maps/DHtoOSC.png", "Maps/DHtoLIBR.png", "Maps/DHtoKC.png",
      "Maps/DHtoLH.png", "Maps/DHtoOSC.png", "Maps/DHtoLH.png", "Maps/DHtoOSC.png",
      "Maps/DHtoOSC.png", "Maps/DHtoLH.png", "Maps/DHtoSC.png", "Maps/DHtoOSC.png", "Maps/DHtoLH.png",
      "Maps/DHtoLH.png", "Maps/DHtoLH.png", "Maps/DHtoLH.png", "Maps/DHtoOSC.png",
      "Maps/DHtoLH.png", "Maps/DHtoLH.png", "Maps/DHtoKC.png", "Maps/DHtoLIBR.png", "Maps/DHtoLH.png",],
      ["Maps/APtoLH.png", "Maps/APtoLIBR.png", "Maps/APtoLH.png", "Maps/APtoAG.png", "Maps/APtoHPER.png",
      "Maps/APtoOSC.png", "Maps/APtoOSC.png", "Maps/APtoLIBR.png", "Maps/APtoKC.png",
      "Maps/APtoLH.png", "Maps/APtoOSC.png", "Maps/APtoLH.png", "Maps/APtoOSC.png",
      "Maps/APtoOSC.png", "Maps/APtoLH.png", "Maps/APtoSC.png", "Maps/APtoOSC.png", "Maps/APtoLH.png",
      "Maps/APtoLH.png", "Maps/APtoLH.png", "Maps/APtoLH.png", "Maps/APtoOSC.png",
      "Maps/APtoLH.png", "Maps/APtoLH.png", "Maps/APtoKC.png", "Maps/APtoLISC.png", "Maps/APtoLH.png",],
      ["Maps/RDtoLH.png", "Maps/RDtoLIBR.png", "Maps/RDtoLH.png", "Maps/RDtoAG.png", "Maps/RDtoHPER.png",
      "Maps/RDtoOSC.png", "Maps/RDtoOSC.png", "Maps/RDtoLIBR.png", "Maps/RDtoKC.png",
      "Maps/RDtoLH.png", "Maps/RDtoOSC.png", "Maps/RDtoLH.png", "Maps/RDtoOSC.png",
      "Maps/RDtoOSC.png", "Maps/RDtoLH.png", "Maps/RDtoSC.png", "Maps/RDtoOSC.png", "Maps/RDtoLH.png",
      "Maps/RDtoLH.png", "Maps/RDtoLH.png", "Maps/RDtoLH.png", "Maps/RDtoOSC.png",
      "Maps/RDtoLH.png", "Maps/RDtoLH.png", "Maps/RDtoKC.png", "Maps/RDtoLIBR.png", "Maps/RDtoLH.png",],
      ["Maps/PLXtoLH.png", "Maps/PLXtoLIBR.png", "Maps/PLXtoLH.png", "Maps/PLXtoAG.png", "Maps/PLXtoHPER.png",
      "Maps/PLXtoOSC.png", "Maps/PLXtoOSC.png", "Maps/PLXtoLIBR.png", "Maps/PLXtoKC.png",
      "Maps/PLXtoLH.png", "Maps/PLXtoOSC.png", "Maps/PLXtoLH.png", "Maps/PLXtoOSC.png",
      "Maps/PLXtoOSC.png", "Maps/PLXtoLH.png", "Maps/PLXtoSC.png", "Maps/PLXtoOSC.png", "Maps/PLXtoLH.png",
      "Maps/PLXtoLH.png", "Maps/PLXtoLH.png", "Maps/PLXtoLH.png", "Maps/PLXtoOSC.png",
      "Maps/PLXtoLH.png", "Maps/PLXtoLH.png", "Maps/PLXtoKC.png", "Maps/PLXtoLIBR.png", "Maps/PLXtoLH.png",],
      ["Maps/AGtoLH.png", "Maps/AGtoLIBR.png", "Maps/AGtoLH.png", "Maps/AGtoAG.png", "Maps/AGtoHPER.png",
      "Maps/AGtoOSC.png", "Maps/AGtoOSC.png", "Maps/AGtoLIBR.png", "Maps/AGtoKC.png",
      "Maps/AGtoLH.png", "Maps/AGtoOSC.png", "Maps/AGtoLH.png", "Maps/AGtoOSC.png",
      "Maps/AGtoOSC.png", "Maps/AGtoLH.png", "Maps/AGtoSC.png", "Maps/AGtoOSC.png", "Maps/AGtoLH.png",
      "Maps/AGtoLH.png", "Maps/AGtoLH.png", "Maps/AGtoLH.png", "Maps/AGtoOSC.png",
      "Maps/AGtoLH.png", "Maps/AGtoLH.png", "Maps/AGtoKC.png", "Maps/AGtoLISC.png", "Maps/AGtoLH.png"]
        ];

let walk =[
    ["photos/LH_1ST-FL.JPG", null, null],
    ["photos/LIB.JPG", "photos/LIB_1ST-FL-STAIRS.JPG", "photos/LIB_AFC-OFF.JPG"],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM120.JPG", null],
    ["photos/RVSC.JPG", null, null],//Athletic Injuries
    ["photos/RVSC.JPG", null, null],
    ["photos/OSC.JPG", "photos/OSC_STAIRS.JPG", "photos/OSC_BOOKSTORE.JPG"],
    ["photos/OSC.JPG", "photos/OSC_STAIRS.JPG", "photos/OSC_CM.JPG"], //Campus Ministry
    ["photos/OSC.JPG", "photos/OSC_CSSB-OFF.JPG", null],
    ["photos/LIB.JPG", "photos/LIB_CSSA-OFF.JPG", null],
    ["photos/KC.JPG", null, null],
    ["photos/OSC.JPG", "photos/OSC_STAIRS.JPG", "photos/OSC_EPC-OFF.JPG"],
    ["photos/LH_1ST-FL.JPG", "photos/LH_1ST-FL-STAIRS.JPG", "photos/LH_RM209.JPG"],
    ["photos/OSC.JPG", "photos/OSC_CAF.JPG", "photos/OSC_FC-OFF.JPG"],
    ["photos/OSC.JPG", "photos/OSC_STAIRS.JPG", "photos/OSC_HS-OFF.JPG"],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM120.JPG", null],
    ["photos/FAC.JPG", null, null]
    ["photos/OSC.JPG", "photos/OSC_STAIRS.JPG", "photos/OSC_RES-LIFE-OFF.JPG"],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM100", null],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM120", null],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM100", null],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM120", null],
    ["photos/OSC.JPG", "photos/OSC_STAIRS.JPG", "photos/OSC_TECH-OFF.JPG"],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM120", null],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM104", null],
    ["photos/KC.JPG", null , null],
    ["photos/LIB.JPG", "photos/LIB_1ST-FL-STAIRS.JPG", "photos/LIB_WC-OFF.JPG"],
    ["photos/LH_1ST-FL.JPG", "photos/LH_RM120", null]
];

console.log(searchStr)
document.querySelector("#searchPage").style.display = "block"
document.querySelector("#infoPage").style.display = "none"
function inputFunction() {
    var img = document.getElementById("myImage");
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
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
                    console.log(j)
                    console.log(a);
                    console.log(b);
                    img.src = imgs[j][a];
                    img.alt = imgs[j][a];
                    c1.src = walk[a][0];
                    c1.alt = walk[a][0];
                    c2.src = walk[a][1];
                    c2.alt = walk[a][1];
                    c3.src = walk[a][2];
                    c3.alt = walk[a][2];
                }
            }
        }
    }
}

function GoBack(){
    document.querySelector("#searchPage").style.display = "block"
    document.querySelector("#infoPage").style.display = "none"
}

/* Buttons */


const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length -1;

nextSlide.addEventListener("click",function() {
    if (curSlide === maxSlide){
        curSlide =0;
    } else {
        curSlide++;
    }

    slides.forEach((slide,indx) =>{
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function(){
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});
