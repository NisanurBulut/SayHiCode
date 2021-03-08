const Quote = require('../models/quote');

module.exports = {
  quotes: async function () {
    const quotes = await Quote.find();
    return {
      quotes: quotes.map((q) => {
        return {
          ...q._doc,
          _id: q._id.toString(),
        };
      }),
    };
  },
  createQuote: async function ({ quoteInput }) {
    const quote = new Quote({
      quote: quoteInput.quote,
      author: quoteInput.author,
    });
    const createdQuote = await quote.save();
    return {
      ...createdQuote._doc,
      _id: createdQuote._id.toString(),
    };
  },

  updateQuote: async function ({ id, quoteInput }) {
    const quote = await Quote.findById(id);
    if (!quote) {
      throw new Error('No quote found!');
    }
    console.log(quote);
    quote.quote = quoteInput.quote;
    quote.author = quoteInput.author;
    const updatedQuote = await quote.save();
    return {
      ...updatedQuote._doc,
      _id: updatedQuote._id.toString(),
    };
  },
  deleteQuote: async function ({ id }) {
    const quote = await Quote.findById(id);
    if (!quote) {
      throw new Error('No quote found!');
    }
    await Quote.findByIdAndRemove(id);
    return {
      ...quote._doc,
      _id: quote._id.toString(),
    };
  },
};
