// Define a function getFirstSelector(selector),
// which accepts a selector and returns the
// first element that matches.
function getFirstSelector(selector){
  var answer = document.querySelector(selector);
  return answer;

}

function nestedTarget(){
  return document.querySelector('#nested .target');
}


function deepestChild(){
    return document.querySelector('#grand-node  div div div div ');
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll(".ranked-list");
  for (var i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children;
    for( var j = 0; j < children.length; j++){
      children[j].innerHTML  = parseInt(children[j].innerHTML) + n
    }



}
}
