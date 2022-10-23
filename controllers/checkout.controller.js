const getOrderTime = require("../controllers/orders.time.controller");

const checkoutController = {};

checkoutController.getOrderTime = async (req, res) => {
  const orderTime = await getOrderTime();
  res.status(200).json(orderTime);
};

checkoutController.sendWhatsappMessage = (req, res) => {
  const { name, cart, phone, address, selectedOrderTime, note } = req.body;
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const message = `*Nueva Orden*%0A%0A*Nombre:* ${name}%0A*Telefono:* ${phone}%0A*Direccion:* ${address}%0A*Horario:* ${selectedOrderTime}%0A*Total:* ${total}%0A*Nota:* ${note}%0A%0A*Productos:*%0A${cart
    .map(
      (item) =>
        `${item.name} ${item.of} con ${item.garnish} - ${item.quantity} x ${item.price}`
    )
    .join("%0A")}`;
  const url = `https://api.whatsapp.com/send?phone=5492241548450&text=${message}`;
  res.status(200).json({ url });
};

module.exports = checkoutController;
