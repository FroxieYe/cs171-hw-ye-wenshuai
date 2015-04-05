/**
 * Created by Hendrik Strobelt (hendrik.strobelt.com) on 1/28/15.
 */



/*
 *
 * ======================================================
 * We follow the vis template of init - wrangle - update
 * ======================================================
 *
 * */

/**
 * PrioVis object for HW3 of CS171
 * @param _parentElement -- the HTML or SVG element (D3 node) to which to attach the vis
 * @param _data -- the data array
 * @param _metaData -- the meta-data / data description object
 * @constructor
 */
PrioVis = function(_parentElement, _data, _metaData, _eventHandler){
    this.parentElement = _parentElement;
    this.eventHandler = _eventHandler;
    this.data = _data;
    this.metaData = _metaData;
    this.displayData = [];
    this.metaLabel = [];
    this.rectangle = null;
    for (var i=0;i<16;++i){
    	this.metaLabel.push(this.metaData["priorities"][String(i)]["item-title"]);
    }
    
    // TODO: define all constants here
    this.margin = {top: 45, right: 15, bottom: 240, left: 60},
    this.width = 700 - this.margin.left - this.margin.right,
    this.height = 500 - this.margin.top - this.margin.bottom;

    this.initVis();

}


/**
 * Method that sets up the SVG and the variables
 */
PrioVis.prototype.initVis = function(){

    var that = this; // read about the this

    //TODO: construct or select SVG
    //TODO: create axis and scales

    // constructs SVG layout
    this.svg = this.parentElement.append("svg")
        .attr("width", 700)
        .attr("height", 500)
      .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
 
    // creates axis and scales

    this.x = d3.scale.linear()
      .range([10, this.width]);

    this.y = d3.scale.linear()
      .range([this.height, 20]);
      
    this.xAxis = d3.svg.axis()
      .scale(this.x)
      .ticks(16)
      .tickFormat(function(d,i){
      	return that.metaLabel[i];
      })
      .orient("bottom");
        
    this.yAxis = d3.svg.axis()
      .scale(this.y)
      .orient("left");    


    this.svg.append("g")
        .attr("class", "y axis")
        .append("text")
        .attr("x", 40)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Distribution of Priorities");

    this.svg.append("g")
    	.attr("class", "x axis");
    
    // filter, aggregate, modify data
    this.wrangleData(null);

    // call the update method
    this.updateVis();
}


/**
 * Method to wrangle the data. In this case it takes an options object
 * @param _filterFunction - a function that filters data or "null" if none
 */
PrioVis.prototype.wrangleData= function(_filterFunction){

    // displayData should hold the data which is visualized
    this.displayData = this.filterAndAggregate(_filterFunction);
    //// you might be able to pass some options,
    //// if you don't pass options -- set the default options
    //// the default is: var options = {filter: function(){return true;} }
    //var options = _options || {filter: function(){return true;}};

}



/**
 * the drawing function - should use the D3 selection, enter, exit
 */
PrioVis.prototype.updateVis = function(){

    // Dear JS hipster,
    // you might be able to pass some options as parameter _option
    // But it's not needed to solve the task.
    // var options = _options || {};
    var that = this;
	var fill = d3.scale.category20();
    // TODO: implement...
    // TODO: ...update scales
    // TODO: ...update graphs
    // TODO: implement update graphs (D3: update, enter, exit)
    // updates scales
    var maxx = d3.max(this.displayData);
    var minn = d3.min(this.displayData);
    this.x.domain(d3.extent(this.displayData, function(d,i) { return i; }));
    this.y.domain([0, maxx]);

    // updates axis

    this.txt = this.svg.select(".x.axis")
        .attr("transform", "translate(0," + this.height + ")")
        .call(this.xAxis)
	  .selectAll("text")
	  	.attr("y", 5)
	  	.attr("x", -10)
	    .attr("transform", "rotate(-70)")
	    .style("text-anchor", "end")
	    .style("font-size","10px")
	    .style("font-weight","bold")

    this.svg.select(".y.axis")
        .call(this.yAxis)

    // updates graph
    if (this.rectangle != null) this.rectangle.remove();
    this.rectangle = this.svg.selectAll(".area")
    						.data(this.displayData);
    this.rectangle
		.enter()
		.append("rect")
		.attr("class", ".area")
        .attr("x", function(d,i){return that.x(i)/1.06})
        .attr("y",function(d){return that.y(d)})
        .attr("width", 38)
        .attr("height", function(d){return that.height-that.y(d)})
        .attr("fill",function(d,i){return fill(i)})
        .style("stroke", "white")
}


/**
 * Gets called by event handler and should create new aggregated data
 * aggregation is done by the function "aggregate(filter)". Filter has to
 * be defined here.
 * @param selection
 */
PrioVis.prototype.onSelectionChange= function (selectionStart, selectionEnd){

    // TODO: call wrangle function
    if (selectionStart == null){
        this.wrangleData(null)
    }
    else{
        this.wrangleData(function(d){
            return d["time"]>=selectionStart && d["time"]<=selectionEnd;
        })
    }
    this.updateVis();


}

/*
*
* ==================================
* From here on only HELPER functions
* ==================================
*
* */



/**
 * The aggregate function that creates the counts for each age for a given filter.
 * @param _filter - A filter can be, e.g.,  a function that is only true for data of a given time range
 * @returns {Array|*}
 */
PrioVis.prototype.filterAndAggregate = function(_filter){


    // Set filter to a function that accepts all items
    // ONLY if the parameter _filter is NOT null use this parameter
    var filter = function(){return true;}
    if (_filter != null){
        filter = _filter;
    }
    //Dear JS hipster, a more hip variant of this construct would be:
    // var filter = _filter || function(){return true;}

    var that = this;
    var temp = this.data.filter(filter);
    console.log(temp)
    // create an array of values for age 0-100
    var res = d3.range(16).map(function () {
        return 0;
    });
    temp.map(function(d){
        for (var i=0;i<16;++i)
            res[i] += d.prios[i]; 
    })
    this.displayData = res;
    // accumulate all values that fulfill the filter criterion

    // TODO: implement the function that filters the data and sums the values
    return res;

}




