let items = document.getElementsByClassName("item");
let curr = 0;
let counter = 0;

function prev() {
    if (counter > 0) {
        let next = document.getElementsByClassName("next")[0];
        next.style.display = 'block';
        console.log(next)
        curr -= 317;
        Array.from(items).forEach(function (item) {
            item.firstChild.style.right = curr + "px";
        });
        counter--;
        if (counter == 0) {
            let prev = document.getElementsByClassName("prev")[0];
            prev.style.visibility = 'hidden';
        }
    }

}
function next() {

    if (counter < items.length-3) {
       
        let prev = document.getElementsByClassName("prev")[0];
        prev.style.visibility = 'visible';

        curr += 317;
        Array.from(items).forEach(function (item) {
            item.firstChild.style.right = curr + "px";

        });
        counter++;
        if (counter == items.length - 3){
        let next = document.getElementsByClassName("next")[0];
        next.style.display = 'none';
        console.log(next)
        }
    }
}



// This is sidenave Part 

function openNav() {
    // document.querySelector(".home_container").classList.add("overlay");
    document.getElementById("mySidenav").style.right = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.right = "-570px";
}

function openNavSignup() {
    document.getElementById("mySidenavSignup").style.right = "0";
}

function closeNavSignup() {
    document.getElementById("mySidenavSignup").style.right = "-570px";
}