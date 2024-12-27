import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import React from "react";

function Rules() {
  return (
    <>
      <Navbar />
      <BreadCrumb route={"شرایط و قوانین"} />
      <div className="max-w-7xl mx-auto mt-12">
        <p className="text-gray-500 text-sm">
          کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و برنامه‌ای
          کاربردی قهوه ست به دقت ملاحظه فرمایید.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          ورود کاربران به وب‏‌سایت قهوه ست هنگام استفاده از پروفایل شخصی،
          طرح‏‌های تشویقی، ویدئوهای رسانه تصویری قهوه ست و سایر خدمات ارائه شده
          توسط قهوه ست به معنای آگاه بودن و پذیرفتن شرایط و قوانین و همچنین نحوه
          استفاده از سرویس‌‏ها و خدمات قهوه ست است. توجه داشته باشید که ثبت
          سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین قهوه ست
          از سوی کاربر است.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          لازم به ذکر است شرایط و قوانین مندرج، جایگزین کلیه توافق‏‌های قبلی
          محسوب می‏‌شود.
        </p>
        <h3 className="text-gray-500 text-sm font-bold mt-4">قوانین عمومی</h3>
        <p className="text-gray-500 text-sm mt-4">
          توجه داشته باشید کلیه اصول و رویه‏‌های قهوه ست منطبق با قوانین جمهوری
          اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده
          است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است. در
          صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های قهوه ست تغییراتی در
          آینده ایجاد شود، در همین صفحه منتشر و به روز رسانی می شود و شما توافق
          می‏‌کنید که استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.
        </p>
        <h3 className="text-gray-500 text-sm font-bold mt-4">
          تعریف مشتری با کاربر
        </h3>
        <p className="text-gray-500 text-sm mt-4">
          مشتری یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری خود که در فرم
          ثبت نام درج کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات قهوه ست
          اقدام کند.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          همچنین از آنجا که قهوه ست یک وب‌سایت خرده‌فروشی آنلاین است، طبق قانون
          تجارت الکترونیک مشتری یا مصرف کننده هر شخصی است که به منظوری جز تجارت
          یا شغل حرفه‌ای به خرید کالا یا خدمات اقدام می‌کند.
        </p>
        <h3 className="text-gray-500 text-sm font-bold mt-4">
          ارتباطات الکترونیکی
        </h3>
        <p className="text-gray-500 text-sm mt-4">
          هنگامی که شما از سرویس‌‏ها و خدمات قهوه ست استفاده می‏‌کنید، سفارش
          اینترنتی خود را ثبت یا خرید می‏‌کنید و یا به قهوه ست ایمیل می‏‌زنید،
          این ارتباطات به صورت الکترونیکی انجام می‏‌شود و در صورتی که درخواست
          شما با رعایت کلیه اصول و رویه‏‌ها باشد، شما موافقت می‌‏کنید که قهوه ست
          به صورت الکترونیکی (از طریق پست الکترونیکی، سرویس پیام کوتاه و سایر
          سرویس‌های الکترونیکی) به درخواست شما پاسخ دهد.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          جهت اطلاع رسانی رویدادها، خدمات و سرویس‌های ویژه یا پروموشن‌ها، امکان
          دارد قهوه ست برای اعضای وب سایت ایمیل یا پیامک ارسال نماید. در صورتی
          که کاربران تمایل به دریافت اینگونه ایمیل و پیامک‌ها نداشته باشند،
          می‌توانند عضویت دریافت خبرنامه قهوه ست را در پروفایل خود لغو کنند.
        </p>
        <h3 className="text-gray-500 text-sm font-bold mt-4">
          سیاست‏‌های رعایت حریم شخصی
        </h3>
        <p className="text-gray-500 text-sm mt-4">
          قهوه ست به اطلاعات خصوصی اشخاصى که از خدمات سایت استفاده می‏‌کنند،
          احترام گذاشته و از آن محافظت می‏‌کند.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          قهوه ست متعهد می‏‌شود در حد توان از حریم شخصی شما دفاع کند و در این
          راستا، تکنولوژی مورد نیاز برای هرچه مطمئن‏‌تر و امن‏‌تر شدن استفاده
          شما از سایت را، توسعه دهد. در واقع با استفاده از سایت قهوه ست، شما
          رضایت خود را از این سیاست نشان می‏‌دهید.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          همه مطالب در دسترس از طریق هر یک از خدمات قهوه ست، مانند متن، گرافیک،
          آرم، آیکون دکمه، تصاویر، ویدئوهای تصویری، موارد قابل دانلود و کپی،
          داده‌ها و کلیه محتوای تولید شده توسط قهوه ست جزئی از اموال قهوه ست
          محسوب می‏‌شود و حق استفاده و نشر تمامی مطالب موجود و در دسترس در
          انحصار قهوه ست است و هرگونه استفاده بدون کسب مجوز کتبی، حق پیگرد
          قانونی را برای قهوه ست محفوظ می‏‌دارد. علاوه بر این، اسکریپت‌ها، و
          اسامی خدمات قابل ارائه از طریق هر یک از خدمات ایجاد شده توسط قهوه ست و
          علائم تجاری ثبت شده نیز در انحصار قهوه ست است و هر گونه استفاده با
          مقاصد تجاری پیگرد قانونی دارد. کاربران مجاز به بهره‌‏برداری و استفاده
          از لیست محصولات، مشخصات فنی، قیمت و هر گونه استفاده از مشتقات وب‏‌سایت
          قهوه ست و یا هر یک از خدمات و یا مطالب، دانلود یا کپی کردن اطلاعات با
          مقاصد تجاری، هر گونه استفاده از داده کاوی، روبات، یا روش‌‏های مشابه
          مانند جمع آوری داده‌‏ها و ابزارهای استخراج نیستند و کلیه این حقوق به
          صراحت برای قهوه ست محفوظ است. در صورت استفاده از هر یک از خدمات قهوه
          ست، کاربران مسئول حفظ محرمانه بودن حساب و رمز عبور خود هستند و تمامی
          مسئولیت فعالیت‌‏هایی که تحت حساب کاربری و یا رمز ورود انجام می‏‌پذیرد
          به عهده کاربران است. قهوه ست محصولاتی مناسب استفاده افراد زیر 18 سال
          به فروش می‏‌رساند و در صورتی که کاربران از سن ذکر شده جوان‌‏تر هستند
          می‌‏باید با اطلاع والدین و یا قیم قانونی، به خرید و پرداخت اقدام کنند.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          تنها مرجع رسمی مورد تایید ما برای ارتباط با شما، پایگاه رسمی این سایت
          یعنی set-coffee.com است. ما با هیچ روش دیگری جز ارسال نامه از طرف
          آدرس‏‌های رسمی و تایید شده در سایت، با شما تماس نمی‌‏گیریم. وب سایت
          قهوه ست هیچگونه سایت اینترنتی با آدرسی غیر از
        </p>
        <p className="text-gray-500 text-sm mt-4">
          set-coffee.com همچنین، شماره های 09023030738 و 09366726563 در پیام
          رسان تلگرام و واتز آپ نمی باشند. صفحه رسمی اینستاگرام قهوه ست
          instagram.com/set_coffee می باشد. لطفا به آی دی آن دقت کنید. کاربران
          جهت برقراری ارتباط، تنها می‏‌توانند از آدرس‌‏های ذکر شده در بخش ارتباط
          با ما استفاده کنند.
        </p>
        <h3 className="text-gray-500 text-sm font-bold mt-4">
          ثبت پردازش و ارسال سفارش
        </h3>
        <p className="text-gray-500 text-sm mt-4 mb-8">
          – روز کاری به معنی روز شنبه تا پنج شنبه هر هفته، به استثنای تعطیلات
          عمومی در ایران است و کلیه سفارش‏‌های ثبت شده در طول روزهای کاری و
          اولین روز پس از تعطیلات پردازش می‌‏شوند. قهوه ست به مشتریان خود در 7
          روز هفته و 24 ساعت در روز امکان سفارش‌‏گذاری می‌‏دهد.
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default Rules;
