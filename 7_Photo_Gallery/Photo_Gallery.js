const viewer = document.createElement('div');
viewer.id = 'TheViewer';
 // Add the 'active' class before appending to the document body

document.body.appendChild(viewer);
// viewer.classList.add('active');thi blurs the screen

const theImages=document.querySelectorAll('.theImg')



function funtion1(Selected_image){
 viewer.classList.add('active')
 const Enlarged_img=document.createElement('img')

 Enlarged_img.classList.add('enlarged-image');
 Enlarged_img.id="Enlarge"
 Enlarged_img.src=Selected_image.src


 viewer.append(Enlarged_img)

}





theImages.forEach(Selected_image=>{
 Select_image.addEventListener('click',()=>funtion1(Selected_image))
})


function funtion2(){
  viewer.classList.remove('active')

  viewer.innerHTML = '';
}


viewer.addEventListener('click',funtion2)