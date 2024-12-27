import Navbar from "@/components/modules/Navbar/Navbar";
import React from "react";
import productsModel from "@/utils/db/models/product";
import connectToDb from "@/utils/db/db";
import { authUser, decodeToken, getToken } from "@/utils/validations/auth";
import usersModel from "@/utils/db/models/user";
import { getUsersWishList } from "@/utils/validations/getUsersWishList";
import wishlistModel from "@/utils/db/models/wishlist";
import dynamic from "next/dynamic";
import commentsModel from "@/utils/db/models/comment";
const MainProductImg = dynamic(
  () =>
    import("@/components/templates/mainProduct/MainProductImg/MainProductImg"),
  {
    loading: () => <span>Loading ...</span>,
  }
);
const MainProductSummery = dynamic(
  () =>
    import(
      "@/components/templates/mainProduct/MainProductSummery/MainProductSummery"
    ),
  {
    loading: () => <span>Loading ...</span>,
  }
);
const MainProductDetails = dynamic(
  () =>
    import(
      "@/components/templates/mainProduct/MainProductDetails/MainProductDetails"
    ),
  {
    loading: () => <span>Loading ...</span>,
  }
);
const ProductsSwiper = dynamic(
  () =>
    import("@/components/templates/mainProduct/ProductSwiper/ProductsSwiper"),
  {
    loading: () => <span>Loading ...</span>,
  }
);
const Footer = dynamic(() => import("@/components/modules/Footer/Footer"), {
  loading: () => <span>Loading ...</span>,
});
const ScrollToTop = dynamic(
  () => import("@/components/modules/ScrollToTop/ScrollToTop"),
  {
    loading: () => <span>Loading ...</span>,
  }
);

async function MainProduct({ params }) {
  const productId = params.id;
  connectToDb();
  const user = await authUser();

  const product = await productsModel
    .findOne({ _id: productId })
    .populate("comments discountId");
  const commentsWithAdminAnswer = await commentsModel.find({
    adminAnswer: { $exists: true },
    productId : params.id
  });

  const products = await productsModel.find({}).limit(8).sort({_id : -1}).lean()
  

  const percent = product.discountId ? Number(product.discountId.percent) : null
  
  

  const relatedProducts = await productsModel.find({
    $or: [
      { feverAmount: { $in: product.feverAmount } },
      { tags: { $in: product.tags } },
    ],
  });
  

  const usersWishList = await getUsersWishList();

  //  this is mainproductsummary prop :)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <div className="grid grid-cols-2 justify-start items-start w-4/5 mx-auto p-4">
          <MainProductImg img={`${product.image}`} />
          <div className="mt-8">
            <MainProductSummery
              // title={product.title}
              // price={product.price}
              usersWishList={JSON.parse(JSON.stringify(usersWishList))}
              // productCommentsLength={product.comments.length}
              // scoreAmount={product.scoreYouGet}
              // productId={JSON.parse(JSON.stringify(product?._id))}
              userId={user ? JSON.parse(JSON.stringify(user._id)) : null}
              // shortDesc={product.shortDesc}
              // isAvailable={product.isAvailable}
              // score={product.score}
              // tags={product.tags}
              discount={percent}
              // scoreYouGet={product.scoreYouGet}
              // fever={product.feverAmount}
              product={JSON.parse(JSON.stringify(product))}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12">
          <MainProductDetails
            weight={product.weight}
            comments={JSON.parse(JSON.stringify(product.comments))}
            productId={JSON.parse(JSON.stringify(product._id))}
            fever={product.feverAmount}
            commentsWithAdminAnswer={commentsWithAdminAnswer}
          />
          <h2 className="text-slate-900 font-medium text-xl mt-8 mr-6 mb-8 border-t border-gray-300 pt-8">
            محصولات مرتبط
          </h2>
          <ProductsSwiper products={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainProduct;