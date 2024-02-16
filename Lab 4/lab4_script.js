//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// University of Ottawa                                                                                                                         //
// Lab 4 - Javascript File                                                                                                                      //
// Authors: Philip Anderegg & Benjamin Flynn                                                                                                    //
// Student Numbers: 8191716 & 300106230                                                                                                         //
// Course Name: www Structures, Techniques & Standards                                                                                          //
// Course Code: CSI 3140                                                                                                                        //
// Professor: Iluju Kiringa                                                                                                                     //
// Due Date: February 17th, 2023                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////// 11.7 /////////////////////////////////////////////////////////////////////////////

const articles = ["the", "a", "one", "some","any"]
const nouns = ["boy", "girl", "dog", "town","car"]
const verbs = ["drove", "jumped", "ran", "walked","skipped"]
const prepositions = ["to", "from", "over", "under", "on"]
const container = document.getElementById("sentence-container")
const result = document.getElementById("result")


function generateSentence() {
    return "Once upon a time " + articles[Math.floor(Math.random() * articles.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + " " + verbs[Math.floor(Math.random() * verbs.length)] + " " + prepositions[Math.floor(Math.random() * prepositions.length)] + " " + articles[Math.floor(Math.random() * articles.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + " THE END.";
}

function clearSentences() {
    container.innerHTML = "";
}

function printSentences() {
    for(let i = 0; i < 20 ; i++) {
        container.innerHTML += "<p>"+ generateSentence() + "</p>" + "<br>"
    }
}

/////////////////////////////////////////////////////////////// 11.14 /////////////////////////////////////////////////////////////////////////////

  function countLetterOccurrences() {
    var text = document.getElementById("textInput").value.toLowerCase();
    var letterCounts = new Array(26).fill(0);

    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        letterCounts[charCode - 97]++;
      }
    }

    var output = "        ------------------------\n";
    output    += "        |Letter  |Occurrences  |\n";
    output    += "        ------------------------\n"
    for (var j = 0; j < 26; j++) {
      output += "        |" + String.fromCharCode(j + 97) + "       " + "|" + letterCounts[j] + "            " + "|\n";
      output += "        ------------------------\n";
    }

    result.innerHTML = output;
  }

  function hideTable() {
    result.innerHTML = "";
}