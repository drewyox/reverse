$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var stringOneInput = $("input#stringOne").val();
    var stringOneReverse = $("input#stringOne").val();

    function reverseString(str) {
    return str.split("").reverse().join("");
}
var reversed = reverseString(stringOneReverse);

if (stringOneInput===reversed) {
  document.write("This is a palindrome");
}
else {
  console.log("This is no palindrome.")
};

    // console.log(stringOneInput);
    event.preventDefault();
  });
});
