var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {},
    _featured: new Array(),
    _collections: new Array(),
    _products: new Array(),
    _orders: new Array()
};

$(document).on("ready", function () {

    app.router = new app.routers.AppRouter();
    
    /*app.utils.api.initFB(function(response) {
    	
    });*/
    
    
    
    /*
    app.utils.templates.load(["HomeView", "ProductView", "ProductListItemView"],
		function () {
		
			app.utils.api.loadData();
			
			app.router = new app.routers.AppRouter();
			Backbone.history.start();
	});
	
	*/
	$.ajax({ 
			url: 'http://app.begoodclothes.com/api/',
			data: {
				request: 'products', 
				limit: '20'
			},
			dataType: "json",
			type: 'POST',
			crossDomain: true,
			success: function(status) { 
			console.log(status);
				console.log(JSON.parse(status.products));
				var product, products;
				products = JSON.parse(status.products);
				console.log(products);
				products.products.forEach(function(product) {
					product = {"id": product.id, "title": product.title, "image": product.image.src, "type": product.product_type, "tags": product.tags, "price": product.variants[0].price, "comparePrice": product.variants[0].compare_at_price, "vendor": product.vendor},
					app._products.push(product);	
				});
				console.log(app._products);
				app.utils.templates.load(["HomeView", "ProductView", "ProductListItemView"],
					function () {
						app.router = new app.routers.AppRouter();
						Backbone.history.start();
					});
			},
			error: function(status) {
				$('.scroller', this.el).append('Error getting Products');
				console.log(status);
				
			}
	});  
   
});