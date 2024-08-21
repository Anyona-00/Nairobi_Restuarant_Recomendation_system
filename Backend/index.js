const express = require("express");
const pg = require("pg");
const app = express();
const { Client } = pg;
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const theMagic = async () => {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "restaurants",
    port: 5432,
  });
  await client.connect();

  app.use(express.json());

  app.use(cors());
  //Validates the RestaurantData inputs
  function validateRestaurantData(data) {
    const errors = [];
    if (!data.name || data.name.length > 100) errors.push("Invalid name");
    if (!data.location || data.location.length > 100)
      errors.push("Invalid location");
    if (
      !data.rating ||
      isNaN(data.rating) ||
      data.rating < 0 ||
      data.rating > 5
    )
      errors.push("Invalid rating");
    if (!data.description) errors.push("Description is required");
    return errors;
  }

  //Create
  app.post("/restaurants", async (req, res) => {
    try {
      const errors = validateRestaurantData(req.body);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const result = await client.query(
        `INSERT INTO top_nairobi_restaurants (name, location, rating, description,Image_url,website_url) VALUES($1,$2,$3,$4,$5,$6)`,
        [
          req.body.name,
          req.body.location,
          req.body.rating,
          req.body.description,
          req.body.Image_url,
          req.body.website_url,
        ]
      );

      res.send(`restaurants added succesfully`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  //READ

  //1. Search
  app.get("/restaurants/search", async (req, res) => {
    try {
      const { term } = req.query;

      if (!term) {
        return res.status(400).send("Search term is required");
      }

      // Find the restaurant in the database
      const result = await client.query(
        `SELECT * FROM top_nairobi_restaurants
       WHERE id::text = $1 
       OR name ILIKE $2 
       OR location ILIKE $2`,
        [term, `%${term}%`]
      );

      // console.log(result);

      if (result.rows.length === 0) {
        return res.status(404).send("No restaurants found");
      }

      const restaurant = result.rows[0];

      // console.log(restaurant);
      //ensures the response sent is in Json
      res.json(restaurant);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  //2.recommend
  app.get("/restaurants/recommended", async (req, res) => {
    try {
      const { limit = 5 } = req.params;
      // orders the rating in descending order
      const result = await client.query(
        `SELECT * FROM top_nairobi_restaurants ORDER BY rating DESC LIMIT $1`,
        [limit]
      );

      const restaurant = result.rows;
      res.json(restaurant);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  //the rest
  app.get("/restaurants", async (req, res) => {
    try {
      // orders the rating in Ascending order
      const result = await client.query(
        `SELECT * FROM top_nairobi_restaurants ORDER BY rating ASC `
      );

      const restaurant = result.rows;
      res.json(restaurant);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  //UPDATE
  app.patch("/restaurants/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, location, rating, description } = req.body;

      const result = await client.query(
        `SELECT * FROM top_nairobi_restaurants WHERE id = $1`,
        [id]
      );
      const restaurant = result.rows[0];

      if (!restaurant) {
        return res.status(404).send("Restaurant not found");
      }

      const updateResult = await client.query(
        `UPDATE top_nairobi_restaurants SET name=$2, location=$3, rating=$4, description=$5 Where id=$1`,
        [id, name, location, rating, description]
      );
      res.send(`Restuarant with id ${id} updated succesfully `);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  app.put("/restaurants/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const errors = validateRestaurantData(req.body);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      const { name, location, rating, description } = req.body;

      const result = await client.query(
        `SELECT * FROM top_nairobi_restaurants WHERE id = $1`,
        [id]
      );
      const restaurant = result.rows[0];

      console.log(restaurant);

      if (!restaurant) {
        return res.status(404).send("Restaurant not found");
      }

      const updateResult = await client.query(
        `UPDATE top_nairobi_restaurants SET name=$2, location=$3, rating=$4, description=$5 Where id=$1`,
        [id, name, location, rating, description]
      );
      res.send(`Restuarant with id ${id} updated succesfully `);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  app.delete("/restaurants/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const result = await client.query(
        `SELECT * FROM top_nairobi_restaurants WHERE id = $1`,
        [id]
      );
      const restaurant = result.rows[0];

      if (!restaurant) {
        return res.status(404).send("Restaurant not found");
      }

      const deleteResult = await client.query(
        `DELETE FROM top_nairobi_restaurants WHERE id = $1`,
        [id]
      );
      res.send(`Restuarant with id ${id} deleted succesfully `);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

theMagic();

//req.body.name, req.body.location, req.body.rating, req.body.description
