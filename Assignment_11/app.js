
function showAlert() {
    alert("This is an alert messege");
}


function showMsg(name) {
    alert("You clicked on " + name + " mobile");
}


function resetImage(img) {
    img.src = "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80";
}

function hideImage(id) {
    document.getElementById("img" + id).style.display = "block"
}


function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.remove();
}
function changeImage(img) {
    img.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&q=80";
}

function resetImage(img) {
    img.src = "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&q=80";
}

// 5. Counter
var counter = 0;

function increase() {
    counter++;
    document.getElementById("count").innerHTML = counter;
}

function decrease() {
    counter--;
    document.getElementById("count").innerHTML = counter;
}
