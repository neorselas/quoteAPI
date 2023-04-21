// const options1 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bc5647c06emsh11c1e4b46841a3dp12ba38jsn4969024edf0a',
// 		'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
// 	}
// };

// fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', options1)
// 	.then(response => response.json())
// 	.then(response => 
//         {console.log(response);
//          document.getElementById('daily').innerHTML = response.text + "-" + response.author;
//         })
// 	.catch(err => console.error(err));




const options2 = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'bc5647c06emsh11c1e4b46841a3dp12ba38jsn4969024edf0a',
		'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
	},
	body: '{}'
};

fetch('https://quotel-quotes.p.rapidapi.com/quotes/random', options2)
	.then(response => response.json())
	.then(response => {console.log(response); 
        document.getElementById('text').innerHTML = response.quote;
        document.getElementById('text2').innerHTML = response.name;
    })
	.catch(err => console.error(err));