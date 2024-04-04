const allBtns=document.querySelectorAll('.btn')
const theBox=document.querySelectorAll('.boxImg')
const TheSearch=document.querySelector('.search')

function function1(typedEvent){

  // console.log(typedEvent)
  // console.log(typedEvent.target)
  console.log(typedEvent.target.value.toLowerCase().trim())
  //to convert uppercase alphabets into lowercase and to neglect any spaces
  typedText=typedEvent.target.value.toLowerCase().trim()

  theBox.forEach((selctBox)=>{//using foreach going thorough all boxes
    console.log(selctBox.dataset.item)
    //when we search for theBox.dataset.item we get the value typed ie cake
    // <div class="boxImg" this value=>(data-item="cake")><img src="Rainbow-Cake.jpg"/></div>

//selctBox.dataset.item means from each box get the name ie from filter
    const selectedOne=selctBox.dataset.item
//giving a variable name
    console.log(selectedOne)

    if(selectedOne.includes(typedText)){
      //if the name of the box==typed text in the search bar
      selctBox.style.display="block"//block means visible
    }
    else{
      selctBox.style.display="none"//none emeans hidden
    }
  })

  allBtns.forEach((defBtn) => {
    defBtn.classList.remove('btn_highlit');
  });
  allBtns[0].classList.add('btn_highlit');
}


TheSearch.addEventListener('keyup',(typedEvent)=>function1(typedEvent))
//when something is typed we toggle the fn funtion1 by sending the parameter typedEvent










function function2(nowClick){
  nowClick.preventDefault()

 allBtns.forEach((defBtn)=>{
  defBtn.classList.remove('btn_highlit')

 })

nowClick.target.classList.add('btn_highlit');

const FilterImage=nowClick.target.dataset.filter;

        theBox.forEach((selctBox)=>{
          if(FilterImage=='All'){
            selctBox.style.display='block'
          }
          else{
            const boxFilter = selctBox.dataset.item;
            if(boxFilter==FilterImage){
              selctBox.style.display ='block';
            }
            else{
              selctBox.style.display='none'
            }
          }
        })
}



allBtns.forEach((selcBtn)=>{
  selcBtn.addEventListener('click',(nowClick)=>function2(nowClick))

})