import get from "./get.js";
import fetchData from "./fetchData.js";


const listItem = get('.list-items');
const destinationContent = get('.destination_content')

const data = await fetchData();
const {destinations} = data;
const destinationActions = async() =>{

 
 const list = destinations.map((item)=>{
     return `<li class="destination_name">${item.name}</li>`
 }).join(' ')
 listItem.innerHTML = list;

 const destinationName = document.querySelectorAll('.destination_name');
 destinationName.forEach(name =>{
     name.addEventListener('click',(e)=>{
       const filterDestinations = destinations.filter(item =>{
       if(e.target.textContent === item.name){
           return item;
       }
    })


const select = filterDestinations.map(item =>{
    const {png} = item.images
    return ` <div class="image_container">
    <img src=${png} alt="mars">
  </div>
  <div class="destination_details text-center">
        
  <p> ${item.name}</p>
   ${item.description}
 
   <div class="divider mt-3 mb-3"></div>

  <div class="destination_footer justify-content-around">

  <div class="average_distance"> 
 <p> Avg. distance</p>
  <h3>${item.distance}</h3>
  </div>
  <div class="travel"> 
<p>  Est. travel time</p>
 
  <h3>  ${item.travel}</h3>
  </div>
 
  </div>
  </div>`
}).join('');

destinationContent.innerHTML = select;

    })
 })
}

destinationActions()

const initialContent = () => {
const onLoadContent = destinations.slice(0,1).map(item =>{
    const {png} = item.images
    return ` <div class="image_container ">
    <img src=${png} alt="mars">
  </div>
  <div class="destination_details text-center ">
        
  <p class="text-center"> ${item.name}</p>
    
   ${item.description}
 
   <div class="divider mt-3 mb-3"></div>

  <div class="destination_footer d-flex justify-content-around">
 <div class="average_distance"> 
 <p> Avg. distance</p>
  <h3>${item.distance}</h3>
  </div>

  <div class="travel"> 
 <p>Est. travel time</p>
 
  <h3>  ${item.travel}</h3>
  </div>
  </div>
  </div>`
})

destinationContent.innerHTML = onLoadContent

}

window.addEventListener('DOMContentLoaded',initialContent())

