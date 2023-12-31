const messageModel = require("../model/messageModel");

module.exports.addMessage = async (req, res, next)=>{
  try{
    const {from, to, message} = req.body;
    const data = await messageModel.create({
        message:{text: massage},
        users: [from, to],
        sender: from,
    });
    if(data) return res.json({msg:"Massage added successfully"});
    return res.json({msg:"Failed to  add massage to the db "});
  }catch(ex){
    next(ex);
  }
}
module.exports.getAllMessage = async (req, res, next)=>{
    try {
        const{from,to}= req.body;
        const messages = await messageModel.find({
            users:{
                $all: [from, to],
             },  
        }).sort({upadatAt: 1});
        const projectMessages = messages.map((msg)=>{
            return{
                fromSelf: msg.sender.toString() === from,
                message:msg.message.text,
            };
        });
        res.json(projectMessages);
    
    } catch (ex) {
        next(ex);
    }
}