
import get from "./get.js";
import fetchData from "./fetchData.js";



const data = await fetchData();
const {technology} = data;
const onLoadTech = technology[0];

const techForm = get('.tech_form');
const techContent = get('.technology');



const technologyAction = () =>{



    techForm.innerHTML = technology.map((input,index)=>{
        return ` <input type="text" placeholder="${index + 1}" name="${input.name}" readonly>`
    }).join(' ')

const {portrait}  = onLoadTech.images

techContent.innerHTML = `<div class="tech_details">
<p class="tech_role text-secondary text-uppercase" > The terminology...</p> 
 <p class="tech_name text-uppercase">${onLoadTech.name}</p>
 <p class="tech_desc"> ${onLoadTech.description}</p>
</div>
<div class="tect_image">
  <img src="${portrait}" alt="">
</div>`


const selectInput = techForm.querySelectorAll('input');
const techName = get('.tech_name')

selectInput.forEach(select =>{
    if(select.name === techName.textContent)  select.classList.add('selected');
    select.addEventListener('click',()=>{

        selectInput.forEach(input =>{
            input.classList.remove('selected')
        })
        select.classList.add('selected');
    const filteredTech =   technology.filter(tech =>{
          if(select.name === tech.name )return tech
      })
 techContent.innerHTML = filteredTech.map(tech=>{
    const {portrait} = tech.images
    return `<div class="tech_details">
    <p class="tech_role text-secondary text-uppercase" > The terminology...</p> 
     <p class="tech_name text-uppercase">${tech.name}</p>
     <p class="tech_desc"> ${tech.description}</p>
   </div>
   <div class="tect_image">
      <img src="${portrait}" alt="">
   </div>`
}).join(' ')
    })
})
}
technologyAction();


