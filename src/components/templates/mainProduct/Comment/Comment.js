import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Comment({ name, body, date, score, commentsWithAdminAnswer, id }) {
  const fullStars = Math.floor(score);
  const emptyStars = 5 - fullStars;

  return (
    <>
      <div className="flex flex-col gap-y-3 border-b border-gray-300">
        <div className="flex items-center gap-x-3 text-sm pb-6 mt-6">
          <img
            src="https://secure.gravatar.com/avatar/7c598d2d8f3262abe7dc95dbdba9ba7b?s=60&d=mm&r=g"
            alt=""
            className="rounded-full"
          />
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between w-[520px]">
              <div className="flex items-center justify-center gap-x-2">
                <span className="text-slate-900 font-medium">{name} -</span>
                <span className="text-gray-500 text-nowrap">
                  {new Date(date).toLocaleDateString("fa-IR")}
                </span>
              </div>
              {score !== 0 ? (
                <div className="flex items-center justify-center gap-x-1">
                  {[...Array(fullStars)].map((s) => (
                    <FaStar className="text-yellow-500" key={Math.random()} />
                  ))}
                  {[...Array(emptyStars)].map((s) => (
                    <FaRegStar className="text-yellow-500" key={Math.random()} />
                  ))}
                </div>
              ) : null}
            </div>
            <div className="text-gray-500">{body}</div>
          </div>
        </div>
        <div>
          {commentsWithAdminAnswer
            .filter((comment) => comment.adminAnswer === id)
            .map((comment) => (
              <div
                key={comment._id}
                className="flex items-center mr-2 gap-x-3 text-sm border-b border-gray-300 pb-6 mt-6 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 rounded shadow-lg p-4"
              >
                <img
                  src="https://secure.gravatar.com/avatar/7c598d2d8f3262abe7dc95dbdba9ba7b?s=60&d=mm&r=g"
                  alt=""
                  className="rounded-full border-2 border-indigo-400"
                />
                <div className="flex flex-col gap-y-4">
                  <div className="flex items-center justify-between w-[520px]">
                    <div className="flex items-center justify-center gap-x-2">
                      <span className="text-white font-medium">
                        {comment.name} -
                      </span>
                      <span className="text-gray-300 text-nowrap">
                        {new Date(comment.date).toLocaleDateString("fa-IR")}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-100">{comment.body}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Comment;