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
				console.log(validator.submitted);
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]').not('[generated]');
					console.log(label.text());
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldname = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldname +'</li>';
				};
				$("#errors ul").html(html);
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
	console.log(data);
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


