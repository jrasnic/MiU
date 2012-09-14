$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#additem').on('pageinit', function(){


	delete $.validator.methods.date;

		var myForm = $('#mainform'),
			errorslink = $('#errorslink')
			;

		    myForm.validate({
			invalidHandler: function(form, validator) {
				errorslink.click();				
				var html = '';
				$("#errors ul").html("");
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]').not('[generated]');
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldname = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldname +'</li>';
				};
				$("#errors ul").html(html);
				window.scrollTo(0,50);
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	


	var id = Math.floor(Math.random()*10000001);
		
		
	//getPlatformValues();
	//getRecommendationValue();
	var item = [];
	for(var key in data){
		var itemName = data[key].name;
		var itemValue = data[key].value;
		var label = $('label[for^="'+ itemName +'"]').not('[generated]');
		var legend = label.closest('fieldset').find('.ui-controlgroup-label');
		var fieldname = legend.length ? legend.text() : label.text();
		item[key] = [fieldname, itemValue];
		
		
	};

	// 	item.gname = ["Game Name: ", data[0].value];
	// 	item.genre = ["Genre: ", data[1].value];
	// 	item.releaseDate = ["Release Date: ", data[2].value];
	// 	item.platforms = ["Platforms:", data[3].value];
	// 	item.quality = ["Quality: ", data[4].value];
	// 	item.recommendation = ["Recommendation: ", data[5].value];
	// 	item.notes = ["Notes: ", data[6].value];
	localStorage.setItem(id, JSON.stringify(item));
	alert("Rating Saved!");	
	console.log(localStorage);
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){
	if(localStorage.length === 0){
			alert("There are no ratings to clear!");
			window.location.reload();
		} else{
			var ask = confirm("Are you sure you want to cleart all saved data?");
			if(ask){
				localStorage.clear();
				alert("All ratings are deleted!");
				window.location.reload();
			};
			return false;
		};

};


