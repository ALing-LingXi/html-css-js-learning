// let myHead = document.querySelector('h1')
// myHead.innerText="Hello World"
// const myImage = document.querySelector('img')
// myImage.onclick=()=>{
// const image = myImage.getAttribute("src")
// if(image==="firefox-icon.png"){
//   myImage.setAttribute("src","two.jpg")
// }
// else{
//   myImage.setAttribute("src","firefox-icon.png")
// }
// }
// let myHeading = document.querySelector('h1')
// let myButton = document.querySelector("button")
// function setUserName() {
//   const myName = prompt("Please input your name")
//   if(!localStorage.getItem("name")){
//   localStorage.setItem("name",myName)
//   myHeading.innerText=`Mozilla is cool,${myName}`
//   }
//   else{
//    const StorageName = localStorage.getItem("name")
//      myHeading.innerText=`Mozilla is cool,${StorageName}`
//   }
// }

// myButton.onclick = function () {
//   setUserName();
// };


let myHead = document.querySelector('h1');
myHead.innerText = "Hello World";

const myImage = document.querySelector('img');
myImage.onclick = () => {
  const image = myImage.getAttribute("src");
  if (image === "firefox-icon.png") {
    myImage.setAttribute("src", "two.jpg");
  } else {
    myImage.setAttribute("src", "firefox-icon.png");
  }
};

let myHeading = document.querySelector('h1');
let myButton = document.querySelector("button"); // 修正了这里的拼写错误

function setUserName() {
  const myName = prompt("请输入您的名字。");
  if(!myName){
    setUserName()
  }
  else{
   localStorage.setItem('name',myName)
   myHeading.innerText=`Mozilla is cool,${myName}`
  }
}

myButton.onclick = function () {
  setUserName();
};

//这部分由ai生成
window.onload = function() {
  const savedName = localStorage.getItem('name');
  if (savedName) {
    myHeading.innerText = `Mozilla is cool,${savedName}`;
  }
};

myButton.onclick = function () {
  setUserName();
};