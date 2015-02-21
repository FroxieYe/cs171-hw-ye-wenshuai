* Wenshuai Ye \<wenshuaiye@g.harvard.edu\>
* CS 171 Homework 1

## 1. Improving the table presentation

### 1.1. ###Looking at the page containing the table, what are the differences between the DOM as shown by the DOM inspector and the HTML source code? Why would you use the DOM inspector? When is the HTML source useful?

* HTML source code shows what was received from the server before javascript modifies it. However, Dom inspector allows us to see what it looks like at the moment. Namely, if you want to view the dynamic state of the code, DOM inspector is the way to go. However, it will correct html errors automatically. As a result, if you want to know where you have made a mistake in the html, HTML source code will be better.

##### 1.2. Below we have partially reproduced the first lines from the table's dataset. What piece of software generates this table? Where are the original data stored?

* javascript d3 library generates this table.


## 2. Interactive Country Filter

### 2.1. Would you filter other columns from the table the same way? E.g. would you use checkboxes or any other HTML widget?

* I will use checkboxes. However, the data needs to be grouped first because other columns are not limited sets of categorical data. It is better to divide them into several intervals (categorical data) and use checkboxes to filter.

## 3. Aggregate Countries

### 3.1 Could you aggregate the table using other columns? If you think yes, explain which ones and how you would group values. Which HTML widgets would be appropriate?

* We can aggregate the table using other columns. However, since other columns are not limited sets of categorical data, it is better to group them into intervals first before aggregating. For example, we can group life expectancy into 60-75, 75-70, etc. I will use a radio in this case.

## 4. Explore Change over Time

### 4.1 What does the new attribute years hold?

* It holds the gdp, life_Expectancy, population, and year information from 1995 to 2012.

## 5. SVG Bar Chart

### 5.1 What are the pros and cons of using HTML vs. SVG? Give some examples in the context of creating visualizations.

* HTML is useful when one wants to create tables that hold the data. However, SVG is more useful when one wants to visualize this data. To sum up,
HTML:
	Pros: give an accurate and detailed summary of the data to answer well-defined questions.
	Cons: When questions are not well defined, the information is slower for the public to grasp and less memorable.
SVG:
	Pros: It is useful when the problems are not well defined. SVG also creates figures that are richer and more 	      accessible
	Cons: When problems are welled defined, the information included tends vague and inaccurate compared with HTML.

## 7. Theory

### 7.1. Give an example of a situation where visualization is appropriate, following the arguments discussed in lecture and in the textbook (the example cannot be the same as mentioned in either lecture or textbook).

* Suppose we want to observe the pattern of the price of a stock. We want visualization to accomplish this because visualization allows us to communicate with the information more easily. Moreover, it makes the price data as a whole more accessible so that we can see the trend and come up with insights.

### 7.2. Which limitations of static charts can you solve using interactivity?

* Using interactivity, we can recognize the patterns of high dimensional data more easily. For example, suppose we have several countries' data and we want to observe the patterns of this data over time. A slider will enable use to observe all of these countries' changes dynamically. A static chart cannot do this and sometimes shows inaccurate information.

### 7.3. What are the limitations of visualization?

* When problems are well defined, visualizations might not be as useful. Moreover, we will have limited experience in using data visualization tools, limited experience in applying data visualization tools to datasets, and limited experience in 3D visual data exploration

### 7.4. Why are data semantics important for data?

* Adding semantic meaning to the data enables the data to be branched across domains of knowledge. The benefit is that two complementary database can now query each other using the same terms.

### 7.5. Which relationships are defined for two attributes of (a) quantitative, (b) categorical, or (c) ordinal scale?

*
quantitative: "equal","not equal", "less", "greater than/more" are all defined for two quantitative attributes. It is also meaningful to perform basic operations (e.g. add) on two quantitative attributes.
categorical: only "equal" and "not equal" are defined for two categorical attributes.
ordinal: "equal","not equal", "less", "greater than/more" are all defined for two ordinal attributes. However, it is not meaningful to perform any basic operations (e.g. add) on two ordinal attributes.

### 7.6 Which visual variables are associative (i.e., allow grouping)?

* Position, Length/Size, Value/Luminance/Saturation, Color

### 7.7 Which visual variables are quantitative (i.e., allow to judge a quantitative difference between two data points)?

* Position, Length/Size, Value (with Problems though)
