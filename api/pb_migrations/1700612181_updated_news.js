/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ih5ezq7br06i9w9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hc5sr20t",
    "name": "subtitle",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 5000,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ih5ezq7br06i9w9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hc5sr20t",
    "name": "subtitle",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
