INSERT INTO products (ProductId, description, stock, price, weight, saleSaleId) 
VALUES 
  ('P001', 'Martillo', 50, 150.00, 1.2, NULL),
  ('P002', 'Pintura acrílica', 100, 200.00, 5.5, NULL),
  ('P003', 'Tornillos de acero inoxidable', 200, 50.00, 0.8, 'S001'),
  ('P004', 'Cable eléctrico 3x2', 150, 75.00, 3.0, NULL),
  ('P005', 'Pintura para metal', 80, 250.00, 4.0, 'S002');
