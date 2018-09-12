
var Person3 = function(first, last, middle) { //TODO
    this.first = first; //TODO
    this.middle = middle; //TODO
    this.last = last; //TODO
};

Person3.prototype = { //TODO

    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};
