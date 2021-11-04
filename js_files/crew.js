import  get from './get.js'
import fetchData from "./fetchData.js";


const crewContent = get('.crew_content');
const formSelecter = get('.selectForm');



window.addEventListener('DOMContentLoaded',async ()=>{

    const data = await fetchData();
    const {crew} = data;
    const onLoadCrew = crew[0];
    const {png} = onLoadCrew.images


formSelecter.innerHTML =   crew.map(crew=>{
    return `<input class="inputs" type="radio" id="${crew.name}" name="fav_language" value="${crew.name}">`
    }).join(' ')

const selectInput = formSelecter.querySelectorAll('input');
crewContent.innerHTML = `<div class="crew_details">

    <p class="crew_role text-secondary">${onLoadCrew.role}</p> 
    <p class="crew_name">${onLoadCrew.name}</p> 
 
    <p class="crew_desc">${onLoadCrew.bio}</p>
   <div >

   </div>
   </div>

    <div class="crew_image">
      <img src="${png}" alt="anousheh">
   </div>`

   // check which crew member is displayed on page load
 
const crewName = get('.crew_name');
   selectInput.forEach(select =>{
   if(select.value === crewName.textContent)select.checked = true;
})


const crewActions = () =>{
 selectInput.forEach(input =>{
    input.addEventListener('click',()=>{
      
       const selectedValue = input.value;
       const filteredCrew =  crew.filter(crew => {
           if(selectedValue === crew.name){
            
            return crew; 
        }
       })
       
    const  crewMember = filteredCrew[0];
    const {png} = crewMember.images
     crewContent.innerHTML = `
     <div class="crew_details">
    <p class="crew_role text-secondary">${crewMember.role}</p> 
    <p class="crew_name">${crewMember.name}</p> 
 
    <p class="crew_desc"> ${crewMember.bio} </p>
   <div>

    </div>
    </div>

     <div class="crew_image">
       <img src="${png}" alt="anousheh">
     </div>`

    })
  })

}

    
    crewActions();
})




