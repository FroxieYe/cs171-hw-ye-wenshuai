1. Improving the table presentation

1.1.
HTML source code shows what was received from the server before javascript modifies it. However, Dom inspector allows us to see what it looks like at the moment. Namely, if you want to view the dynamic state of the code, DOM inspector is the way to go. However, it will correct html errors automatically. As a result, if you want to know where you have made a mistake in the html, HTML source code will be better.

1.2
javascript d3 library generates this table.


2. Interactive Country Filter

2.1
I will use checkboxes. However, the data needs to be grouped first because other columns are not limited sets of categorical data. It is better to divide them into several intervals (categorical data) and use checkboxes to filter.

3. Aggregate Countries

3.1
We can aggregate the table using other columns. However, since other columns are not limited sets of categorical data, it is better to group them into intervals first before aggregating. For example, we can group life expectancy into 60-75, 75-70, etc. I will use a radio in this case.

4. Explore Change over Time

4.1
It holds the gdp, life_Expectancy, population, and year information from 1995 to 2012.

5. SVG Bar Chart

5.1
HTML is useful when one wants to create tables that hold the data. However, SVG is more useful when one wants to visualize this data. People wants to visualize the data when 