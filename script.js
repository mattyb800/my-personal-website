const h2 = document.createElement("h2");
h2.textContent = "Learning to Code";

document.querySelector("body").appendChild(h2);

const input = document.getElementById('pic');
input.addEventListener('click', function() {
    alert('This is Bubs!');
})