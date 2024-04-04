const TheContainer=document.querySelector('.container')
const AddBtn=document.querySelector('.AddBtn')

// const data1=[

//   {id:2546,content:'Sample1'},
//   {id:2846,content:'Sample2'},
//   {id:2589,content:'Sample3'},
//   {id:2466,content:'Sample4'},
//   {id:2396,content:'Sample5'},
//   {id:2126,content:'Sample6'},
// ]
// localStorage.setItem("myData1",JSON.stringify(data1))

function getTheData(){

return JSON.parse (localStorage.getItem('myData1')|| '[]');


//1 To retieve the data from local storage
}

getTheData().forEach(eachElement=>{
 //2 iterating through each loop and getting each entity and storing in 'eachElement' variable name
  //  console.log(eachElement);
  // console.log(eachElement.id);
  // console.log(eachElement.content);


  //PLZ NOTE, THIS WHOLE BELOW THING DISPLAYS THE 6 DEAFULT SAMPLE notes
  const CreateDefNote = Create_Note(eachElement.id, eachElement.content)
  //7 passing the parameter we receive from the local storage that is stored in..
  //'eachElement' variable & passing that to our newly created note
  //fn(Create_Note)
  //and then create a var 'CreateNewNote'
  TheContainer.insertBefore(CreateDefNote,AddBtn)
  //8 to add our note ie 'CreateNewNote' before 'addBtn' button inside
  // the page ie 'TheContainer'
  //PLZ NOTE THIS WHOLE TOP THING DISPLAYS THE 6 DEAFULT SAMPLE notes
})

function Create_Note(id,content){
  //3 to create a new note with receving parameters id&content from
  //local storage via getTheData().forEach(eachElement=>,,(line 93)
 const NewNote=document.createElement('textarea')
 //4 to Create a new textarea a HTML element using js this is not..
 //.. created in HTML at first we are creating it using js
 NewNote.classList.add('theNote')
 //5 assigning name to the newly created class in step 4 (line26)

 NewNote.value=content;
 console.log(NewNote.value)
 //6 passing the 'content' parameter given to (Create_Note)fn
 //to our newly created note entity ie for 'NewNote'
 NewNote.placeholder='Please enter something'//place holder when we crete any new note


 NewNote.addEventListener('change', ()=> updateTheNote(id,NewNote.value))
 //15 if we change something inside the content we would then call the fn and send the parameter
  //id and the our content typed and call the fn 'updateTheNote'
  //NewNote.value is the typed value

  // NewNote.addEventListener('change', updateTheNote(id,NewNote.value))XXXXXX
  //XXX not to be used in this way bacaus it instaed of getting the
  //updateTheNote it gets  NewNote.value from the line45 which is empty
  //updateTheNote(id,NewNote.value){ here you need to return
   //something here inorder to work}
  //
NewNote.addEventListener('dblclick',()=>{
  const verify=confirm("Are you sure to delete this")
  //19 adding delete fn to the current note selected
  if(verify){
    deleteTheNote(id,NewNote)
  }
})

 return NewNote;
 //20 the return statement in this context is used to pass the newly created
 // textarea element back to the calling code for further manipulation or use.

}

function updateTheNote(id,content){
  //16 updating the innercontent of a particular note is considered also receiving
  //parameters which contain the id and'content' from NewNote.value iethe typed one.
  const TheNote=getTheData()//gets the local data again to filter
  const updateContent=TheNote.filter((selectedNote)=>selectedNote.id==id)[0]
  //updatecontent stores the current object ie the current one selected
  //17 if our value lies in a particular index then we can access it using this
  //and if value we are accessing is repated then [0] gives the Ist occurence only.
  updateContent.content=content;
 //18 left content refers to selcted entity the the place where it should be
 //updated inside right content is the parameter we have received  from line55
  Save_Notes(TheNote)
}

function deleteTheNote(id,NewNote){
  const Del_Note=getTheData().filter((delItem)=>delItem.id!=id);
  //21 this fn is used to give the ones we have not selcted thus by filtering
  //the one we ahve not selcted it indirectly deletes(negelcts) the the one
  // we have chosen.
  Save_Notes(Del_Note);
  //22 the remaining entities are stored here inside the Save_Notes fn
  TheContainer.removeChild(NewNote);
  //23 then  the curent NewNote that is textarea an enity created will be
  //removed from the container.
}



function AddNewNote(){
  //9 to create a fn so that a new note can be added
  //each time the btn is pressed

  const Notes=getTheData()
  //const containing the local data from line 15 just to contain the parsed data
  const noteObj={ //10 to create a new obj.
    id:Math.floor((Math.random())*10000),//which
    content:"" //contains random id and empty content inside it.
  }
  const CreateNewNote =Create_Note(noteObj.id, noteObj.content)//to
  //11 send the new created note to Create_Note fn for creating new notes
  TheContainer.insertBefore(CreateNewNote,AddBtn)
//12 the new notes are inserted before AddBtn inside the 'TheContainer'

Notes.push(noteObj)
//14 To update the next entity inside the local database by pushing inside 'Notes'
//the 'noteObj'entity

//IMP instead of a fn we can also use this
// localStorage.setItem("myData1",JSON.stringify(Notes))

 Save_Notes(Notes)//15 To send the 'Notes' as a parameter to the Save_Function


}

AddBtn.addEventListener('click',AddNewNote)
//13 to add onclick to AddBtn triggerring (AddNewNote) fn

function Save_Notes(Notes){//16 Rceiving the 'notes as aprameter
  //and then converting it to strings'
  localStorage.setItem("myData1",JSON.stringify(Notes))
  //14 this sets the new note inside the local storage.
}
