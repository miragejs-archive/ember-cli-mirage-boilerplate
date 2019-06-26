import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  alwaysIncludeLinkageData: true,

  keyForAttribute(attr) {
    return attr.underscore();
  },

  keyForRelationship(modelName) {
    return modelName.underscore();
  },

  keyForModel() { return 'user'; },

  typeKeyForModel(model) { return model.modelName; },
});
