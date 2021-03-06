const Quote = require('../models/quote');

module.exports = {
    quotes: async function(){
        const quotes = await Quote.find();
        return {
            quotes: quotes.map((q)=>{
                return {
                    ...q._doc,
                    id:q._id.toString()
                }
            })
        }
    }
}