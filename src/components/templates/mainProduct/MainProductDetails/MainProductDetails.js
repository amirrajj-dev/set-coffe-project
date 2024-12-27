"use client";
import React from "react";
import Tabs from "../Tabs/Tabs";
import CommentBox from "../CommentBox/CommentBox";
import Comment from "../Comment/Comment";
function MainProductDetails({
  weight,
  comments,
  productId,
  fever,
  commentsWithAdminAnswer
}) {
  const [tabValue, setTabValue] = React.useState(1);
  const acceptedComments = []
  comments.map(comment=>{
    if(comment.isAccept){
      acceptedComments.push(comment)
    }else{
      return false
    }
  })
  
  return (
    <>
      <div className="flex items-center justify-center gap-x-8 text-xl pt-4 text-gray-500 border-t border-gray-300">
        <Tabs setTabValue={setTabValue} commentsLength={acceptedComments.length} />
      </div>
      {tabValue === 1 && (
        <>
          <div className="flex flex-col items-start gap-y-20 mt-20">
            <h2 className="text-slate-900 text-xl font-medium">
              Colombia , Nariño
            </h2>
            <h3 className="text-slate-900 text-2xl font-medium">
              دانه قهوه کلمبیا از منطقه Nariño
            </h3>
            <div className="flex flex-col items-start gap-y-4 text-gray-500 text-xs">
              <span>Region: Nariño</span>
              <span>Variety: CASTILLO , CATURRA</span>
              <span>Farm owner: Various Local farmers</span>
              <span>Altitude: 1720 masl</span>
              <span>Notes: Floral , Nuts , Maple syrup</span>
            </div>
            <h2 className="text-slate-900 text-2xl font-medium">بررسی محصول</h2>
            <p className="text-gray-500 text-sm leading-6">
              کلمبیا سومین تولید کننده بزرگ قهوه پس از برزیل و ویتنام است. تا
              همین چند سال پیش که روبوستای ویتنام در دنیا فراگیر نشده بود مقام
              دوم تولید دانه قهوه از آن کلمبیا بود. آب و هوا و خاک این کشور آن
              را برای کشت دانه قهوه کلمبیا با کیفیت بالا متمایز کرده است. بد
              نیست بدانید دانه قهوه کلمبیا در سرتاسر دنیا زبانزد خاص و عام است
              به طوری که اغراق نیست اگر بگوییم معمولا نخستین تصویر بعد از شنیدن
              واژه قهوه در ذهن قهوه‌خورهای حرفه‌ای، قهوه‌های تولید کشور
              کلمبیاست. شاید شما هم بارها نشان معروف Cafe de Colombia را دیده
              باشید.
            </p>
            <img
              src="https://set-coffee.com/wp-content/uploads/2019/08/cafe_de_colombia.jpg"
              className="w-[420px] mx-auto"
              alt=""
            />
            <p className="text-gray-500 text-sm leading-6">
              جالب است بدانید که این لوگو یا نشان اولین بار در سال 1958 برای
              مقاصد تبلیغاتی استفاده شد. علامتی که به نشان Juan Valdez نیز معروف
              است و به عنوان نمادی برای کشاورزان قهوه در کلمبیا استفاده می‌شود.
            </p>
            <p className="text-gray-500 text-sm leading-6">
              قهوه در مناطق وسیعی از کلمبیا از شمال تا جنوب کشت می‌شود و هر
              منطقه‌ای خصوصیات خاص خود را داراست. به طور مثال معمولا قهوه‌ای که
              در مناطق شمالی‌تر کلمبیا مانند Santander رشد می‌کند چون در ارتفاع
              کمتری رشد می‌کند اسیدیته کمتر ولی در عوض بادی یا تن‌واری بیشتری
              دارد. در مقابل قهوه‌ای که در مناطق جنوبی‌تر رشد می‌کند، اسیدیته
              بالاتر دارند و همین‌طور دارای شیرینی -sweetness- جذابی است. در این
              میان دو منطقه Huila و Narino از شاخص‌ترین مناطق جنوبی رشد قهوه در
              کلمبیا هستند.
            </p>
            <p className="text-gray-500 text-sm leading-6">
              نارینو جنوبی ترین منطقه کشت قهوه در کلمبیا است که از جنوب به
              اکوادور و از شمال به منطقه کائوکا در ارتباط است . قهوه‌های نارینو
              به خاطر اسیدیته شفاف و همینطور شیرینی شناخته شده‌اند، و این شرایط
              جغرافیایی و آب و هوایی منحصربه‌فرد منطقه است که به این مشخصات کمک
              می‌کند. شیب ها و دره های چشمگیر که چشم انداز این منطقه را تشکیل می
              دهند تأثیر مستقیمی بر دمای منطقه دارد که باعث ایجاد مشخصات ذکر شده
              می گردد، هوای گرم و مرطوب در طول روز در مناطق پایین جمع می شود و
              در شب به آرامی از دامنه کوه ها بالا می رود. وضعیتی که به قهوه
              اجازه می دهد تا در ارتفاعات بسیار بالاتری نسبت به سایر نقاط کشور،
              تا ارتفاع حتی 2300 متری از سطح دریا، رشد کند.
            </p>
          </div>
          <div className=""></div>
        </>
      )}

      {tabValue === 2 && (
        <>
          <div className="flex flex-col w-1/2 mx-auto mt-8 space-y-4">
            <p className="flex items-center justify-between text-sm border-b border-gray-300 pb-4">
              <span className="text-slate-900 font-bold">وزن</span>
              <span className="text-gray-500">{weight} کیلوگرم</span>
            </p>
            <p className="flex items-center justify-between text-sm">
              <span className="text-slate-900 font-bold">انتخاب آسیاب</span>
              <span className="text-gray-500 w-[460px]">
                ئروپرس/ وی شصت (ریز تا متوسط) , اسپرسو ساز خانگی (ریز) , جذوه
                (بسیار ریز) , دانه , فرنچ پرس (درشت) , قهوه ساز خانگی (متوسط) ,
                کلد برو (خیلی درشت) , کمکس (متوسط به درشت) , مکا پات (ریز)
              </span>
            </p>
            <p className="flex items-center justify-between text-sm">
              <span className="text-slate-900 font-bold">میران بو</span>
              <span className="text-gray-500">{fever}</span>
            </p>
          </div>
        </>
      )}
      {tabValue === 3 && (
        <>
          <div className="grid grid-cols-2 items-start justify-start gap-x-24 mx-auto mt-8">
            <div>
              <h3 className="text-slate-900 font-medium text-sm">
                {acceptedComments.length} دیدگاه برای دانه قهوه کلمبیا اسپشیالیتی Nariño
                فراوریWASHED (شسته) 250 گرم
              </h3>
              <div className="flex flex-col max-h-[600px] ">
                {comments.map(
                  (comment) =>
                    comment.isAccept && (
                      <Comment
                        name={comment.name}
                        id={comment._id}
                        body={comment.body}
                        date={comment.date}
                        score={comment.score}
                        commentsWithAdminAnswer={commentsWithAdminAnswer}
                      />
                    )
                )}
              </div>
            </div>
            <div className="flex items-start">
              <CommentBox productId={productId} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MainProductDetails;
