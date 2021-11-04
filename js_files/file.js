
const navItem = document.querySelectorAll('.nav-item');
const path = window.location.pathname;

const actual = path.slice(1);

navItem.forEach(item =>{
    item.addEventListener('click',()=>{
        navItem.forEach(nav=>{
            nav.classList.remove('item');
        })
        const itemName = `${item.textContent.toLowerCase()}.html`;
        if(actual == itemName){

            item.classList.add('item');
        }
    })

})