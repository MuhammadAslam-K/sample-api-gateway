import Express from "express";
import axios from "axios";

const app = Express()
const PORT = process.env.PORT || 3000;

const services = {
  customer: 'http://localhost:5000',
  provider: 'http://localhost:8000',
};


// Forward requests to the appropriate service
app.get('/customer', async (req, res) => {
  try {
    const response = await axios(`${services.customer}/api/customer`);
    const data = await response.data
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/provider', async (req, res) => {
  try {
    const response = await axios(`${services.provider}/api/provider`);
    const data = await response.data
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
