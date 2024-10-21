const openModal=document.querySelector("#open")
const closeModal=document.querySelector("#close")
const dialog=document.querySelector('dialog')

openModal.addEventListener('click',()=>{
    dialog.showModal()
})
closeModal.addEventListener('click',()=>{
    dialog.close()
})


function Book(author,title,pages,readStatus){
    this.author=author
    this.title=title
    this.pages=pages
    this.readStatus=readStatus
}
const book0=new Book('J.R.R Tolkien',"The Hobbit",300,"Read")
const book1=new Book('J.R.R Tolkien',"The Hobbit",300,"Read")
const book2=new Book('J.R.R Tolkien','The Lord of The Flies',200,"Not Read")

const submit=document.querySelector('#submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()  
    addBookToLibrary()
    // loadBooks()  
})




const myLibrary=[book0,book1,book2]

// console.log(myLibrary[0])

function addBookToLibrary(){
    let authorIn=document.querySelector('#author')
    let titleIn=document.querySelector('#title')
    let pagesIn=document.querySelector('#pages')
    let readIn=document.querySelector('#read')
    if(authorIn.value==="" ||pagesIn.value===""||titleIn.value===""||readIn.value===""  ){
        alert("Please make sure all input fields are filled")
        // return
    }else{
        if(readIn.checked){
            readIn.value="Read"
        }else{
            readIn.value="Not read"
        }
        let book=new Book(authorIn.value,titleIn.value,pagesIn.value,readIn.value)
        myLibrary.push(book)
        // return
        // loadBooks()
    }
    

}

// const title1=document.querySelector("#title1")
// const author1=document.querySelector("#author1")
// const pages1=document.querySelector("#pages1")
// const read1=document.querySelector("#read1")
// title1.textContent=`Title: ${book1.title}`
// author1.textContent=`Author: ${book1.author}`
// pages1.textContent=`Number of pages: ${book1.pages}`
// read1.textContent=`Read or Not Read: ${book1.readStatus}`


const books=document.querySelector(".books")
// const bookEg=document.createElement("div")
// bookEg.setAttribute('id','book1')

// const docFragment=document.createDocumentFragment

    

function loadBooks(){
    for (i=0;i<myLibrary.length;i++){
        
        const booktitle=document.createElement("h1")
        const bookauthor=document.createElement("p")
        const bookpages=document.createElement("p")
        const bookread=document.createElement("p")
        const bookRemove=document.createElement("button")
        const booktoRead=document.createElement("button")

        const bookEg=document.createElement("div")
        bookEg.setAttribute('id',`book${i}`)
        bookRemove.setAttribute('id','close')
        booktoRead.setAttribute('id','setRead')
        // bookEg.setAttribute('id',`book${i}`)
        booktitle.textContent=myLibrary[i].title
        bookauthor.textContent=myLibrary[i].author
        bookpages.textContent=myLibrary[i].pages
        bookread.textContent=myLibrary[i].readStatus
        bookRemove.textContent="Close Book"
        booktoRead.textContent="Mark as Read"
        bookEg.appendChild(booktitle)
        bookEg.appendChild(bookauthor)
        bookEg.appendChild(bookpages)
        bookEg.appendChild(bookread)
        bookEg.appendChild(bookRemove)
        bookEg.appendChild(booktoRead)

        books.appendChild(bookEg)

        bookRemove.addEventListener('click',()=>{
            myLibrary.splice(myLibrary[i],1)
            books.removeChild(bookEg)
        })

        booktoRead.addEventListener('click',()=>{
            myLibrary[i].readStatus="Read"
            bookread.textContent="Read"
        })
        

    }
}
// loadBooks()
// console.log(loadBooks())
loadBooks()

// function removeBook(){
//     myLibrary.pop(myLibrary[i])
//     booktoRead.
// }