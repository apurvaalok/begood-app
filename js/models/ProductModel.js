app.models.Product = Backbone.Model.extend({

    initialize:function () {
        this.tags = new app.models.TagsCollection();
    },

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.product.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.ProductCollection = Backbone.Collection.extend({

    model: app.models.Product,

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.product.findByTitle(options.data.name).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.TagsCollection = Backbone.Collection.extend({

    model: app.models.Product,

    sync: function(method, model, options) {
        if (method === "read") {
            console.log("find by tag");
            app.adapters.product.findByTag(this.tags).done(function (data) {
                options.success(data);
            });
        }
    }

});