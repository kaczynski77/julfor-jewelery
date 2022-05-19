import prisma from "./lib/db";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await updateInquiry(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function updateInquiry(req, res) {
  const body = req.body;

 const path = body.path.substring(1);
 console.log(path);
  try {

    const updatePath= await prisma.item.update({
        where: {
          id: body.updateId,
        },
        data: {
          image: path,
        },
      })
    return res.status(200).json(updatePath, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error creating question', success: false });
  }
}
