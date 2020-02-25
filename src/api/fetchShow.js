import axios from 'axios';


const fetchShow = async () => {
    return axios
        .get(
            "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
            return res.data;
        });
};

export default fetchShow;