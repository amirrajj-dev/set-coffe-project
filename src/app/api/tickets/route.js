import connectToDb from "@/utils/db/db";
import ticketsModel from "@/utils/db/models/ticket";
import { authUser } from "@/utils/validations/auth";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server"; // Correct import for Response

export const POST = async (req) => {
  try {
    await connectToDb(); // Await for DB connection
    const reqBody = await req.json();
    const {
      title,
      body,
      department,
      subDepartment,
      priority,
      file,
      user,
      parentTicket,
    } = reqBody;

    const senderHuman = await authUser();

    const newTicket = {
      title,
      body,
      department,
      subDepartment,
      priority,
      user,
      createdBy: senderHuman.role === "admin" ? "admin" : "user",
    };

    if (file) newTicket.file = file;
    if (parentTicket) newTicket.parentTicket = parentTicket; // Add parentTicket if exists

    await ticketsModel.create(newTicket);

    return NextResponse.json(
      { message: "Ticket created successfully :)" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error creating new ticket => ${error}` },
      { status: 500 }
    );
  }
};

export const PUT = async (req) => {
  try {
    connectToDb();
    const user = await authUser();
    const body = await req.json();
    const { ticketAnswer, id } = body;
    if (ticketAnswer && isValidObjectId(id)) {
      const ticket = await ticketsModel.findOne({ _id: id });
      if (!ticket) {
        return Response.json(
          { message: "no ticket with this id :(" },
          {
            status: 404,
          }
        );
      }
      await ticketsModel.create({
        title: "تیکت پاسخ",
        body: ticketAnswer,
        department: ticket.department,
        subDepartment: ticket.subDepartment,
        priority: ticket.priority,
        parentTicket: ticket._id,
        user: user._id,
        isAnswered: true,
        createdBy: "admin",
      });
      await ticketsModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            isAnswered: true,
          },
        }
      );
      return Response.json({message : 'ticket answered successfully :)'} , {
        status : 200
      })
    }
    return Response.json({message : 'invaid object id  or null ticketAnswer'} , {
      status : 402
    })
  } catch (error) {
    return Response.json(
      { message: `error updating ticket => ${error}` },
      {
        status: 500,
      }
    );
  }
};
