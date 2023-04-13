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
      ["EPtoLH.png", "EPtoLIBR.png", "EPtoLH.png", "EPtoAG.png", "EPtoHPER.png",
      "EPtoOSC.png", "EPtoOSC.png", "EPtoLIBR.png", "EPtoKC.png",
      "EPtoLH.png", "EPtoOSC.png", "EPtoLH.png", "EPtoOSC.png",
      "EPtoOSC.png", "EPtoLH.png", "EPtoFAC.png", "EPtoOSC.png", "EPtoLH.png",
      "EPtoLH.png", "EPtoLH.png", "EPtoLH.png", "EPtoOSC.png",
      "EPtoLH.png", "EPtoLH.png", "EPtoKC.png", "EPtoLIBR.png", "EPtoLH.png",],
      ["HPERtoLH.png", "HPERtoLIBR.png", "HPERtoLH.png", "HPERtoAG.png", "HPERtoHPER.png",
      "HPERtoOSC.png", "HPERtoOSC.png", "HPERtoLIBR.png", "HPERtoKC.png",
      "HPERtoLH.png", "HPERtoOSC.png", "HPERtoLH.png", "HPERtoOSC.png",
      "HPERtoOSC.png", "HPERtoLH.png", "HPERtoFAC.png", "HPERtoOSC.png", "HPERtoLH.png",
      "HPERtoLH.png", "HPERtoLH.png", "HPERtoLH.png", "HPERtoOSC.png",
      "HPERtoLH.png", "HPERtoLH.png", "HPERtoKC.png", "HPERtoLIBR.png", "HPERtoLH.png",],
      ["KNtoLH.png", "KNtoLIBR.png", "KNtoLH.png", "KNtoAG.png", "KNtoKN.png",
      "KNtoOSC.png", "KNtoOSC.png", "KNtoLIBR.png", "KNtoKC.png",
      "KNtoLH.png", "KNtoOSC.png", "KNtoLH.png", "KNtoOSC.png",
      "KNtoOSC.png", "KNtoLH.png", "KNtoFAC.png", "KNtoOSC.png", "KNtoLH.png",
      "KNtoLH.png", "KNtoLH.png", "KNtoLH.png", "KNtoOSC.png",
      "KNtoLH.png", "KNtoLH.png", "KNtoKC.png", "KNtoLIBR.png", "KNtoLH.png",],
      ["KCtoLH.png", "KCtoLIBR.png", "KCtoLH.png", "KCtoAG.png", "KCtoKC.png",
      "KCtoOSC.png", "KCtoOSC.png", "KCtoLIBR.png", "KCtoKC.png",
      "KCtoLH.png", "KCtoOSC.png", "KCtoLH.png", "KCtoOSC.png",
      "KCtoOSC.png", "KCtoLH.png", "KCtoFAC.png", "KCtoOSC.png", "KCtoLH.png",
      "KCtoLH.png", "KCtoLH.png", "KCtoLH.png", "KCtoOSC.png",
      "KCtoLH.png", "KCtoLH.png", "KCtoKC.png", "KCtoLIBR.png", "KCtoLH.png",],
      ["LIBRtoLH.png", "LIBRtoLIBR.png", "LIBRtoLH.png", "LIBRtoAG.png", "LIBRtoLIBR.png",
      "LIBRtoOSC.png", "LIBRtoOSC.png", "LIBRtoLIBR.png", "LIBRtoLIBR.png",
      "LIBRtoLH.png", "LIBRtoOSC.png", "LIBRtoLH.png", "LIBRtoOSC.png",
      "LIBRtoOSC.png", "LIBRtoLH.png", "LIBRtoFAC.png", "LIBRtoOSC.png", "LIBRtoLH.png",
      "LIBRtoLH.png", "LIBRtoLH.png", "LIBRtoLH.png", "LIBRtoOSC.png",
      "LIBRtoLH.png", "LIBRtoLH.png", "LIBRtoLIBR.png", "LIBRtoLIBR.png", "LIBRtoLH.png",],
      ["LHtoLH.png", "LHtoLIBR.png", "LHtoLH.png", "LHtoAG.png", "LHtoLH.png",
      "LHtoOSC.png", "LHtoOSC.png", "LHtoLIBR.png", "LHtoLH.png",
      "LHtoLH.png", "LHtoOSC.png", "LHtoLH.png", "LHtoOSC.png",
      "LHtoOSC.png", "LHtoLH.png", "LHtoFAC.png", "LHtoOSC.png", "LHtoLH.png",
      "LHtoLH.png", "LHtoLH.png", "LHtoLH.png", "LHtoOSC.png",
      "LHtoLH.png", "LHtoLH.png", "LHtoLH.png", "LHtoLIBR.png", "LHtoLH.png",],
      ["LCtoLH.png", "LCtoLIBR.png", "LCtoLH.png", "LCtoAG.png", "LCtoHPER.png",
      "LCtoOSC.png", "LCtoOSC.png", "LCtoLIBR.png", "LCtoKC.png",
      "LCtoLH.png", "LCtoOSC.png", "LCtoLH.png", "LCtoOSC.png",
      "LCtoOSC.png", "LCtoLH.png", "LCtoFAC.png", "LCtoOSC.png", "LCtoLH.png",
      "LCtoLH.png", "LCtoLH.png", "LCtoLH.png", "LCtoOSC.png",
      "LCtoLH.png", "LCtoLH.png", "LCtoKC.png", "LCtoLILC.png", "LCtoLH.png",],
      ["RAGtoLH.png", "RAGtoLIBR.png", "RAGtoLH.png", "RAGtoAG.png", "RAGtoHPER.png",
      "RAGtoOSC.png", "RAGtoOSC.png", "RAGtoLIRAG.png", "RAGtoKC.png",
      "RAGtoLH.png", "RAGtoOSC.png", "RAGtoLH.png", "RAGtoOSC.png",
      "RAGtoOSC.png", "RAGtoLH.png", "RAGtoFAC.png", "RAGtoOSC.png", "RAGtoLH.png",
      "RAGtoLH.png", "RAGtoLH.png", "RAGtoLH.png", "RAGtoOSC.png",
      "RAGtoLH.png", "RAGtoLH.png", "RAGtoKC.png", "RAGtoLIRAG.png", "RAGtoLH.png",],
      ["MACtoLH.png", "MACtoLIMAC.png", "MACtoLH.png", "MACtoAG.png", "MACtoHPER.png",
      "MACtoOSC.png", "MACtoOSC.png", "MACtoLIMAC.png", "MACtoKC.png",
      "MACtoLH.png", "MACtoOSC.png", "MACtoLH.png", "MACtoOSC.png",
      "MACtoOSC.png", "MACtoLH.png", "MACtoFAC.png", "MACtoOSC.png", "MACtoLH.png",
      "MACtoLH.png", "MACtoLH.png", "MACtoLH.png", "MACtoOSC.png",
      "MACtoLH.png", "MACtoLH.png", "MACtoKC.png", "MACtoLIMAC.png", "MACtoLH.png",],
      ["FACtoLH.png", "FACtoLIFAC.png", "FACtoLH.png", "FACtoAG.png", "FACtoHPER.png",
      "FACtoOSC.png", "FACtoOSC.png", "FACtoLIFAC.png", "FACtoKC.png",
      "FACtoLH.png", "FACtoOSC.png", "FACtoLH.png", "FACtoOSC.png",
      "FACtoOSC.png", "FACtoLH.png", "FACtoFAC.png", "FACtoOSC.png", "FACtoLH.png",
      "FACtoLH.png", "FACtoLH.png", "FACtoLH.png", "FACtoOSC.png",
      "FACtoLH.png", "FACtoLH.png", "FACtoKC.png", "FACtoLIFAC.png", "FACtoLH.png",],
      ["OSCtoLH.png", "OSCtoLIFAC.png", "OSCtoLH.png", "OSCtoAG.png", "OSCtoHPER.png",
      "OSCtoOSC.png", "OSCtoOSC.png", "OSCtoLIFAC.png", "OSCtoKC.png",
      "OSCtoLH.png", "OSCtoOSC.png", "OSCtoLH.png", "OSCtoOSC.png",
      "OSCtoOSC.png", "OSCtoLH.png", "OSCtoFAC.png", "OSCtoOSC.png", "OSCtoLH.png",
      "OSCtoLH.png", "OSCtoLH.png", "OSCtoLH.png", "OSCtoOSC.png",
      "OSCtoLH.png", "OSCtoLH.png", "OSCtoKC.png", "OSCtoLIFAC.png", "OSCtoLH.png",],
      ["SCtoLH.png", "SCtoLISC.png", "SCtoLH.png", "SCtoAG.png", "SCtoHPER.png",
      "SCtoOSC.png", "SCtoOSC.png", "SCtoLISC.png", "SCtoKC.png",
      "SCtoLH.png", "SCtoOSC.png", "SCtoLH.png", "SCtoOSC.png",
      "SCtoOSC.png", "SCtoLH.png", "SCtoSC.png", "SCtoOSC.png", "SCtoLH.png",
      "SCtoLH.png", "SCtoLH.png", "SCtoLH.png", "SCtoOSC.png",
      "SCtoLH.png", "SCtoLH.png", "SCtoKC.png", "SCtoLISC.png", "SCtoLH.png",],
      ["DHtoLH.png", "DHtoLIBR.png", "DHtoLH.png", "DHtoAG.png", "DHtoHPER.png",
      "DHtoOSC.png", "DHtoOSC.png", "DHtoLIBR.png", "DHtoKC.png",
      "DHtoLH.png", "DHtoOSC.png", "DHtoLH.png", "DHtoOSC.png",
      "DHtoOSC.png", "DHtoLH.png", "DHtoSC.png", "DHtoOSC.png", "DHtoLH.png",
      "DHtoLH.png", "DHtoLH.png", "DHtoLH.png", "DHtoOSC.png",
      "DHtoLH.png", "DHtoLH.png", "DHtoKC.png", "DHtoLISC.png", "DHtoLH.png",],
      ["LGtoLH.png", "LGtoLIBR.png", "LGtoLH.png", "LGtoAG.png", "LGtoHPER.png",
      "LGtoOSC.png", "LGtoOSC.png", "LGtoLIBR.png", "LGtoKC.png",
      "LGtoLH.png", "LGtoOSC.png", "LGtoLH.png", "LGtoOSC.png",
      "LGtoOSC.png", "LGtoLH.png", "LGtoSC.png", "LGtoOSC.png", "LGtoLH.png",
      "LGtoLH.png", "LGtoLH.png", "LGtoLH.png", "LGtoOSC.png",
      "LGtoLH.png", "LGtoLH.png", "LGtoKC.png", "LGtoLISC.png", "LGtoLH.png",],
      ["PGtoLH.png", "PGtoLIBR.png", "PGtoLH.png", "PGtoAG.png", "PGtoHPER.png",
      "PGtoOSC.png", "PGtoOSC.png", "PGtoLIBR.png", "PGtoKC.png",
      "PGtoLH.png", "PGtoOSC.png", "PGtoLH.png", "PGtoOSC.png",
      "PGtoOSC.png", "PGtoLH.png", "PGtoSC.png", "PGtoOSC.png", "PGtoLH.png",
      "PGtoLH.png", "PGtoLH.png", "PGtoLH.png", "PGtoOSC.png",
      "PGtoLH.png", "PGtoLH.png", "PGtoKC.png", "PGtoLISC.png", "PGtoLH.png",],
      ["RHtoLH.png", "RHtoLIBR.png", "RHtoLH.png", "RHtoAG.png", "RHtoHPER.png",
      "RHtoOSC.png", "RHtoOSC.png", "RHtoLIBR.png", "RHtoKC.png",
      "RHtoLH.png", "RHtoOSC.png", "RHtoLH.png", "RHtoOSC.png",
      "RHtoOSC.png", "RHtoLH.png", "RHtoSC.png", "RHtoOSC.png", "RHtoLH.png",
      "RHtoLH.png", "RHtoLH.png", "RHtoLH.png", "RHtoOSC.png",
      "RHtoLH.png", "RHtoLH.png", "RHtoKC.png", "RHtoLISC.png", "RHtoLH.png",],
      ["PLXtoLH.png", "PLXtoLIBR.png", "PLXtoLH.png", "PLXtoAG.png", "PLXtoHPER.png",
      "PLXtoOSC.png", "PLXtoOSC.png", "PLXtoLIBR.png", "PLXtoKC.png",
      "PLXtoLH.png", "PLXtoOSC.png", "PLXtoLH.png", "PLXtoOSC.png",
      "PLXtoOSC.png", "PLXtoLH.png", "PLXtoSC.png", "PLXtoOSC.png", "PLXtoLH.png",
      "PLXtoLH.png", "PLXtoLH.png", "PLXtoLH.png", "PLXtoOSC.png",
      "PLXtoLH.png", "PLXtoLH.png", "PLXtoKC.png", "PLXtoLISC.png", "PLXtoLH.png",],
      ["WHtoLH.png", "WHtoLIBR.png", "WHtoLH.png", "WHtoAG.png", "WHtoHPER.png",
      "WHtoOSC.png", "WHtoOSC.png", "WHtoLIBR.png", "WHtoKC.png",
      "WHtoLH.png", "WHtoOSC.png", "WHtoLH.png", "WHtoOSC.png",
      "WHtoOSC.png", "WHtoLH.png", "WHtoSC.png", "WHtoOSC.png", "WHtoLH.png",
      "WHtoLH.png", "WHtoLH.png", "WHtoLH.png", "WHtoOSC.png",
      "WHtoLH.png", "WHtoLH.png", "WHtoKC.png", "WHtoLISC.png", "WHtoLH.png",],
      ["GHtoLH.png", "GHtoLIBR.png", "GHtoLH.png", "GHtoAG.png", "GHtoHPER.png",
      "OSCtoGH.png", "OSCtoGH.png", "GHtoLIBR.png", "GHtoKC.png",
      "GHtoLH.png", "OSCtoGH.png", "GHtoLH.png", "OSCtoGH.png",
      "OSCtoGH.png", "GHtoLH.png", "GHtoSC.png", "OSCtoGH.png", "GHtoLH.png",
      "GHtoLH.png", "GHtoLH.png", "GHtoLH.png", "OSCtoGH.png",
      "GHtoLH.png", "GHtoLH.png", "GHtoKC.png", "GHtoLISC.png", "GHtoLH.png",],
      ["AGtoLH.png", "AGtoLIBR.png", "AGtoLH.png", "AGtoAG.png", "AGtoHPER.png",
      "AGtoOSC.png", "AGtoOSC.png", "AGtoLIBR.png", "AGtoKC.png",
      "AGtoLH.png", "AGtoOSC.png", "AGtoLH.png", "AGtoOSC.png",
      "AGtoOSC.png", "AGtoLH.png", "AGtoSC.png", "AGtoOSC.png", "AGtoLH.png",
      "AGtoLH.png", "AGtoLH.png", "AGtoLH.png", "AGtoOSC.png",
      "AGtoLH.png", "AGtoLH.png", "AGtoKC.png", "AGtoLISC.png", "AGtoLH.png",]
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
    searchStr = document.getElementById('searchStr').value
    document.querySelector("#searchPage").style.display = "none"
    document.querySelector("#infoPage").style.display = "block"
    //const searchStrArray = searchStr.split(" ")
    for (let i = 0; i < keyWords.length; i++) {
        if (searchStr === keyWords[i]) {
            peopleCurrentVarStr = people[i]
            phoneNumberStr = phone[i]
            peopleCurrentVarStr.setA
            document.getElementById("department").innerHTML = department[i]
            document.getElementById("location").innerHTML = locationA[i]
            document.getElementById("people").innerHTML = peopleCurrentVarStr.replace(/,/g, "<br>")
            document.getElementById("phone").innerHTML = phoneNumberStr.replace(/,/g, "<br />")
            //Changing image based on index
            img.src = imgs[j][i];
            img.alt = imgs[j][i];
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
