const MainImg = document.querySelector('.imageBox1')
const Thumbnail = document.querySelectorAll('.imgCont')
const activeImg = document.querySelector('.active')

// console.log(MainImg.src)//for checking


function function1(selImg){
  Thumbnail.forEach(thumbnail => {
    if (thumbnail !== selImg) {
        thumbnail.classList.remove('active');
    }
});

selImg.classList.add('active');
// let Main_src = MainImg.querySelector('img').getAttribute('src');
// console.log(Main_src)
// // console.log(selImg )
let selImg_src = selImg.querySelector('img').getAttribute('src');
// console.log(selImg_src )

MainImg.querySelector('img').src=selImg_src
// Main_src=selImg_src
}




Thumbnail.forEach((selImg)=>{
selImg.addEventListener('mouseover',()=>function1(selImg))

// selImg.addEventListener('mouseout',()=>function2(selImg))

})

//use this fn if you wan to disable the selected image and show the default image

// function function2(){
//   MainImg.querySelector('img').src="cake2.jpg"
//  }
