// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

type Data = {
  name: string;
};

export default function GET(req: Request) {
  NextResponse.json({ name: "John Doe" });
  // res.status(200).json({ name: "John Doe" });
}
