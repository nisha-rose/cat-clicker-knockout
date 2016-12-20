var initialcatList = [
                    {
                        name:"Cute",
                        imgsrc:'img/1413379559_412a540d29_z.jpg',
                        nicknames: ['tabby','kitty','mitty','vitty'],
                        imgAttribute: 'image of a cat',
                        clicks: 0
                    },
                    {
                        name:"pinky",
                        imgsrc:'img/22252709_010df3379e_z.jpg',
                        nicknames: ['pikyyy'],
                        imgAttribute: 'image of a cat',
                        clicks: 0
                    },
                    {
                        name:"dudu",
                        imgsrc:'img/4154543904_6e2428c421_z.jpg',
                        nicknames: ['duuu'],
                        imgAttribute: 'image of a cat',
                        clicks: 0
                    },
                    {
                        name:"duno",
                        imgsrc:'img/434164568_fea0ad4013_z.jpg',
                        nicknames: ['duy'],
                        imgAttribute: 'image of a cat',
                        clicks: 0
                    },
                    {
                        name:"kitty",
                        imgsrc:'img/9648464288_2516b35537_z.jpg',
                        nicknames: ['kituu'],
                        imgAttribute: 'image of a cat',
                        clicks: 0
                    }
          ];
var Cat = function(data){
    this.catname = ko.observable(data.name);
    this.imgsource = ko.observable(data.imgsrc);
    this.imgAttribute = ko.observable(data.imgAttribute);
    this.clickcount = ko.observable(data.clicks);
    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function(){
        if(this.clickcount() < 10){
            return('infant');
        }
        else if(this.clickcount() < 100){
            return('child');
        }
        else if(this.clickcount() < 200){
            return('teen');
        }
        else {
            return('adult');
        }
    }, this);
}
var viewModel = function () {
    var self = this;

    this.catList = ko.observableArray([]);

    initialcatList.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementcounter = function(){
        self.currentCat().clickcount(self.currentCat().clickcount()+1);
    };
    this.catimage = function(data){
                self.currentCat(data);
    };
};

ko.applyBindings(new viewModel());

