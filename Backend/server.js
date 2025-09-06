import dotenv from "dotenv";
import  app  from "./app.js";   
import connection from "./Database/db.js";


dotenv.config();

connection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
