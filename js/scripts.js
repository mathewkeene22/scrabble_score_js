var scrabble_score = function(word) {
   var one_pointers = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
   var two_pointers = ["d", "g"];
   var three_pointers = ["b", "c", "m", "p"];
   var four_pointers = ["f", "h", "v", "w", "y"];
   var five_pointers = ["k"];
   var eight_pointers = ["j", "x"];
   var ten_pointers = ["q", "z"];

   var new_word = word.toLowerCase().split("");

   var counter = 0;
    new_word.forEach(function(letter) {
      if (one_pointers.indexOf(letter) > -1) {
        counter += 1;
      }
      else if (two_pointers.indexOf(letter) > -1) {
        counter += 2;
      }
      else if (three_pointers.indexOf(letter) > -1) {
        counter += 3;
      }
      else if (four_pointers.indexOf(letter) > -1) {
        counter += 4;
      }
      else if (five_pointers.indexOf(letter) > -1) {
        counter += 5;
      }
      else if (eight_pointers.indexOf(letter) > -1) {
        counter += 8;
      }
      else if (ten_pointers.indexOf(letter) > -1) {
        counter += 10;
      }
  });
      return counter;
};

$(document).ready(function() {
  $("form#score").submit(function(event) {
    $("result p").empty();
    var word = $("input#word").val();
    var outcome = scrabble_score(word);
    $("#result p").text(outcome);
    event.preventDefault();
  });
});
