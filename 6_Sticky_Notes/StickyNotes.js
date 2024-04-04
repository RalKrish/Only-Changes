const TheContainer=document.querySelector('.container')
const AddBtn=document.querySelector('.AddBtn')


// const data1 =  [
//   { id: 2469, content: "Sample 1" },
//   { id: 2569, content: "Sample 2" },
//   { id: 2769, content: "Sample 3" },
//   { id: 2468, content: "Sample 4" },
//   { id: 2479, content: "Sample 5" }
// ];

// const data2=data1+updateNote()

// Save data1 to localStorage ||||||to find away so that i will have them updated here and

// localStorage.setItem('myData1', JSON.stringify(data1));


function getData1(){
  return JSON.parse(localStorage.getItem('myData1')||'[]')
}
getData1().forEach(theElement => {//for adding a note before the button
  console.log(theElement.id)
  console.log(theElement.content)
  const textElement=Create_Note(theElement.id,theElement.content)
  TheContainer.insertBefore(textElement,AddBtn)
});

function Create_Note(id,content){ //to create the content of the each note
  const textElement=document.createElement('textarea');
  textElement.classList.add('sticky')
  textElement.value=content;
  textElement.placeholder="Enter something please"

  textElement.addEventListener("change" , ()=>{
    updateNote(id,textElement.value)
  })
  return textElement;

}

function AddNote(){
  const notes=getData1()
  const noteObject={
      id:Math.floor(Math.random()*100000),
      content:""

  }

  const textElement=Create_Note(noteObject.id,noteObject.content);
  TheContainer.insertBefore(textElement,AddBtn);
  notes.push(noteObject);
  savenotes(notes);
}
AddBtn.addEventListener('click',AddNote)

function savenotes(notes){
  localStorage.setItem('myData1',JSON.stringify(notes))
}

function updateNote(id, content) {
  const notes = getData1();
  const updateElement = notes.find(note => note.id === id);
  if (updateElement) {
    updateElement.content = content;
    savenotes(notes); // Save the updated notes back to localStorage
  } else {
    console.log("Note with id", id, "not found");
  }
}
