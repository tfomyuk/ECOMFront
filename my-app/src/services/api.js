import authApi from './apiConfig'

async function getAllTshirts(){
    const tshirt = await authApi.get('api/t-short/get/all')
    return tshirt.data.tshirts
}
export { getAllTshirts}