const a = document.querySelectorAll(".teks");
const b = document.getElementsByClassName("1");
let i = 0;
a[0].innerHTML = b[i].innerHTML;
i = 1;
setInterval(function() {
  if (i > 4) {
    i = 0;
  }
  a[0].innerHTML = b[i].innerHTML;
  i += 1;
}, 30000);
