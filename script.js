const openModal=document.querySelector("#open")
const closeModal=document.querySelector("#close")
const dialog=document.querySelector('dialog')

openModal.addEventListener('click',()=>{
    dialog.showModal()
})
closeModal.addEventListener('click',()=>{
    dialog.close()
})

const myLibrary=[]

function Book(author,title,pages,readStatus){
    this.author=author
    this.title=title
    this.pages=pages
    this.readStatus
}

function addBookToLibrary(){

}