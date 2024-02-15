import axios from "axios";

export const getGallery = async (query, page) => await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=20&client_id=jyHtcJel_8-BSXel3Wj3NRyx8I2Wm-Lt1taR-d_iRF8`
);