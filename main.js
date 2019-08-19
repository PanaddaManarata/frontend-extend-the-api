var inputfield = document.getElementById('title'); 
var input = inputfield.value;  


const createNote = document.getElementById('create'); 
const deleteNote = document.getElementById('delete'); 
const updateNote = document.getElementById('update'); 
const listNote = document.getElementById('list'); 
const searchNote = document.getElementById('search'); 

const creatBtn = document.getElementById('createBtn')

createNote.addEventListener('click', createForm); 

function createForm(){
    console.log('clicked create')
    
}

// API 

createBtn.addEventListener('click', connectAPI); 
async function connectAPI(e){
    let api = `http://localhost:50/deel3-PHP/extend-the-api/?list`; 
    console.log(api); 
    let response = await axios.get(api); 
    console.log(response.data); 
}