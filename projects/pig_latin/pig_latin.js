var rButton = document.getElementById("rulesButton")
var wordBox = document.getElementById('wordBox')
var submitButton = document.getElementById('submitButton')
var textBox = document.getElementById('textBox')

var leftPup = document.getElementById('leftEye')
var rightPup = document.getElementById('rightEye')

var vowels = ['a','e','i','o','u']


splitWords=()=>{
  var final = []
  var wordsList= textBox.value.split(' ')
  for(var i=0; i<wordsList.length;i++){
    final.push(translateWord(wordsList[i]))
  }
  wordBox.innerHTML = final.join(" ")
}

function translateWord(word){
  var wordList = word.split("")
  var firstLetter = wordList[0]
  var secondLetter = wordList[1]

  if(firstLetter == 'q' && secondLetter == 'u'){
    wordList.shift()
    wordList.shift()
    wordList.push(firstLetter)
    wordList.push(secondLetter)
    wordList.push('ay')
  }else if(vowels.includes(firstLetter)){
    wordList.shift()
    wordList.push(firstLetter)
    wordList.push('way')
  }else{
    var tempList = []
    for(var i=0; i<wordList.length; i++){
      if(!vowels.includes(wordList[i])){
        wordList.push(wordList[i])
        tempList.push(wordList[i])
      }else{
        break
      }
    }
    for(var i=0; i<tempList.length; i++){
      wordList.shift()
    }
    wordList.push('ay')
  }
  var combinedWord = wordList.join('')
  return combinedWord
}


submitButton.onclick = splitWords




function dispRules(){
  var rules = "PIG LATIN RULES:\n* For words beginning with a vowel, add 'way' to the end.\n\n* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add 'ay'. \n\n* For words beginning with 'y', treat 'y' as a consonant.\n\n* If first consonants include 'qu', move the 'u' along with the 'q'. \n\n * Don't forget about words like 'squeal' where 'qu' doesn't come first!"
  alert(rules)
}
rButton.onclick = dispRules

window.onmousemove = function(e){
  var lEyeLeft = leftPup.getBoundingClientRect().left
  var lEyeRight = leftPup.getBoundingClientRect().right
  var lEyeTop = leftPup.getBoundingClientRect().top
  var lEyeBottom = leftPup.getBoundingClientRect().bottom

  var rEyeLeft = rightPup.getBoundingClientRect().left
  var rEyeRight = rightPup.getBoundingClientRect().right
  var rEyeTop = rightPup.getBoundingClientRect().top
  var rEyeBottom = rightPup.getBoundingClientRect().bottom
  console.log(e.pageY)

  if(e.pageY < lEyeTop-20){
    leftPup.style.top = `0px`
  }else if(e.pageY >= lEyeTop-20 && e.pageY < lEyeBottom+50){
    leftPup.style.top = `${e.pageY/15}px`
  }else{
    leftPup.style.top = `37px`
  }
  if(e.pageY < rEyeTop-20){
    rightPup.style.top = `0px`
  }else if(e.pageY >= rEyeTop-20 && e.pageY < rEyeBottom+50){
    rightPup.style.top = `${e.pageY/15}px`
  }else{
    rightPup.style.top = `37px`
  }

  if(e.pageX < lEyeLeft){
    leftPup.style.left = `0px`
  }else if(e.pageX >= lEyeLeft && e.pageX < lEyeRight){
    leftPup.style.left = `${e.pageX/15}px`
  }else{
    leftPup.style.left = `37px`
  }
  if(e.pageX < rEyeLeft){
    rightPup.style.left = `0px`
  }else if(e.pageX >= rEyeLeft&& e.pageX < rEyeRight){
    rightPup.style.left = `${e.pageX/15}px`
  }else{
    rightPup.style.left = `37px`
  }
}
