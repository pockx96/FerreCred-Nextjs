DELIMITER //
CREATE TRIGGER before_insert_sale 
BEFORE INSERT ON Sale
FOR EACH ROW
BEGIN
    DECLARE last_sale_id INT;
    DECLARE last_ticket_number INT;

    -- Generar SaleId
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(SaleId, '-', -1) AS UNSIGNED)), 0) INTO last_sale_id FROM Sale;
    SET NEW.SaleId = CONCAT('Sd-', LPAD(last_sale_id + 1, 3, '0'));

    -- Generar saleTicket
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(saleTicket, 'Tk', -1) AS UNSIGNED)), 0) INTO last_ticket_number FROM Sale;
    SET NEW.saleTicket = CONCAT('Tk', LPAD(last_ticket_number + 1, 3, '0'));
END
DELIMITER ;

SHOW TRIGGERS;

INSERT INTO Sale (date, total, methodPay, clientSale, productSale) 
VALUES ('2024-11-21', 1000.00, 'cash', 123, 'productA,productB');

SELECT * FROM Sale;
