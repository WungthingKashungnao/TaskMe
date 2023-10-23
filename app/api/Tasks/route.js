import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

// creating new task
export const POST = async (req) => {
  try {
    const body = await req.json();
    const taskData = body.formData;
    const NewTask = await Task.create(taskData);
    return NextResponse.json(
      { message: "Task created", NewTask },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
};

// get all tasks
export const GET = async () => {
  try {
    const tasks = await Task.find();
    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
};
