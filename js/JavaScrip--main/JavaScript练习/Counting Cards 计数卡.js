let count = 0;
function cc(card) {
  // Only change code below this line
  if(card.length!=0){
      switch(card[card.length-1]){
    case 2:
    case 3:
    case 5:
    case 6:count++ ,card.pop()
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--,card.pop()
    break;
  }
  }


  if(count>0){
    return count+" "+"Bet"
  }
  else{
    return count+""+"Hold"
  }
  // Only change code above this linex
}

cc(2); cc(3); cc(7); cc('K'); cc('A');