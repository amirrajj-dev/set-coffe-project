import otpModel from "@/utils/db/models/otp";
import connectToDb from "@/utils/db/db";
import usersModel from "@/utils/db/models/user";
const request = require("request");
export const POST = async (req) => {

    try {
        connectToDb()
        const body = await req.json()
        const { phone } = body;
        const user = await usersModel.findOne({phone})
        if (user){
          return Response.json({message : 'user already exists !!'} , {
            status : 422
          })
        }
        const code = Math.floor(Math.random() * 99999);
        const date = new Date()
        const expTime = date.getTime() + 60_000; //the expire time is 1 minutes 
      
        request.post(
          {
            url: "http://ippanel.com/api/select",
            body: {
              op: "pattern",
              user: "FREE09389829461",
              pass: "Faraz@2210427304",
              fromNum: "3000505",
              toNum: phone,
              patternCode: "lgug5g38zvgcl98",
              inputData: [{ "verification-code": code }],
            },
            json: true,
          },
          async function (error, response, body) {
            if (!error && response.statusCode === 200) {
              //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE
             await otpModel.create({
              phone ,
              code ,
              expTime 
             })
             return Response.json({message : "Code Sent Successfully :))"} , {
              status : 201
             })
            } else {
              return Response.json({message : "UnKnown Error !!"} , {
                status : 500
               })
            }
          }
        );
        return Response.json({message: "Code Sent Successfully"}, {
            status : 201
        })
    } catch (error) {
        return Response.json({message: `Error creating otp => ${error}`} , {
            status : 500
        })
    }
};