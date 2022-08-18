### Candidate name : Megan Cunningham
### Date : 2022-08-18
### Subject : Part 4 - Written Evaluation

***

#### Questions:



1. Proper HTML and React semantics and best practices is important to the team.  
Please explain why the changes in Part 2 is important and what choices you made.

- Improving code quality in line with web standardization is important for both user accessibility and developer collaboration.  

- First, I put the title of the movie as alternative text in consideration of the case where the image does not appear through the alt element in the image tag of Part 2 or the visually impaired use the voice reading service. These factors make the web more accessible to people who don't have easy access to the web.  

- Second, I changed html lines composed of &#60;paragraph&#62; tags to &#60;p&#62; tags. It is very important to keep tags and syntax consistent in accordance with HTML standardization regulations, as this is a key element in communication with team members in collaboration. For example, if team members write code in a non-standardized syntax, there may be many difficulties when improving the program or correcting errors in the future. Of course, you can leave comments with elements such as javadoc, but it is natural to have difficulties in searching for the elements.  
 
- React's component-based structure also has this characteristic. Writing each component as a class or function structure and calling it within a higher-level structure makes it easier to find out which element has a problem when there is a problem in the code. However, if the syntax of the code is not standardized, more time and effort will be required to find and correct errors in those elements! 