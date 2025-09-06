import mongoose from 'mongoose';

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB is connected')

    } catch (error) {
        console.error(`${error} db failed to connect`)
    }
}

export default connection;
