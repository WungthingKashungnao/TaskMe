import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    await Task.findByIdAndDelete(id);
    return NextResponse.json(
      { message: `Tas with id: ${id} deleted` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
};
