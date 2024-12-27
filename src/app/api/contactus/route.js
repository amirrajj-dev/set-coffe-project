import connectToDb from "@/utils/db/db";
import contactModel from "@/utils/db/models/contact";

export const POST = async (req) => {
  try {
    await connectToDb();
    const body = await req.json();
    const { email, name, company, phone, message } = body;

    // Create a new contact entry with provided details
    const newContact = { email, name, message }; //nesseccery fields :)
    if (company) newContact.company = company;
    if (phone) newContact.phone = phone;

    await contactModel.create(newContact);

    return new Response(
      JSON.stringify({ message: 'Message sent successfully :)' }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: `Error sending contact us message => ${error}` }),
      { status: 500 }
    );
  }
};