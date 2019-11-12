function ready() {
    console.log("page ready");

    let favs = document.forms.favs;
    let colorEl = favs.element.color;

    ColorEl.onchange = function() {
        let el = document.createElement('p');
        el.innerHTML = "You typed " + colorEl.value;

        today.append(el);
    };

    go.onclick = function() {
        alert("Please don't go!");
    }
}

document.addEvent addEventListener("DOMContentLoaded", ready);


// cs.innerHTML = "Changed";

// cs.innerHTML = "<p>Now a paragraph</p>";

// cs.append("Now");

// setTimeout(() => {
//     cs.append("Latter");
// }, 2000);

// let x = 0;

// setInterval(() => {
//     empty.innerHTML = x + " seconds";
//     x++;
//     if (x > 5) {
//         cs.innerHTML = "Done counting";
//     } else {
//         cs.innerHTML = "Not done counting";
//     }
// }, 1000);

// let doSomething = function(word) {
//     cs.innerHTML = ("saying" + word);
// };

// doSomething(hi);

// let list = [1, 2, 3];

// let i = 00
// while (i < list.length) {
//     console.log("logging " + list[i])
// }