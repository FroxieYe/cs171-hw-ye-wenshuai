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
CompVis = function(_parentElement, _data, _metaData, _eventHandler){
    var that = this;
    this.parentElement = _parentElement;
    this.eventHandler = _eventHandler;
    this.data = _data;
    this.metaData = _metaData;
    this.displayData = [];
    this.metaLabel = [];
    this.fill = d3.scale.category20();
    for (var i=0;i<16;++i){
    	this.metaLabel.push(this.metaData["priorities"][String(i)]["item-title"]);
    }
    this.allData = d3.range(16).map(function () {return 0;});
    this.data.map(function(d){
        for (var i=0;i<16;++i)
            that.allData[i] += d.prios[i]; 
    })
    this.g2 = null;
    // TODO: define all constants here
    this.margin = {top: 25, right: 15, bottom: 20, left: 0},
    this.width = 300 - this.margin.left - this.margin.right,
    this.height = 250 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
    this.initVis();

}


/**
 * Method that sets up the SVG and the variables
 */
CompVis.prototype.initVis = function(){

    var that = this; // read about the this

    //TODO: construct or select SVG
    //TODO: create axis and scales

    // constructs SVG layout
    this.svg1 = this.parentElement.append("svg")
        .attr("width", 300)
        .attr("height", 250)
      .append("g")
        .attr("transform", "translate(" + this.width/2+ "," + this.height/2 + ")");
    this.svg2 = this.parentElement.append("svg")
        .attr("width", 300)
        .attr("height", 250)
      .append("g")
        .attr("transform", "translate(" + this.width/2+ "," + this.height/2 + ")");
 
    this.arc1 = d3.svg.arc()
    .outerRadius(this.radius - 10)
    .innerRadius(0);

    this.arc2 = d3.svg.arc()
    .outerRadius(this.radius - 10)
    .innerRadius(0);

    this.pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d; });

    this.g1 = this.svg1.selectAll(".arc1")
      .data(this.pie(this.allData))
    .enter()
      .append("g")
      .attr("class", "arc1");

      this.g1.append("path")
          .attr("d", this.arc1)
          .style("fill", function(d,i) { return that.fill(i); });
    // filter, aggregate, modify data
    this.wrangleData(null);

    // call the update method
    this.updateVis();
}


/**
 * Method to wrangle the data. In this case it takes an options object
 * @param _filterFunction - a function that filters data or "null" if none
 */
CompVis.prototype.wrangleData= function(_filterFunction){

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
CompVis.prototype.updateVis = function(){

    // Dear JS hipster,
    // you might be able to pass some options as parameter _option
    // But it's not needed to solve the task.
    // var options = _options || {};
    var that = this;
    // TODO: implement...
    // TODO: ...update scales
    // TODO: ...update graphs
    // TODO: implement update graphs (D3: update, enter, exit)
    // updates scales
    if (this.g2 != null) this.g2.remove();

    this.g2 = this.svg2.selectAll(".arc2")
      .data(this.pie(this.displayData))
    .enter()
      .append("g")
      .attr("class", "arc2");
    var clicked = false;
    this.g2.append("path")
            .attr("d", this.arc2)
            .style("fill", function(d,i) { return that.fill(i);})
            .on("mouseover", function(d,i){
                that.svg2.append("text")
                .text( that.metaLabel[i])
                .attr("dx",-140)
                .attr("dy",-93);
            })
            .on("mouseout", function(d,i){
                that.svg2.selectAll("text").remove();
            })
            /*
            .on("click", function(d,i){
                if (clicked){
                    that.svg2.selectAll("text").remove();
                    clicked = false;
                }
                else{
                    that.svg2.append("text")
                    .text( that.metaLabel[i])
                    .attr("dx",-140)
                    .attr("dy",-93);
                    clicked = true;
                }
            })
            */

    /*
    this.g2
        .append("text")
        .text("wtf")
        .attr("x", function(d,i) { return i*20; })
        .attr("font-family", "sans-serif")
        .attr("font-size","10.5px") 
      
      g.append("text")
          .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
          .attr("dy", ".35em")
          .style("text-anchor", "middle")
          .text(function(d) { return d; });
      */ 

 	
}


/**
 * Gets called by event handler and should create new aggregated data
 * aggregation is done by the function "aggregate(filter)". Filter has to
 * be defined here.
 * @param selection
 */
CompVis.prototype.onSelectionChange= function (selectionStart, selectionEnd){

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
CompVis.prototype.filterAndAggregate = function(_filter){


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
   
    // create an array of values for age 0-100
    var res = d3.range(16).map(function () {
        return 0;
    });
    temp.map(function(d){
        for (var i=0;i<16;++i)
            res[i] += d.prios[i]; 
    })

    // accumulate all values that fulfill the filter criterion

    // TODO: implement the function that filters the data and sums the values
    return res;

}




