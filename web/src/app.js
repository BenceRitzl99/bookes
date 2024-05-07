const doc = {
    bookBody: document.querySelector("#bookBody"),
    

}
var BookList = []

function getBooks() {
    const url = "http://localhost:8000/employees"
    fetch(url).then(response => response.json()).then(result => {
        BookList = result
        renderTable()
    })
}

function renderTable() {
    BookList.forEach( book => {
        var tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${book.id}</td>
        <td>${book.cim}</td>
        <td>${book.szerzo}</td>
        <td>${book.ar}</td>
        
        `
        doc.bookBody.appendChild(tr)
        
    });
}



getBooks()