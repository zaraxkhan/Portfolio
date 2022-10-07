# Zara Khan- Data Analysis Portfolio
## About
Hi, I'm Zara! I have a background in the healthcare industry and hold a B.S in Healthcare Management from the University of Texas at Dallas. I have worked 4 years in the healthcare industry before deciding to pursue a certification in Data Analysis and Visualization from the University of Texas at Austin. I do believe I chose the right path when switching over my career plan to data analysis as I am having a lot of fun learning these new languages. I am very much left brained with a  problem-solver personality, logical thinker, and result-driven mindset!

This repository is to showcase all the new skills I have learned in the projects that I have created. Some are from the classwork I had and others I did on the side for fun! 

Skills: Python, Pandas, Numpy, APIs, Javascript, HTML, SQL

## Projects
These projects were assigned during my course of Data Analysis and Visualization from the University of Texas at Austin. This is a living repository which will be updated with more projects to keep track of my performance. 

### Python
#### [School District Analysis](https://github.com/zaraxkhan/Portfolio/tree/main/Python/school-district-analysis)
For this project I analyzed standardized test data for a city school district. In the end, I create a report which presents insights regarding the performance trends and patterns on a school and district level. This analysis was to help school districts make decisions regarding school funding and their performances. However, after cleaning the data the first time around, it was later noticed that there had been evidence of academic dishonesty for the 9th graders at Thomas High School. Due to this, I reperformed the analysis and instead added N/As to the scores for these reading and math grades. In this project, I will be rechecked how the analysis had been affected due to the academic dishonesty.

In this project I performed the following;
1. Using the Pandas loc method with conditional statements and comparison and logical operators, select the ninth-grade reading and math scores for Thomas High School. Then, use the Pandas NumPy module to change the reading and math scores to NaN.
2. Repeat the school district analysis and recreated the following metrics:
- The district summary
- The school summary
- The top 5 and bottom 5 performing schools, based on the overall passing rate
- The average math score for each grade level from each school
- The average reading score for each grade level from each school
- The scores by school spending per student, by school size, and by school type

#### [Pyber Analysis](https://github.com/zaraxkhan/Portfolio/tree/main/Python/pyber-analysis)
In this project, PyBer, a ride-sharing app company, needed help in improving access to ride-sharing services and determining affordability for underserved neighborhoods. This company wanted to know how their ride-sharing data differs by city type and how these differences can be used by decision makers at PyBer. I created some visualization of the total weekly fares per city type: Rural, Suburban, and Urban. This analysis took place for the first four months of 2019, from January 1st to April 29th.

In this project I performed the following;
1. Using the Pandas groupby() function with the count() and sum() methods on PyBer DataFrame columns, retrieve the total number of rides, total number of drivers, and the total fares for each city type. Then, calculate the average fare per ride and average fare per driver for each city type. Finally, add this data to a new DataFrame, then format the columns.
2. Using  Pandas skills functions, pivot() andresample(), create a multiple-line graph that shows the total fares for each week by city type.

#### [Weather Vacation Itinerary with API Calls](https://github.com/zaraxkhan/Portfolio/tree/main/Python/APIs)
For this analysis, I created a map with cities around the world and their weather descriptions. From that, I allowed end users to select which temperature ranges they perferred for their future vacations which filtered the dataset to show their preferences. After cities were selected, the end users also are able to see hotels that are in the area.

In this project I performed the following steps;
1. Generate a set of 2,000 random latitudes and longitudes, retrieve the nearest city, and perform an API call with OpenWeatherMap. In addition to the city weather data gathered, use API calls to retrieve the current weather description for each city. Then, create a new DataFrame containing the updated weather data.
2. Employ input statements to retrieve customer weather preferences. Next,use those preferences to identify potential travel destinations and nearby hotels. Finally,show those destinations on a marker layer map with pop-up markers.
3. Use the Google Directions API to create a travel itinerary that shows the route between four cities chosen from the users possible travel destinations. Then,create a marker layer map with a pop-up marker for each city on the itinerary.

### Javascript
#### [Bacteria Biodiversity](https://github.com/zaraxkhan/Portfolio/tree/main/Java_Plotly/Bacteria_Biodiversity)
With a completed panel of demographic information, I created a dashboard to visualize the bacterial data for each volunteer. Specifically,volunteers should be able to identify the top 10 bacterial species in their belly buttons. I created a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. I also created a bubble chart that will display the following when an individual’s ID is selected from the dropdown menu webpage:

- The bacterial id as the x-axis values.
- The values as the y-axis values.
- The values as the marker size.
- The bacterial ids as the marker colors.
- The bacteria labels as the hover-text values.
Lastly, I created a gauge chart that displays the weekly washing frequency's value when an individual ID is selected from the dropdown menu. With my knowledge of bootstrap and HTML, I customized the webpage.

These were the steps I performed;
1. Using JavaScript, Plotly, and D3.js, create a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. The horizontal bar chart will display the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart.
2. Create a bubble chart that will display the top ten bacteria found in each individual's belly button.
3. Create a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu.
4. When a sample is selected, the dashboard should display the data in the panel and all three charts according to their requirements.

#### [UFOs](https://github.com/zaraxkhan/Portfolio/tree/main/Java_Plotly/UFOs)
For this project, I will build a table using data stored in a JavaScript array. I'll also create filters to make this table fully dynamic, meaning that it will react to user input, and then place the table into an HTML file for easy viewing. I'll customize my webpage using Bootstrap, and equip my table with several fully functional filters that will allow users to interact with the visualizations.

I performed the following steps;
1. Build a table to display all of the UFO sightings. Iterate through the array of objects in our data file and then append them to a table row.
2. Incorporate a forEach function that loops through the data array, and then adds rows of data to the table.
3. Code each sighting onto its own row of data and use the val argument to represent each item in the object and add this to the html data tag. 
4. Using JavaScript and HTML, modify the code in index.html file to create more table filters. In addition to the date filter created,add filters for the city, state, country, and shape. 
5. Piece the webpage together with bootstrap and add functionality to the navigation bar. Add a title, paragraph, tables, filters for the table with customizations. 

## Contact
- [LinkedIn](https://www.linkedin.com/in/khanzara8/)
- [Email](mailto:zxkhan.99@gmail.com)
