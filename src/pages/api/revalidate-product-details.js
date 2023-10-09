// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_SECRET_REVALIDATION_KEY) {
    return res.status(401).json({ message: "Invalid token" });
  }
  
  try {
    const { id } = req.query;

    await res.revalidate(`/product/get-static-props/${id}`); // URL trong page muốn revalidate
    return res.json({ revalidated: true });
  } catch (err) {
    console.log('««««« err »»»»»', err);
    return res.status(500).send({ message: "Error revalidating" });
  }
}
