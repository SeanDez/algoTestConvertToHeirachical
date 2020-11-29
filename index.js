// const mockData = require('./mockData');

/** sort object array so that parents come before children
 * @param: categories. object array
 * @return: object array
*/
function sortCategoriesForInsert(categories) {
  const parsedCategories = categories;

  // type guard against non-array data type
  if (Array.isArray(parsedCategories) === false) { return []; }

  const sortedResults = [];

  let matchableParentIds = [null];
  let nexParentIdsToCheckAgainst = [];
  let fullySorted = false;

  while (fullySorted === false) {
    for (let idx = 0; idx < parsedCategories.length; idx++) {
      const currentCategory = parsedCategories[idx];
  
      const matchesAParentId = matchableParentIds.some(matchableParentId => currentCategory.parent_id === matchableParentId);
  
      // adds current category to results
      // adds its id as a parent on the next full loop cycle
      if (matchesAParentId) { 
        sortedResults.push(currentCategory);
        
        // delete item from unsorted
        parsedCategories.splice(idx, 1);

        matchableParentIds.push(currentCategory.id);
      }
    }
    // full loop cycle completes

    // loop exit condition
    if (parsedCategories.length === 0) { fullySorted = true; }
  }

  const jsonString = JSON.stringify(sortedResults);

  return jsonString;
}

// const results = sortCategoriesForInsert(mockData);
// console.log('results', results);

module.exports = sortCategoriesForInsert;