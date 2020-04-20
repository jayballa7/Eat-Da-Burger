const orm = require("../config/orm");

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(result){
            cb(result);
        });
    },

    updateOne: function(objColsVals, condition, cb){
        orm.updateOne("burgers", objColsVals, condition, function(result){
            cb(result);
        });
    },

    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(result){
            cb(result);
        });
    }
}

module.exports = burger;