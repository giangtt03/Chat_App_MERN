const mongoose = require("mongoose");
const messsageSchema = new mongoose.Schema(
    
    {
    message: {
        text: {
            type: String,
            require: true,
        }, 
    },
        user: Array,
        sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
    },
    {
        timestamps: true,

    }
);

module.exports = mongoose.model("Massages", messsageSchema);