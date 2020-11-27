/*
Sync data from two different sources
  a product database
  and a storefront. 

The product database also contains 
  The product taxonomy (product categories) 
	Each category has 
		A name 
		zero or one parent category, 
		zero or more children. 

The product database provides three pieces of information about a category: 
	the category's id, 
	it’s parent category’s id (if any), 
	the category’s name. 
		
The storefront, though, has one limitation
	A child category cannot be inserted before its parent category has been created. 

Write a function that
	can take a JSON string of categories provided by the product database 
	sort them in the optimal insertion order for the storefront so that 
    no category insertion will result in an integrity error. 
      ie parents are always inserted first
    
constraints
  The taxonomy for categories can be arbitrarily deep. 
  The return value should also be a JSON string.
*/



/** tree sorts a json string and returns again as a string
 * @param: jsonString: string.
 * @return: string. JSON string, sorted
*/
const sortByParentsFirst(jsonString) {
  const object = JSON.parse(jsonString);


  const reStringed = JSON.stringify(null);
  return reStringed;
}


