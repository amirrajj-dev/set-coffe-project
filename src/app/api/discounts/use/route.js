import connectToDb from "@/utils/db/db";
import discountsModel from "@/utils/db/models/discount";

export const PUT = async (req) => {
  try {
    connectToDb();
    const body = await req.json();
    const { discountId } = body;
    const discount = await discountsModel.findOne({ _id: discountId });
    if (discount) {
      if (discount.maxUsage === discount.usage) {
        return Response.json(
          { message: "discount expired" },
          {
            status: 402,
          }
        );
      }
      
      discount.usage = discount.usage + 1;
      await discount.save();
      return Response.json(
        { message: "discount applied successfully" },
        {
          status: 200,
        }
      );
    }
    
    return Response.json({message: "discount not found"} , {
        status: 404
    })

  } catch (error) {
    return Response.json(
      { message: `Error applying discount => ${error}` },
      {
        status: 500,
      }
    );
  }
};