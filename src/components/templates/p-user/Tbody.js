'use client'
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MdOutlinePending } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Tbody({comments}) {

  return (
    <tbody>
      {comments &&
        comments.map((comment) => (
          <tr
            key={comment._id}
            className="border-t border-amber-600 hover:bg-amber-700"
          >
            <td className="p-4">{comment?.name}</td>
            <td className="p-4">{comment?.email}</td>
            <td className="p-4">
              {comment?.isAccept ? (
                <FaCheck
                  className="text-white text-3xl cursor-pointer mx-auto"
                  onClick={() =>
                    toast.success("کامنت شما برای محصول موردنظر ثبت شده است" , {
                        position : 'top-left' ,
                        autoClose : 4000 ,
                        draggable : true ,
                    })
                  }
                />
              ) : (
                <MdOutlinePending
                  onClick={() =>
                    toast.info("کامنت شما توسط مدیران سایت در حال بررسی است :)" , {
                        position : 'top-left' ,
                        autoClose : 4000 ,
                        draggable : true ,
                    })
                  }
                  className="text-white mx-auto text-3xl cursor-pointer"
                />
              )}
            </td>
            <td className="p-4">{comment?.productId?.title}</td>
            <td className="p-4">
              {comment?.score ? (
              <div className="flex items-center justify-center gap-x-1">
                {Array(5 - comment?.score)
                  .fill(0)
                  .map((_, index) => (
                    <FaRegStar key={index} className="text-yellow-500" />
                  ))}
      
                {Array(comment?.score)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
              </div>
              ) : (
                <div>کاربر به این محصول امتیازی نداده است</div>
              )}
            </td>
            <td className="p-4">
              <button className="bg-slate-300 rounded-lg py-2 px-4 text-amber-950 hover:bg-slate-400" onClick={()=>Swal.fire({
                title : 'متن کامنت' ,
                text : comment.body ,
                icon : 'info'
              })}>
                مشاهده کامنت
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
}

export default Tbody;
