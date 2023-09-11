import Express  from "express";

const app = Express()
const PORT =process.env.PORT || 8000

app.use(Express.json())



app.get('/api/provider', (req, res) => {
  res.json({ message: 'Hello from the provider service!' });
});





app.listen(PORT, () => {
  console.log(`Provider Service is running on port ${PORT}`);
});
