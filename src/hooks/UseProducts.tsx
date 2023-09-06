import axios from "axios";

interface Response {
	text: string;
	author: string;
	category: string;
	id: number;
}

const baseUrl =  "https://dummyjson.com/products";

  //https://dummyjson.com/products?skip=5&limit=10


  /* providing token in bearer */
//   fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
      
//       username: 'kminchelle',
//       password: '0lelplR',
//       // expiresInMins: 60, // optional
//     })
//   })

//   .then(res => res.json())
//   .then(console.log);

export const getProductsRequest = async () => {

  const response = await axios.get(`${baseUrl}`);
 
  return response.data.products;
};
