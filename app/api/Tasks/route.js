import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

// creating new task
export const POST = async (req) => {
  try {
    const body = await req.json();
    const taskData = body.formData;
    const NewTask = await Task.create(taskData);
    return NextResponse.json(
      { status: 201 },
      { message: "Task created", NewTask }
    );
  } catch (error) {
    return NextResponse.json({ status: 500 }, { message: "error", error });
  }
};
