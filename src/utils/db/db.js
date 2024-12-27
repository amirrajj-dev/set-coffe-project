const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return;
        }
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB successfully 🪼');
    } catch (error) {
        console.error('Oops, something went wrong connecting to the DB 😢:', error);
    }
};

export default connectToDb;