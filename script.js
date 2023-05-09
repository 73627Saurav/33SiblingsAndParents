console.log(document.body.firstChild) // div
console.log("----------end---------")
a = document.body.firstChild
console.log(a.parentNode) // body
console.log("----------end---------")
console.log(document.documentElement.parentNode) // HTMLdocument
console.log("----------end---------")
console.log(a.parentElement) // body
console.log("----------end---------")
console.log(document.documentElement.parentElement) // null
console.log("----------end---------")
console.log(a.firstChild.nextSibling) // second
console.log("----------end---------") 

// document.documentElement.parentNode - parentNode will return anything only when it is Node.

// document.documentElement.parentElement - document.documentElement which is HTML, its parentElement will show null because its parent is not an Element. 