
var Person2 = function(first, last, middle) {
    this.first = first;  //TODO
    this.middle = middle;  //TODO
    this.last = last; //TODO
};

Person2.prototype = {

    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};
