import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  //id: attr('string'),
  title: attr('string'),
  author: attr('string'),
  publication: attr('string'),
  yop: attr('number'),
  bookimgurl: attr('string'),
  description: attr('string')
});
