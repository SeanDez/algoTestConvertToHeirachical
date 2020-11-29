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


/*
  null parent ids go first
  then rest
*/


class ProductCategoryNode {
  name; 
  id; 
  parentId;

  constructor(name, id, parentId = null) {
    this.name = name;
    this.id = id;
    this.parent_id = parentId;
  }
}

const mockData =  [
  {
    "name": "Accessories",
    "id": 1,
    "parent_id": 20,
  }, {
    "name": "Watches",
    "id": 57,
    "parent_id": 1
  }, {
    "name": "Board Games",
    "id": 45,
    "parent_id": 20,
  }, {
    "name": "Model Planes",
    "id": 1,
    "parent_id": null,
  }, {
    "name": "Doll Houses",
    "id": 31,
    "parent_id": 20,
  }, {
    "name": "Men",
    "id": 20,
    "parent_id": null,
  }, {
    "name": "Music",
    "id": 205,
    "parent_id": 45,
  }, {
    "name": "Women",
    "id": 220,
    "parent_id": 45,
  }, {
    "name": "Baby",
    "id": 2110,
    "parent_id": 45,
  }, 
  
  // intentional duplicates
  {
    "name": "Baby",
    "id": 2110,
    "parent_id": null,
  }, {
    "name": "Baby",
    "id": 2110,
    "parent_id": 1,
  }, {
    "name": "Baby",
    "id": 2110,
    "parent_id": 220,
  }
];

module.exports = mockData;