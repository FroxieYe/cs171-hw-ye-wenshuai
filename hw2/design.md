* Wenshuai Ye \<wenshuaiye@g.harvard.edu\>
* CS 171 Homework 2
* Collaborator: Wenwan Yang

###Implemented Design
* Introduction
In this design studio, our main task was to design visualizations that communicate who the main trade partners between countries are. Utilizing the code we developed in this homework, I implemented various layouts that can answer some of the questions such as "who are the main trade partners?", "what are the trade volumes for top trade partners?", "do countries mainly trade with their neighbors?", "How does trade volumes change over years?", etc. Below is a more detailed description of my design and implementation.

* Who are the main trade partners?
I adopted the circular layout developed in this homework. When the mouse is over the node of a country, the graph will show the top trade countries with this country. The circular by group layout can even reflect the distance between top trade countries.

* What are the trade volumes for top trade partners?
Using the circular layout, we find the who the main trade partners are. To further investigate the volumes, I added a feature that allows you to view the trade pattern of a specific country. To do this, use the drop down menu "View Trade by Countries", the layout will switch to another layout focused on this country. It shows you the who the top trade parters are and their corresponding trade volumes. Colors reflect the continent they belong to. If you want to go back to the current overall layout, click reset button.

* Do countries mainly trade with their neighbors?
As mentioned, there are three ways to find out this info. One way is to move the mouse over a country node in the circular by group layout, and length of the line will in a large sense tell you if this country main trade with its neighbors. If you click on the node, the trade lines will remain until you click on the node again. Another way is to view in the country-specific layout using the drop down menu "View Trade by Countries". If the colors of the trade partners are consistent with the color of the country of interest, it means the country main trade with its partner. A third way lies in the line layout, where you can rank the countries by their export volumes to countries in the same continent / different continents.

* How does trade volumes change over years?
To accomplish this, I added a time slider for users to update the information. However, the transition was not clear enough and I didn't have sufficient time to improve it.

###Alternative Design
![alt tag](design/design1.png)
![alt tag](design/design2.png)


