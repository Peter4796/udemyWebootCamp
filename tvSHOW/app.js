const form= document.querySelector("#searchForm")
form.addEventListener('submit', async function (e) {
    e.preventDefault();
   const searchTerm= form.elements.query.value;
   const config= {params:{q:searchTerm}}
  const res= await axios.get(`https://api.tvmaze.com/search/shows`, config)
  makeImgs(res.data)
})

const makeImgs=(shows)=>{
    for(let result of shows){
        const img= document.createElement('IMG')
        img.src=result.show.image.medium;
        document.body.appendChild(img)
    }
}