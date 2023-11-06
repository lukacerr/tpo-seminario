/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogvsly2yy5ps0vv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0rzrn20h",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogvsly2yy5ps0vv")

  // remove
  collection.schema.removeField("0rzrn20h")

  return dao.saveCollection(collection)
})
