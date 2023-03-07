const sql = require('mssql')
const { Router } = require('express')
const router = Router()

//Database
const { getConnection } = require('../database')


router.get('/', async (req, res) => {
  const pool = await getConnection()
  const response = await pool.request().query('SELECT * FROM inventario')

  res.send(response.recordset)
})

router.post('/', async (req, res) => {
  const { id_ref, nombre, detalle, imagen, precio } = req.body;
  const cantidad = 1

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id_ref", sql.Int, id_ref)
    .input("nombre", sql.Text, nombre)
    .input("detalle", sql.Text, detalle)
    .input("imagen", sql.Text, imagen)
    .input("precio", sql.Int, precio)
    .input("cantidad", sql.Int, cantidad)
    .query(
      "INSERT INTO inventario (id_ref, nombre, detalle, imagen, precio, cantidad) VALUES (@id_ref, @nombre, @detalle, @imagen, @precio, @cantidad)"
    );
  res.status(201).json({
    message: "New product added",
    data: result.recordset,
  });
});

router.put('/', async (req, res) => {
  const { id_ref, cantidad } = req.body
  const pool = await getConnection()
  const result = await pool
    .request()
    .input("id_ref", sql.Int, id_ref)
    .input("cantidad", sql.Int, cantidad)
    .query("UPDATE inventario SET cantidad = @cantidad WHERE id_ref = @id_ref")
  res.status(201).json({
    message: "Product updated",
    data: result.recordset,
  });
})


module.exports = router