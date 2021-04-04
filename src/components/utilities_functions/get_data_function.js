import Axios from 'axios';

const GetData = async (url) => {

    let respone = await Axios.get(url);
    // console.log(respone.data)
    return (respone.data);
}

export default GetData;