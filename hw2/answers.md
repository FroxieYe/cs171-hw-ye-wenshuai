* Wenshuai Ye \<wenshuaiye@g.harvard.edu\>
* CS 171 Homework 2
* Collaborator: Wenwan Yang

## 0. Quesitons.
#### Question 0.1. What is the meaning of the horizontal and vertical position of the nodes? Give examples of datasets particularly well suited to organize data this way.

The meaning of the horizontal and vertical positions of the nodes is that the positions are the ones where nodes become stable and the spring force and repulsive force aggregate to 0 (or very small) for a node. A good example lies in our homework where we want to cluster countries by continent. Countries in the same continent have edges, while others do not. In this way, the force will automatically cluster the countries by continent.


#### Question 0.2. Which other channels (visual variables), beside color, size and position, could have been used? Name five.

Shape (indicate category), Value / Saturation (indicate quantity), curvature ( as a replacement of straight line),  spacial region (if we want to do 3d visualization), text expression (to document the force)

#### Question 0.3. Are all the previously mentioned visual variables independent (e.g. if you change one, will it impact others?)? Give examples of graphical properties that are dependent (if any) and independent (if any) from each others.

They are not all independent. If one is changed, it will impact some of others. For example, without color, positions might be affected because we cannot tell wether particles of the same category are repulsive or attractive any more. On the other hand, removing the color (category) will not affect the size since size are inherently determined.

## 1. Simple Layout.
#### Question 1.1. Discuss the pros and cons of the two types of rankings (either by relative or absolute position between nodes).

Equally Spaced:
	Pros: the ordinal rank of each country can be visualized clearly.
	Cons: We can not quantify the difference of the values those variables between countries.
Unequally Spaced:
	Pros: We can quantify the difference of the values those variables.
	Cons: Many countries overlapp. We cannot visualize and extract information from those countries clearly.

#### Question 1.2. Which data type (quantitative, ordinal, ..) is best displayed with scatterplots? Which one is not? Give examples.

Assuming we need information for each point, ordinal data is best displayed with scatterplots. The quantitative difference between two values make quantitative difficult to visualize in scatterplots. However, if we want a pattern (Monte Carlo Simulation), displaying quantitative data using scatterplots is not a bad way.

## 2. Diving into D3 Layouts.
#### Question 2.1. What are the pros and cons of using a D3 layout? For example, why would we use the D3 pie layout when we could use a simple circle for layouting?

Each D3 layout has some unique attributes and methods that allow us to have a more variety of way to visualize the data. And they can be used together to create more fancy layouts. In the D3 pie layout case, it has method such as "sort" that can automatically sort the data. Moreover, it can be combined with other layouts such as "force layout" to create more fancy motions / visualizations. 

## 3. Connecting Countries
#### Question 3.1. Which other strategies can you think of to reduce the visual complexity? One example is edge bundling which we introduce in the following section. Enumerate up to three other strategies.

1. When the mouse is over a country node, add colors to it and its trade partners.
2. Display the edges of interest only when the mouse is over a country node we are interested in. Otherwise, it has no information.
3. Display text of interest only when the mouse is over a country node we are interested in.

