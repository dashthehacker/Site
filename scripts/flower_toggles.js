style = window.top.document.getElementById("flowerstyle");
styles = [
    `I can't write CSS here bcuz it's not a carbon copy of the one in the <style> so this thing secretly has nothing and I gotta overwrite it`,
    `    .flowers {
        background: url("/assets/other/blinkies/dividers/vine27.gif");
        height: 32px;
        visibility: visible;
    }`,
    `    .flowers {
        background: url("/assets/other/blinkies/dividers/vine37.gif");
        height: 32px;
        visibility: visible;
    }`,`/* No border enabled */`
]
styles[0] = style.textContent;
function determineborder() {
    let stylecode = style.textContent;
    for (let i = 0; i < styles.length; i++) {
        if (stylecode === styles[i]) {
            return i;
        }
    }
    console.log("none hit!")
    return 666;
}

function swapflowers() {
    let style_index = determineborder();
    if (style_index !== styles.length-1) {
        style_index++;
        style.textContent = styles[style_index];
    } else {
        style_index = 0;
        style.textContent = styles[style_index];
    }
    localStorage.setItem("divider", style_index);
}

// LocalStorage stuff
if (localStorage.getItem("divider") === null){
    localStorage.setItem("divider",0);
} else{
    style.textContent = styles[localStorage.getItem("divider")];
}


trigger = document.getElementById("toggleflowers");
trigger.addEventListener("click", swapflowers);