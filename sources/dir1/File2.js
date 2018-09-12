
var Person3 = function(first, last, middle) {
    this.first = first; //TODO
    this.middle = middle; //TODO
    this.last = last; //TODO
};

Person3.prototype = {

    whoAreYou : function() {  //TODO
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;  //TODO
    }

};
