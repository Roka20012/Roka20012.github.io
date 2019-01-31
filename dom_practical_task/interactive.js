"use strict";

const nav = document.getElementById("navbar");
const text = document.getElementById("text");
const burger = document.getElementsByClassName("burger2")[0];
const menuItem = nav.querySelectorAll("a");

function hideBurgerMenu(target) {
    if (burger.classList.contains("open")) {
        nav.classList.toggle("menu-open");
        burger.classList.toggle("open");
    }
}

function setColorForElement(target) {
    menuItem.forEach(el => {
        el.classList.remove("check");
    });
    target.classList.add("check");
}

function showStory(index) {
    let textChild =  text.querySelectorAll('div');

    textChild.forEach(el => {
        el.id = "";
    });
    textChild[index].id = "animeText";
}

function checkStory({ target }) {
<<<<<<< HEAD
    if(target.closest("#navbar > a")) {
        for (let i = 0; i < menuItem.length; i++) {
            if (menuItem[i] === target) {
                showStory(i);
            }
||||||| merged common ancestors

        for (let i = 0; i < menuItem.length; i++) {
            if (menuItem[i] === target) {//визначаємо на який пункт меню ми натиснули
                showStory(i);//показуємо її
            }
=======
    for (let i = 0; i < menuItem.length; i++) {
        if (menuItem[i] === target) {
            showStory(i);
>>>>>>> 10bd53ff2eb4ec3c29d8beac31ad75a4ac3f0e15
        }
    }

<<<<<<< HEAD
        setColorForElement(target);
        hideBurgerMenu(target);
    }
||||||| merged common ancestors
        setColorForElement(target);//додаємо пункту меню відповідний колір
        hideBurgerMenu(target);//ховаємо navbar якщо екран менше 900 px;
=======
    setColorForElement(target);
    hideBurgerMenu(target);
>>>>>>> 10bd53ff2eb4ec3c29d8beac31ad75a4ac3f0e15
}

nav.addEventListener("click", checkStory);

function hideOpenBurgerMenu(e) {
    nav.classList.toggle("menu-open");
    burger.classList.toggle("open");
}

let burgerButton = document.getElementsByClassName("burger")[0];

burgerButton.addEventListener("click", hideOpenBurgerMenu);
