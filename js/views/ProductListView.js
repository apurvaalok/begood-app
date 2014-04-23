app.views.ProductListView = Backbone.View.extend({

    tagName:'ul',

    attributes: {class: 'topcoat-list list'},

    initialize:function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (product) {
            self.$el.append(new app.views.ProductListItemView({model:product}).render().el);
        });
    },

    render:function () {
        this.$el.empty();
        _.each(this.model.models, function (product) {
            this.$el.append(new app.views.ProductListItemView({model:product}).render().el);
        }, this);
        return this;
    }
});

app.views.ProductListItemView = Backbone.View.extend({

    tagName:"li",

    className:"topcoat-list__item",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});