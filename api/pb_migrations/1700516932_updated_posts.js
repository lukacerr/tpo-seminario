/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogvsly2yy5ps0vv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hbmrysm",
    "name": "likes",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iobhasfl",
    "name": "views",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogvsly2yy5ps0vv")

  // remove
  collection.schema.removeField("5hbmrysm")

  // remove
  collection.schema.removeField("iobhasfl")

  return dao.saveCollection(collection)
})
