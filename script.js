let btn = document.querySelector('button')
let inp = document.querySelector('input')
let ul = document.querySelector('ul')



btn.addEventListener('click', ()=>{
        fetch(`https://api.nationalize.io/?name=${inp.value}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            ul.innerHTML =''
            data.country.map((item)=>{
             
                 ul.innerHTML +=`
                      <li> ${item.country_id}            ${(item.probability *100) .toFixed(2)}</li>
                 `
            })            
        })
        inp.value =''
})