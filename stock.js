
//when add button is clicked or enter is pressed in input

//add li element to ticker with value entered

//add li element to price, get price of stock

//add li element to mkt cap, get mkt cap of stock



function createURL(stock){
	var apiURL = "https://api.iextrading.com/1.0/stock/" + stock + "/quote";
	console.log(apiURL);
}

createURL("googl");





/*
	function getData(item){
		 $.getJSON(apiURL, function(result){
			console.log(result.latestPrice)
		});
		
}
	getData();
*/


/*$("#symbol").keypress(function(event){
	if(event.which === 13){
		
		symbol = $(this).val();
		
		console.log(symbol);
	}
});


if(symbol != ""){
console.log(symbol);
}
*/
