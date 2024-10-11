import { MercadoPagoConfig, Preference } from 'mercadopago';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
      const preference = new Preference(client);

      const { cartItems } = req.body;

      const items = cartItems.map(item => ({
        title: "Velas Aromaticas",
        unit_price: item.price,
        quantity: item.quantity,
      }));

      const result = await preference.create({
        body: {
          items,
          back_urls: {
            success: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
            failure: `${process.env.NEXT_PUBLIC_BASE_URL}/failure`,
            pending: `${process.env.NEXT_PUBLIC_BASE_URL}/pending`,
          },
          auto_return: 'approved',
        },
      });

      res.status(200).json({ preferenceId: result.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear la preferencia' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;