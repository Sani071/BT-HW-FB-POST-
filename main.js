let wrapper = document.querySelector('.wrapper');
let inputBox = document.querySelector('.inputbox');
let postBtn = document.querySelector('.postbtn');
let cancelBtn = document.querySelector(".cancel");
let textArea = document.querySelector('.textarea');
let bgColor = document.querySelector('.cname');
let fColorList = document.querySelector('.fontColorList');
let bgColorList = document.querySelector('.bgColorList');

let postWrapper = document.querySelector('.postwrapper');
let likeBtn = document.querySelector(".like-btn");
let cmntBtn = document.querySelector(".cmnt-btn");
let nameField = document.querySelector("#nameField")
let title = document.querySelector("#title")
let time = document.querySelector("#time")

let cmntWrapper = document.querySelector(".cmnt-wrapper");
let cmntViewWrapper = document.querySelector('.cmnt-view-wrapper');
let cmntFld = document.querySelector(".cmnt-fld");
let cmntView = document.querySelector(".cmnt-view");
let cmntSendBtn = document.querySelector(".cmnt-send-btn");

let roundProNamePostH = document.querySelector('#roundProph')
let roundProNamePost = document.querySelector('#roundProp')
let roundProNameCW = document.querySelector('#roundProcw')
let roundProNameCV = document.querySelector('#roundProc')



postBtn.addEventListener('click',() =>{
    postWrapper.style.visibility = "visible";
    let text = inputBox.value;
    textArea.innerHTML = text;
    inputBox.value = " ";
    let userName = nameField.value;
    title.innerHTML = userName;
    nameField.value = "";
    let roundUserName = userName.split("");
    roundProNamePostH.innerHTML = roundUserName[0].toUpperCase()
    roundProNamePost.innerHTML = roundUserName[0].toUpperCase()
    roundProNameCV.innerHTML = roundUserName[0].toUpperCase()
    roundProNameCW.innerHTML = roundUserName[0].toUpperCase()
   
});

function changeBgColor(id) {
    textArea.style.background = document
        .getElementById(id)
        .innerHTML;
    setTimeout(() => {
        fColorList.style.visibility = "visible";
        bgColorList.style.visibility = "hidden";
    }, 4000)

}
function changeFontColor(id) {
    textArea.style.color = document
        .getElementById(id)
        .innerHTML;
    wrapper.style.visibility = 'hidden';
    setTimeout(() => {
        fColorList.style.visibility = "hidden"
        postWrapper.style.position = "absolute";
        postWrapper.style.top = "10px";

    }, 4000)

};

likeBtn.addEventListener("click", () => {
    likeBtn.style.color = "blue";

});

cmntBtn.addEventListener("click", () => {
    cmntWrapper.style.visibility = "visible"
});

cmntSendBtn.addEventListener("click", () => {
    cmnt = cmntFld.value;
    console.log(cmnt);
    cmntView.innerHTML = cmnt;
    cmntViewWrapper.style.visibility = 'visible';
    cmntFld.value = " ";
    if (cmnt === null) {
        cmntWrapper.style.visibility = 'hidden';
    }
});
setInterval(() => {
    time.innerHTML++
}, 60000)

cancelBtn.addEventListener("click", () => {
    wrapper.style.visibility = "hidden"
});
