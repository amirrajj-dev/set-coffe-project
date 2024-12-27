"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  authUser,
  validateEmail,
  validatePassword,
  validatePhone,
} from "./auth"; // Ensure correct path
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [banUsers, setBanUsers] = useState(null);
  const route = useRouter();
  const checkAuth = async () => {
    try {
      const user = await authUser();
      setIsAuthenticated(!!user); // Convert to boolean
    } catch (error) {
      console.error("Failed to authenticate user:", error);
    }
  };

  useEffect(() => {
    checkAuth();
    const getBanUsers = async () => {
      const response = await fetch("/api/user/ban");
      const data = await response.json();
      setBanUsers(data);
    };
    getBanUsers();
  }, []);

  const handleSignUp = useCallback(
    async (name, phone, email, password) => {
      if (!banUsers) {
        toast.error("در حال دریافت اطلاعات...");
        return;
      }
      const isAvailableInBanUsers = banUsers?.some(
        (user) => user.phone === phone
      );
      if (isAvailableInBanUsers) {
        toast.error("کاربری با این مشخصات اجازه ثبت نام ندارد ", {
          autoClose: 3000,
          position: "top-left",
        });
        return;
      }
      try {
        const validPhone = validatePhone(phone.trim());
        if (!validPhone) {
          toast.error("شماره وارد شده معتبر نیست", {
            position: "top-left",
            autoClose: 3000,
          });
          return;
        }

        const validEmail = email ? validateEmail(email.trim()) : true;
        const validPassword = password
          ? validatePassword(password.trim())
          : true;
        const trimmedName = name.trim();

        if (validPhone && validPassword && trimmedName) {
          const payload = { name: trimmedName, phone };
          if (validEmail) payload.email = email.trim();
          if (password.trim()) payload.password = password.trim();

          const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const result = await response.json()
          console.log(result);
          

          if (response.status === 201) {
            checkAuth();
            setIsAuthenticated(true);
            toast.success("ثبت نام با موفقیت به انجام رسید :)", {
              position: "top-left",
              autoClose: 3000,
            });
            setTimeout(() => {
              route.replace("/");
            }, 4000);
          } else if (response.status === 400) {
            toast.error("کاربری با این اطلاعات وجود دارد !!", {
              position: "top-left",
              autoClose: 3000,
            });
          } else {
            toast.error("خطا در ثبت نام", {
              position: "top-left",
              autoClose: 3000,
            });
          }
        } else {
          toast.warning("اطلاعات مورد نیاز را پر کنید", {
            position: "top-left",
            autoClose: 3000,
          });
        }
      } catch (error) {
        toast.warn("در حال حاضر امکان ثبت نام وجود ندارد", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    },
    [route, banUsers]
  );

  const handleSignIn = useCallback(
    async (identifier, password) => {
      if (!banUsers) {
        toast.error("در حال دریافت اطلاعات...");
        return;
      }
      const isAvailableInBanUsers = banUsers?.some(
        (user) => user.phone === identifier || user.email === identifier
      );

      if (isAvailableInBanUsers) {
        toast.error("کاربری با این مشخصات اجازه ثبت نام ندارد ", {
          autoClose: 3000,
          position: "top-left",
        });
        return;
      }
      if (!identifier.trim()) {
        toast.warning("لطفا ایمیل و شماره موبایل خود را وارد کنید", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
      if (!password.trim()) {
        toast.warning("لطفا رمز عبور خود را وارد کنید", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      try {
        const response = await fetch("/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ identifier, password }),
        });

        if (response.status === 200) {
          checkAuth();
          setIsAuthenticated(true);
          toast.success("ورود با موفقیت انجام شد", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setTimeout(() => {
            route.replace("/");
          }, 4000);
        } else if (response.status === 404 || response.status === 401) {
          toast.error("ایمیل یا شماره یا رمز عبور اشتباه است", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error) {
        console.error("Failed to sign in:", error);
        toast.error("خطایی رخ داد. لطفا دوباره تلاش کنید.", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    },
    [route, banUsers]
  );

  const handleLogOut = useCallback(async () => {
    const response = await fetch("/api/auth/signout", {
      method: "POST",
    });
    if (response.status === 200) {
      checkAuth();
      setIsAuthenticated(true);
      toast.success("خروج با موفقیت انجام شد", {
        position: "top-left",
        autoClose: 3000,
      });
      setTimeout(() => {
        route.replace("/");
      }, 4000);
    }
    // Add any additional logout logic here, such as removing tokens
  }, []);

  const handleSendOtpCode = async (phone, name, handleStateChanges) => {
    if (name.trim().length >= 4 && phone.trim()) {
      const isValidPhone = validatePhone(phone);
      if (isValidPhone) {
        try {
          const response = await fetch("/api/auth/sms/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: phone,
            }),
          });

          if (response.status === 422) {
            toast.info("کاربری با این مشخصات قبلا ثبت نام کرده است");
            return;
          }

          if (response.ok) {
            Swal.fire({
              title: "کد با موفقیت ارسال شد",
              confirmButtonText: "ok",
              confirmButtonColor: "#431407",
              icon: "success",
              iconColor: "#431407",
              color: "#431407",
            });
            handleStateChanges({
              isShowSignupForm: false,
              isShowOtpForm: true,
            });
          } else {
            Swal.fire({
              title: "خطا در ارسال کد",
              confirmButtonText: "ok",
              confirmButtonColor: "#431407",
              icon: "error",
              iconColor: "#431407",
              color: "#431407",
            });
          }
        } catch (error) {
          Swal.fire({
            title: `خطا در ارسال کد ${error}`,
            confirmButtonText: "ok",
            confirmButtonColor: "#431407",
            icon: "success",
            iconColor: "#431407",
            color: "#431407",
          });
        }
      } else {
        Swal.fire({
          title: "شماره تماس وارد شده معتبر نمی باشد",
          confirmButtonText: "ok",
          confirmButtonColor: "#431407",
          icon: "error",
          iconColor: "#431407",
          color: "#431407",
        });
      }
    } else {
      Swal.fire({
        title: "لطفا تمامی فیلد های مورد نیاز را پر کنید",
        confirmButtonText: "ok",
        confirmButtonColor: "#431407",
        icon: "info",
        iconColor: "#431407",
        color: "#431407",
      });
    }
  };

  const handleVerifyCode = async (code , phone , name)=>{
    const response = await fetch('/api/auth/sms/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code,
        phone: phone,
        name : name
      }),
    });
    
    if (response.status === 404){
      Swal.fire({
        title: 'لطفا کد ارسال شده را وارد کنید',
        confirmButtonText : 'ok',
        confirmButtonColor : '#431407',
        icon : 'info',
        iconColor : '#431407',
        color : '#431407',
      })
    }
    if (response.status === 409){
      Swal.fire({
        title: 'کد وارد شده اشتباه است',
        confirmButtonText : 'ok',
        confirmButtonColor : '#431407',
        icon : 'error',
        iconColor : '#431407',
        color : '#431407',
      })
    }
    if (response.status === 401){
      Swal.fire({
        title: 'کد وارد شده منسوخ شده است کد جدیدی بگیرید',
        confirmButtonText : 'ok',
        confirmButtonColor : '#431407',
        icon : 'info',
        iconColor : '#431407',
        color : '#431407',
      })
    }

    if (response.status === 200){
      Swal.fire({
        title: 'ثبت نام با موفقیت انجام شد',
        confirmButtonText : 'ok',
        confirmButtonColor : '#431407',
        icon : 'success',
        iconColor : '#431407',
        color : '#431407',
      })
      setIsAuthenticated(true)
      setTimeout(() => {
        route.replace('/')
      }, 3200);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleSignIn,
        handleLogOut,
        handleSignUp,
        handleSendOtpCode,
        handleVerifyCode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
