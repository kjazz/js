
var Person3 = function(first, last, middle) { //TODO
    this.first = first; //TODO
    this.middle = middle; //TODO
    this.last = last; //TODO
}; //TODO

Person3.prototype = { //TODO

    whoAreYou : function() { //TODO
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last; //TODO
    }
};
