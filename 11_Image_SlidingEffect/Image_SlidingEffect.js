const thumbNail = document.querySelectorAll('.thumbNail')
console.log(thumbNail)

let thumbId=1

thumbNail.forEach((selc)=>{
selc.addEventListener('click',(e)=>{
  e.preventDefault();
  thumbId=selc.dataset.id
  console.log(thumbId)
  moveImg(thumbId)
})

})

function moveImg(thumbId)
{

const imgWidth=document.querySelector('.imgs:first-child').clientWidth
console.log(imgWidth)

let reqMovement = (thumbId-1)*imgWidth;
console.log(reqMovement)

const imgSelectr=document.querySelector('.mainImgBox')

imgSelectr.style.transform = `translate(-${reqMovement}px)`;

}