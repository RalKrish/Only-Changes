document.addEventListener("DOMContentLoaded",()=>{

const all=document.querySelector("#all");
const allText=document.querySelector("#all_value");
const CodeText=document.querySelector('#code_space')
const TheTarget=document.querySelector('.container')
const Button_1=document.querySelector("#btnCopy")
const Border_style=document.querySelector('#border-style')
const BorderSize=document.querySelector('#size')
const SizeText=document.querySelector('#all_size')
const MyColor=document.querySelector('#TheColor')

let ReqChange=""
// CodeText.value="hello there";

let ReqBorder_style="dotted"
let TheBorderSize="5px"
let reqColor="violet"


const theUpdate1=()=>{
allText.innerText=(all.value)+"px"
SizeText.innerText=(BorderSize.value)+"px"

 ReqChange=`
  border-radius:${all.value}px;
  border:${TheBorderSize}px
  ${ReqBorder_style}
  ${reqColor};
`;
CodeText.value=ReqChange;
TheTarget.style.cssText=ReqChange

all.addEventListener("mousemove", theUpdate1 );
// all.addEventListener("change", theUpdate1 );



}
function theUpdate2(){
  ReqBorder_style=Border_style.value
  theUpdate1()
}
Border_style.addEventListener('change',theUpdate2)



function theUpdate3(){
  TheBorderSize=BorderSize.value

  theUpdate1()
}
BorderSize.addEventListener('change',theUpdate3)
BorderSize.addEventListener("mousemove", theUpdate3 );


function theUpdate4(){
 reqColor=MyColor.value
 theUpdate1()
}

MyColor.addEventListener('change',theUpdate4)

const toCopy=()=>{
  CodeText.select();
  document.execCommand('copy')
  alert('Code copied')
}
Button_1.addEventListener('click',toCopy);


theUpdate1()

})