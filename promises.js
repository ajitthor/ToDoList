let data = ["Harry", "Ross", "Bruce",  "Cook", "Carolyn",  "Morgan", "Albert", "Walker", "Randy", "Reed",  "Larry", "Barnes", "Lois", "Wilson", "Jesse",  "Campbell", "Ernest", "Rogers", "Theresa",  "Patterson", "Henry", "Simmons", "Michelle",  "Perry", "Frank", "Butler", "Shirley" ];
function displayData(){
  for(let names of data){
    console.log(names)
  }
}
function getData(){
  displayData()
}
// getData()
// promises 
let promise = new Promise((resolve, reject) => {
  if (data!=0){
   resolve(setTimeout(getData, 2000))
  }
  else{
    reject("Please enter a value")
  }
})
promise.then((message)=>{
  console.log(message)
})
promise.catch((message)=>{
  console.log(message)
})
//Fetching data from the api

let section = document.getElementById("section-el")
 let data1 = ""
 fetch('https://dummyjson.com/products')
 .then(response=>response.json())
 .catch(data1=>{
alert("Error,check URL and try again")
 })
 .then(data1=>{
  data1.products.forEach(element => {
    console.log(element)
    section.innerHTML+= 
   ` <li>
   <div>
    <h2> ${element.title}</h3>
    </div>
    <div>
    <img src="${element.images[0]}" alt="Picture of the below product" />
    </div>
    <div>
    <h2>Price:$${element.price}</h3>
    </div>
    <div>
    <p id="descrpition">${element.description}</p>
    </div>
</li>`  });
 })
 
