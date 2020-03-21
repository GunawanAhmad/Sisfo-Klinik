const a = document.querySelectorAll(".teks");
const b = document.getElementsByClassName("1");
console.log(b[0].innerHTML);

let i = 0;
a[0].innerHTML = b[i].innerHTML;
setInterval(function() {
  if (i > 4) {
    i = 0;
  }
  a[0].innerHTML = b[i].innerHTML;
  i += 1;
}, 5000);
