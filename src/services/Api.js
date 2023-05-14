const DATAURL = "https://fakestoreapi.com/products/"

const getData = async()=>{
    const response = await fetch(DATAURL)
    const data = response.json()
    return data
}

export {getData}