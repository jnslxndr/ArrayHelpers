/**
 * Trim an array, a.k.a. discard empty values
 */
Array.prototype.trim = function(){
	return this.filter(function(el){
		if(el instanceof Array || el instanceof String){
			if (el instanceof Array) el.trim();
			return el.trim().length > 0;
		}
		else if (undefined === el || el === null)
		{
			return false;
		}
		else
		{
			return true;
		}
  })
}


/**
 * Check, if array only contains empty values
 */
Array.prototype.empty = function(){
  return this.trim().length === 0;
}

/**
 * Fill up empty values of objects with values of
 * the preceeding object in a collection of concurrend
 * models.
 */
Array.prototype.FILL = function() {
	var prev_object = null;
	this.map( function(current_object) {
		for (var key in current_object) {
			if (current_object[key]=="" &&
				prev_object.hasOwnProperty(key) &&
				prev_object[key]!="") {
				current_object[key] = prev_object[key];
			}
		}
		prev_object = current_object;
		return current_object;
	})
	delete prev_object;
	return this;
}


/**
 * Return a unique array
 */
Array.prototype.unique = function(){
	var new_array = [];
	for (var i=0; i < this.length; i++) {
		if(!new_array.contains(this[i])) new_array.push(this[i]);
	}
	return new_array;
}


/*****************************************************************************
 * Adding other prototypes from https://gist.github.com/578843
 */

// Because I am an idiot and keep on using 'append', instead of 'push'.
Array.prototype.append = function (item) {
    this.push(item);
    return this;
};

// Returns true if the given item is contained in the array.
Array.prototype.contains = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == item) return true;
    }
    return false;
};

// Perform the given action on each element of the array.
Array.prototype.each = function (action) {
    for (var i = 0; i < this.length; i++) {
        action(this[i]);
    }
};

// Remove all occurrences of the given item from an array.
Array.prototype.remove = function (item) {
    var i = 0;
    while (i < this.length) {
        if (this[i] == item) {
            this.splice(i, 1);
        } else {
            i++;
        }
    }
    return this;
};

