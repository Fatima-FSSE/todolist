require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
const PORT = process.env.PORT || 3000 ;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const connectDB = async ()=> {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//create Schema or table structure for list item
const itemsSchema = {
  name: String,
};

//passing this schema to mongoose model to create Item collection.
const Item = new mongoose.model("Item", itemsSchema);

//create Schema for list
const listSchema = {
  name: String,
  listItems: [itemsSchema]
};

//passing the schema to model for list 
const List = new mongoose.model("List", listSchema);

//create the document
const item1 = new Item({
  name: "Welcome to your todoList!"
});

const item2 = new Item({
  name: "Hit the + button to add a new item."
});

const item3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

app.get("/", async (req, res) => {
  try {
    const foundItems = await Item.find({});
    if(foundItems.length === 0){
      await Item.insertMany(defaultItems).then(function(){
        console.log("default items inserted Successfully");
      });
      res.redirect("/");
    } else {
        res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  } catch ( error ) {
      console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const item = req.body.newItem;
    const listName = req.body.list;
    const itemToAdd = new Item({
    name: item
    });
    if(listName === "Today"){
      itemToAdd.save();
      res.redirect("/");
      } else {
          await List.findOne({name:listName}).then(function(foundList){
            if(foundList === null){
              console.log("List Does not exist");
              } else { 
                foundList.listItems.push(itemToAdd);
                foundList.save();
                res.redirect("/" + listName);
              }
            });
      }  
  } catch (error) {
      console.log(error);
  }
});

app.post("/delete", async (req, res) => {
  try {
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if(listName === "Today") {
      await Item.findByIdAndRemove(checkedItemId).then(function(){
        res.redirect("/");
        });  
    } else {
        await List.findOneAndUpdate({name:listName}, {$pull:{listItems:{_id: checkedItemId}}})
          .then(function(foundList){
            res.redirect("/" + listName);
          });
      }
  } catch (error) {
      console.log(error);
  }
});

app.get("/:customListName", async (req, res) => {
  try {
    const customListName = _.capitalize(req.params.customListName);
    await List.findOne({name: customListName}).then(function(foundList){
      if(foundList === null){
        //create new list
        const list = new List({
          name: customListName,
          listItems: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
          //show existing list and render list.ejs
          res.render("list", {listTitle: foundList.name, newListItems: foundList.listItems});
        }
  });
  } catch (error) {
      console.log(error);
  }
});

connectDB().then(function(){
  app.listen(PORT, function(){
    console.log(`Server started. Listening on port ${PORT}`);
  });
});
