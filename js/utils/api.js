app.utils.api = (function() {

    var loadData = function(callback) {

        $.ajax({ 
			url: 'http://app.begoodclothes.com/api/',
			data: {
				request: 'products', 
				limit: '250'
			},
			dataType: "json",
			type: 'POST',
			crossDomain: true,
			success: function(status) { 
				console.log(status);
				var product;
				status.products.forEach(function(product) {
					product = {"id": product.id, "title": product.title, "image": product.image.src, "type": product.product_type, "tags": product.tags, "price": product.variants[0].price, "comparePrice": product.variants[0].compare_at_price, "vendor": product.vendor},
					app._products.push(product);	
				});
				console.log(app._products);
				
			},
			error: function(status) {
				$('.scroller', this.el).append('Error getting Products');
				console.log(status);
				
			}
		});  
		
		$.ajax({ 
			url: 'http://app.begoodclothes.com/api/',
			data: {
				request: 'custom_collections', 
				limit: '250'
			},
			dataType: "json",
			type: 'POST',
			crossDomain: true,
			success: function(status) { 
				
				var collection;
				status.custom_collections.forEach(function(collection) {
					console.log(collection);
					if (collection.title == "Frontpage")
					{
						$.ajax({ 
							url: 'http://app.begoodclothes.com/api/',
							data: {
								request: 'products', 
								collection_id: collection.id,
								limit: '250'
							},
							dataType: "json",
							type: 'POST',
							crossDomain: true,
							success: function(status) { 
				
								console.log(status);
								var product;
								status.products.forEach(function(product) {
									product = {"id": product.id, "title": product.title, "image": product.image.src, "type": product.product_type, "tags": product.tags, "price": product.variants[0].price, "comparePrice": product.variants[0].compare_at_price, "vendor": product.vendor},
									app._featured.push(product);	
								});
								console.log(app._featured);
									
							
				
							},
							error: function(status) {
								$('.scroller', this.el).append('Error getting FrontPage');
								console.log(status);
				
							}
						});  
					
					}
					collection = {"id": collection.id, "title": collection.title, "handle": collection.handle};
					app._collections.push(collection);
						
				});
				console.log(app._collections);
				
			},
			error: function(status) {
				$('.scroller', this.el).append('Error getting Collections');
				console.log(status);
				
			}
		});  
    }

    // The public API
    return {
        loadData: loadData
    };

}());