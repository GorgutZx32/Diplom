import { API_URL, PREFIX_PRODUCT } from "./const.js"
import { createCartProduct } from "./createCartProduct.js";
import { catalogList } from "./elements.js";
import { getData } from "./getData.js"

export const renderListProduct = async (category = 'burger') => {
    catalogList.textContent = '';
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`);
    const ListCard = listProduct.map(createCartProduct);
    catalogList.append(...ListCard);

}