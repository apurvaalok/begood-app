app.adapters.product = (function () {

    console.log("Loading localstorage adapter module");

    var findById = function (id) {
            var deferred = $.Deferred();
            var product = null;
            var l = products.length;
            for (var i = 0; i < l; i++) {
                if (products[i].id === id) {
                    product = products[i];
                    break;
                }
            }
            deferred.resolve(product);
            return deferred.promise();
        },
    
    	findByTitle = function (searchKey) {
            var deferred = $.Deferred(),
                products = JSON.parse(window.localStorage.getItem("products")),
                results = products.filter(function (element) {
                    return element.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByTags = function (tags) {
            var deferred = $.Deferred(),
                products = JSON.parse(window.localStorage.getItem("products")),
                results = products.filter(function (element) {
                    return element.tags.toLowerCase().indexOf(tags.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        };


    // Store sample data in Local Storage
    /*window.localStorage.setItem("products", JSON.stringify(
        [
            {"id": 1, "tags": "James", "lastName": "King", "price": 0, "firstName": "", "reports": 4, "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "james_king.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "tags": "Julie", "lastName": "Taylor", "price": 1, "firstName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "julie_taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "tags": "Eugene", "lastName": "Lee", "price": 1, "firstName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "eugene_lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "tags": "John", "lastName": "Williams", "price": 1, "firstName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "tags": "Ray", "lastName": "Moore", "price": 1, "firstName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "ray_moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "tags": "Paul", "lastName": "Jones", "price": 4, "firstName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "paul_jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "tags": "Paula", "lastName": "Gates", "price": 4, "firstName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "paula_gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
            {"id": 8, "tags": "Lisa", "lastName": "Wong", "price": 2, "firstName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "lisa_wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
            {"id": 9, "tags": "Gary", "lastName": "Donovan", "price": 2, "firstName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "gary_donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
            {"id": 10, "tags": "Kathleen", "lastName": "Byrne", "price": 5, "firstName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
            {"id": 11, "tags": "Amy", "lastName": "Jones", "price": 5, "firstName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "amy_jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
            {"id": 12, "tags": "Steven", "lastName": "Wells", "price": 4, "firstName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "steven_wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
        ]
    ));*/
     window.localStorage.setItem("products", app._products);

        // The public API
    return {
    	findById: findById,
        findByTitle: findByTitle,
        findByTags: findByTags
    };


}());