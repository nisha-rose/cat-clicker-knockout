var viewModel = function () {
    this.catname = ko.observable('cute');
    this.imgsource = ko.observable('img/1413379559_412a540d29_z.jpg');
    this.imgAttribute = ko.observable('image of a cat');
    this.clickcount = ko.observable(0);
    this.incrementcounter = function(){
        this.clickcount(this.clickcount()+1);
    };
    this.level = ko.computed(function(){
        if(this.clickcount() < 10){
            return('infant');
        }
        else {
            return('child');
        }
    }, this);
};

ko.applyBindings(new viewModel());
//ko.applyBindings(viewModel());
