
var Person = function(first, last, middle) { //TODO
    this.first = first;  //TODO
    this.middle = middle;  //TODO
    this.last = last;  //TODO
};

Person.prototype = { //TODO

    whoAreYou : function() { //TODO
        return this.first + (this.middle ? ' ' + 'foo' + this.middle: '') + ' ' + this.last; 
    }

};
