

var names = [];

function getStockArray(){
	$(".names").each(function(){
		names.push($(this).text());
	})
	return names;
}

getStockArray();

function createURL(symbol){

	 return "https://api.iextrading.com/1.0/stock/" + symbol + "/quote";

}

function getLatestPrice(symbol){
	$.getJSON(createURL(symbol), function(result){
		var price = result.latestPrice;
		$("#" + symbol.toLowerCase()).text("" + price);
		
	});
		
}


function getMktCap(symbol){
	$.getJSON(createURL(symbol), function(result){
		var mktCap = result.marketCap;
		$("#" + symbol.toLowerCase() + "MktCap").text("" + mktCap);
		
	});
}

function setMktCaps(){
	for (var i = 0; i < names.length; i++) {
	getMktCap(names[i]);
	}
}

setMktCaps();


function setPrices(){
	for (var i = 0; i < names.length; i++) {
	getLatestPrice(names[i]);
	}
}

setPrices();





/*

when add button is clicked or enter is pressed in input

add li element to ticker with value entered

add li element to price, get price of stock

add li element to mkt cap, get mkt cap of stock


FOR ADD STOCK FUNCTION

$("#symbol").keypress(function(event){
	if(event.which === 13){
		
		symbol = $(this).val();
		
		console.log(symbol);
	}
});
*/

/*


if(symbol != ""){
console.log(symbol);
}
*/
