import axios from "axios";

export function getBook() {
    return axios
    .get(`https://openlibrary.org/works/OL5815517W.json`)
    .then(response => response.data)
}