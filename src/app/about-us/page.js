import Navbar from "@/components/modules/Navbar/Navbar";
import React from "react";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Footer from "@/components/modules/Footer/Footer";
import { getToken } from "@/utils/validations/auth";
function AboutUs() {
  const accessToken = getToken()
  return (
    <>
      <Navbar token={accessToken}/>
      <BreadCrumb route={'درباره ما'}/>
      <div className="grid grid-cols-3 justify-start items-start w-4/5 mx-auto mt-24">
        <div className="flex flex-col justify-center gap-y-6 text-black/85 self-center">
          <h4 className="text-base font-bold translate-y-3">درباره ما</h4>
          <h2 className="text-4xl font-bold w-80">فنجان داغ خوارزمی قهوه ست</h2>
        </div>
        <div className="text-gray-500 w-[280px] text-justify leading-8">
          تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
          ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه راسا به
          وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه است.
        </div>
        <div className="text-gray-500 w-[280px] text-justify leading-8">
          مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال 2007
          به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association of
          Europe) در آمده است.
        </div>
      </div>
      <div className="grid grid-cols-2 justify-start items-start w-4/5 mx-auto mt-48 mb-36">
        <div className="flex flex-col gap-y-4 text-black/85">
          <span className="text-sm font-bold">Set Coffee</span>
          <h2 className="text-4xl font-bold mb-4">داستان قهوه ست</h2>
          <p className="leading-7 w-[460px] text-justify">
            تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
            ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه راسا
            به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه
            است.
          </p>
          <p className="leading-7 w-[460px] text-justify">
            مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
            2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association
            of Europe) در آمده است و بسیاری از دوره‌های مربوط به فرآوری قهوه را
            مدیریت این مجموعه به صورت تخصصی در کارگاه‌های آموزشی این انجمن و
            همچنین کارگاه‌های تخصصی فرآوری قهوه به خصوص در زمینه بو دادن
            قهوه(Roasting) را در کشور آمریکا که از پیشگامان این صنعت است را
            گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و تکنولوژی روز دنیا
            وارد مرحله تولید قهوه به صورت صنعتی و گسترده شده‌ایم و مفتخریم اعلام
            کنیم که «قهوه ست» از این پس یک نام تجاری صنعتی در صنعت قهوه ایران
            است.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 text-black/85">
          <p className="leading-7 w-[460px] text-justify">
            مسیری را که بنیان‌گذاران «قهوه ست» در دهه 20 شمسی آغاز کرده‌اند
            اکنون وارد مرحله جدیدی شده است و مفتخریم اعلام کنیم در بهمن ماه 94
            موفق به اخذ مجوزهای مربوطه از وزارت بهداشت درمان و آموزش پزشکی و
            سازمان غذا دارو شده‌ایم و تولید سنتی و محدود قهوه را تبدیل به تولید
            صنعتی و انبوه کرده‌ایم.
          </p>
          <p className="leading-7 w-[460px] text-justify">
            از دیگر افتخارات مجموعه «قهوه ست» اخذ مدرک دیپلم دانش قهوه از انجمن
            قهوه تخصصی اروپا در فروردین ماه سال 95 است. (SCAE Coffee Diploma)
          </p>
          <p className="leading-7 w-[460px] text-justify">
            امید داریم با کسب دانش روز دنیا در این صنعت ارتقا کیفیت و تنوع محصول
            در حد استانداردهای جهانی را در آینده‌ای نزدیک شاهد باشیم.
          </p>
          <p className="leading-6 w-[460px] text-justify font-medium">صاحب امتیاز: شرکت فنجان داغ خوارزمی</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
