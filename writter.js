// type writter function logic
let i = 0;

function typeWriter() {
  const txt = 'Hello World,';
  const speed = 150;

  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
