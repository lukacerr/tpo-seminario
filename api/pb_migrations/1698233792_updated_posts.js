/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogvsly2yy5ps0vv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkovogsm",
    "name": "tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hdpwkbbinojeb8q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogvsly2yy5ps0vv")

  // remove
  collection.schema.removeField("dkovogsm")

  return dao.saveCollection(collection)
})
