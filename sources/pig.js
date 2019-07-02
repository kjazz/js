/* 
* SonarQube, open source software quality management *tool.
* Copyright (C) 2008-2013 SonarSource 
*/
    
var Person = function(first, last, middle) {
    this.first = first;  //TODO
    this.middle = middle;  //TODO
    this.last = last;  //TODO
};

Person.prototype = { //TODO

    whoAreYou : function() { //TODO
        return this.first + (this.middle ? ' ' + 'foo' + this.middle: '') + ' ' + this.last; 
    }

};
