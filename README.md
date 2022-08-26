# UFOs

## Overview


### UFO Sightings and Filtering That Data:

For this project, we were tasked with assisting a data journalist named Dana in covering a topic regarding UFO sightings. A JavaScript file is all that Dana has as the dataset, but it was full of information regarding the date, city, state, country, type of sighting and comments on each sighting. JavaScript was further utilized to extract and transform the data within the supplied JavaScript file. The transformation came in the form of creating a filter to sort by date through the dataset and then was displayed in a table format. A complete webpage was also created to house the table and other information regarding the project itself.

Once this had been completed, Dana wanted a more in-depth analysis of the UFO sightings that allowed users to filter through multiple criteria at the same time. This would further utilize the dataset and provide for more flexibility in paring down search results.



## Results:


### Expanded Filters:

- Utilizing the expanded filters, a user may enter specific criteria within the appropriate input boxes to pare down the data and only show the results of the criteria that was specified. This filtering from the end user can either enter criteria into one input box or multiple boxes to get more specific results.

![All Unfiltered Results](/github_resources/unfiltered.png)
<sub>   All Unfiltered Results</sub>


### Filtering by State:

- Specifically enter a state abbreviation and the whole dataset will filter to results in that specified state. Here in the image, you can see that "ca" was typed and then the Enter key pressed to initiate the search. This pulls only the sightings that occurred in California.

![State Filter Results](/github_resources/state_filtered.png)
<sub>   State Filtered Results</sub>


### Filtering by State and Shape:

- In this image you can see that not only was "ca" typed, but so was "triangle" as the criteria for the shape filter input box.

![State and Shape results](/github_resources/state_shape_filtered.png)
<sub>   State and Shape Filtered Results</sub>



## Summary:

- The one drawback is that the data is incredibly limiting. While the filtering may have evolved to take advantage of all the data provided what is found is that searches can more often than not return a blank. That is because there is no data before the 1st of January and after the 13th of January in 2010.

Two ways this webpage may be further developed:

- First, build out an even more robust search system. Have something that does pop up when no results are found, provide a drop down instead of having to rely on users typing in specific criteria.

- The data can not only be expanded upon; it can also be further transformed before it is loaded to not have any lowercase values. The lowercase values (except the comments) give off an un-professional feel that doesn't help the validity of the final webpage.
