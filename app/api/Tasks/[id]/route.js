import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const foundTask = await Task.findOne({ _id: id });
    return NextResponse.json({ foundTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
};

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

export const PUT = async (req, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();
    const taskData = body.formData;

    const updatedTaskData = await Task.findByIdAndUpdate(id, {
      ...taskData,
    });
    return NextResponse.json(
      { message: "Task Updated", updatedTaskData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
