/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6n8k3o4fcomcwr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cfyqurh1",
    "name": "professors",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6n8k3o4fcomcwr")

  // remove
  collection.schema.removeField("cfyqurh1")

  return dao.saveCollection(collection)
})
