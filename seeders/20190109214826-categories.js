'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('categories', [
    { name: 'Quick & Easy', createdAt: new Date(), updatedAt: new Date()},
    {
      name: 'Longer & Complicated', createdAt: new Date(), updatedAt: new Date()
    }

  ], {}).then(function () { 
     return queryInterface.bulkInsert('statuses', [
      { name: 'Publish', createdAt: new Date(), updatedAt: new Date()},
      {
        name: 'Un-published', createdAt: new Date(), updatedAt: new Date()
      }

  ], {}) ;
  
  }).then(function () { 
    return queryInterface.bulkInsert('projects', [
     { name: 'greek Yogurth', instructions: 'this is initial instruction to make yogurt' , createdAt: new Date(), updatedAt: new Date(), categoryId:1,statusId:1,UserId:1}
 ], {});
}) .then(function () { 
  return queryInterface.bulkInsert('tasks', [
   { 
    taskNumber: "1",
    name: "Task One",
    picture: "",
    description: "Description of the task",
    timeSinceLastStep: "10",
    timeUnits: "minutes",
    cookingHardware: "hardware one",
    duration: 10,
    ingredients: "ingredient one",
    steps:"step one", 
     createdAt: new Date(), updatedAt: new Date(), 
   projectId:1}
], {});
}) 



  },down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   
  }
};
