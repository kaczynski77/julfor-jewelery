import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await deleteRecord(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function deleteRecord(req, res) {
  const body = req.body;
  console.log(body);
  try {
    // const newEntry = await prisma.item.create({
    //   data: {
    //     title: body.title,
    //     price: body.price,
    //     category: body.category,
    //     description: body.description,
    //   },
    // });

    const deleteItem = await prisma.item.delete({
      where: {
        id: body.id,
      },
    });

    return res.status(200).json(deleteItem, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error creating question', success: false });
  }
}
