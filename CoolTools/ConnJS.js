import json from '/resources/connectegories.json';
console.log(json);

setTimeout(() => {
    const group1 = document.querySelector("#group1");
    const group2 = document.querySelector("#group2");
    const group3 = document.querySelector("#group3");
    const group4 = document.querySelector("#group4");
    const allGroups = document.querySelector("#allthings");

    new Sortable(group1, {
        group: "wordgroup",
        swap: true, // Enable swap plugin
        swapClass: 'highlight', // The class applied to the hovered swap item
        animation: 150
    });
    new Sortable(group2, {
        group: "wordgroup",
        swap: true, // Enable swap plugin
        swapClass: 'highlight', // The class applied to the hovered swap item
        animation: 150
    });
    new Sortable(group3, {
        group: "wordgroup",
        swap: true, // Enable swap plugin
        swapClass: 'highlight', // The class applied to the hovered swap item
        animation: 150
    });
    new Sortable(group4, {
        group: "wordgroup",
        swap: true, // Enable swap plugin
        swapClass: 'highlight', // The class applied to the hovered swap item
        animation: 150
    });
    new Sortable(allGroups, {
        handle: '.mover',
        swapClass: 'highlight', // The class applied to the hovered swap item
        animation: 150
    });
}, 1000)

function setWords() {
    const allWords = document.querySelector("#wordinput").value.split(",");
    const wordPNodes = document.querySelectorAll(".word > p");
    for (let i = 0; i < 16; i++) {
        wordPNodes[i].innerHTML = allWords[i];
    }
}