## 1. Improving the table presentation

1.1.
HTML source code shows what was received from the server before javascript modifies it. However, Dom inspector allows us to see what it looks like at the moment. Namely, if you want to view the dynamic state of the code, DOM inspector is the way to go. However, it will correct html errors automatically. As a result, if you want to know where you have made a mistake in the html, HTML source code will be better.

1.2
javascript d3 library generates this table.


## 2. Interactive Country Filter

2.1
I will use checkboxes. However, the data needs to be grouped first because other columns are not limited sets of categorical data. It is better to divide them into several intervals (categorical data) and use checkboxes to filter.

## 3. Aggregate Countries

3.1
We can aggregate the table using other columns. However, since other columns are not limited sets of categorical data, it is better to group them into intervals first before aggregating. For example, we can group life expectancy into 60-75, 75-70, etc. I will use a radio in this case.

## 4. Explore Change over Time

4.1
It holds the gdp, life_Expectancy, population, and year information from 1995 to 2012.

## 5. SVG Bar Chart

5.1
HTML is useful when one wants to create tables that hold the data. However, SVG is more useful when one wants to visualize this data. To sum up,
HTML:
	Pros: give an accurate and detailed summary of the data to answer well-defined questions.
	Cons: When questions are not well defined, the information is slower for the public to grasp and less memorable.
SVG:
	Pros: It is useful when the problems are not well defined. SVG also creates figures that are richer and more 	      accessible
	Cons: When problems are welled defined, the information included tends vague and inaccurate compared with HTML.

## 7. Theory

7.1. Suppose we want to observe the pattern of the price of a stock. We want visualization to accomplish this because visualization allows us to communicate with the information more easily. Moreover, it makes the price data as a whole more accessible so that we can see the trend and come up with insights.

7.2. 
Using interactivity, we can recognize the patterns of high dimensional data more easily. For example, suppose we have several countries' data and we want to observe the patterns of this data over time. A slider will enable use to observe all of these countries' changes dynamically. A static chart can not do this.

7.3.
When problems are well defined, visualizations might not be as useful. For example, when we want to show the mean of an numeric array, using visualization will be inappropriate. Moreover, bad visualizations will have negative effect and lead to bias.

7.4.
Adding semantic meaning to the data enables the data to be branched across domains of knowledge. The benefit is that two complementary database can now query each other using the same terms.

7.5.
quantitative: "equal","not equal", "less than", "greater than" are all defined for two quantitative attributes. It is also meaningful to perform basic operations (e.g. add) on two quantitative attributes.
categorical: only "equal" and "not equal" are defined for two categorical attributes.
ordinal: "equal","not equal", "less than", "greater than" are all defined for two ordinal attributes. However, it is not meaningful to perform any basic operations (e.g. add) on two ordinal attributes.

7.6
Position, Length/Size, Value/Luminance/Saturation, Color

7.7
Position, Length/Size, Value (with Problems though)
