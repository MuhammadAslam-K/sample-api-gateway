import Express from "express";

const app = Express();
const PORT = process.env.PORT || 5000;



app.get('/api/customer', (req, res) => {
  res.json({ message: 'Hello from the customer service!' });
});




app.listen(PORT, () => {
  console.log(`Customer Service is running on port ${PORT}`);
});
