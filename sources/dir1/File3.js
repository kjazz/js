
var Person3 = function(first, last, middle) {
    this.first = first;
    this.middle = middle; //TODO
    this.last = last; //TODO
};

Person3.prototype = {

    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};
