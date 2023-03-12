const Meme = require("./models/Meme");

const resolvers = {
  Query: {
    hello: () => "hi there",
    memes: async () => await Meme.find()
  },
  Mutation: {
    createMeme: async (_, { caption, image }) => {
      const meme = new Meme({caption, image });
      await meme.save();
      return meme;
    },
    updateMeme: async (_, {id, caption}) => {
        const meme = await Meme.findByIdAndUpdate(id, {
            caption: caption
        });
        meme.save();
        return meme;
    },
    deleteMeme: async (_, {id}) => {
        const meme = await Meme.findByIdAndDelete(id);
        return meme;
    }
  }
};

module.exports = resolvers;