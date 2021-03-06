app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                        "home",
        "products/:id":            "productDetails",
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.homeView.$el);
    },

    productDetails: function (id) {
        var product = new app.models.Product({id: id});
        product.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.ProductView({model: data}).render().$el);
            }
        });
    }

});