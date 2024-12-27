// ArticleBox.js
import React from "react";
import { VscComment } from "react-icons/vsc";
import { AiOutlineShareAlt } from "react-icons/ai";

function ArticleBox({ title, image, createdAt }) {
  return (
    <div className="relative w-[390px] h-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      <img
        src={`/blogs/${image}`}
        className="w-full h-[400px] object-cover"
        alt="article slide"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
        <span className="bg-amber-950 text-white rounded-full px-4 py-1 mb-2 font-semibold shadow-lg">
          قهوه
        </span>
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-center justify-center gap-x-3 mt-2 font-bold text-gray-300">
          <span>نویسنده</span>
          <img
            src="https://secure.gravatar.com/avatar/665a1a4dc7cc052eaa938253ef413a78?s=32&d=mm&r=g"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            alt="author"
          />
          <span>Mohebi</span>
          <div className="flex relative items-center ml-4">
            <VscComment className="text-2xl" />
            <span className="absolute bg-amber-950 w-5 h-5 text-xs -top-2 -left-2 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <AiOutlineShareAlt className="text-2xl ml-6" />
        </div>
      </div>
      <div className="absolute top-4 left-4 bg-amber-950 text-white py-2 px-4 rounded-lg shadow-lg text-sm font-medium">
        {new Date(createdAt).toLocaleDateString('fa-IR')}
      </div>
    </div>
  );
}

export default ArticleBox;