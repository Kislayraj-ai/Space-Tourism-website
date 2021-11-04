const get = (select)=>{
    const element = document.querySelector(select);
    if(element)return element;
    else throw new Error(`Please check selector ${select}`)
}


export default get;