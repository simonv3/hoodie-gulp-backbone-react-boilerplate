var hoodie = new Hoodie();

var models = {};

models.ExampleModel = hoodie.backbone.Model.extend({
  type: 'example',
  note: ''
});

models.ExampleCollection = hoodie.backbone.Collection.extend({
  model: models.ExampleModel
});

module.exports = models;
