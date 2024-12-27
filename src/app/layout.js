import "../styles/globals.css";
import MyAos from "@/utils/MyAos/MyAos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/utils/validations/AuthContext";
import BasketProvider from "@/utils/validations/BasketContext";
import { CartProvider } from "@/utils/validations/CartContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const ShabnamLight = {
  src: "../../public/fonts/shabnam/Shabnam-Light.ttf",
  variable: "--shabnam-light",
  weight: "100",
};

export const metadata = {
  title: "صفحه اصلی - SET Coffee | فروشگاه اینترنتی قهوه ست",
  description: "Sabzlearn coffee project with next.js v13",

  icons: {
    icon: "https://awakedetroit.com/wp-content/uploads/2019/04/cropped-Favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-white font-shabnam-light">
        <MyAos />
        <AuthProvider>
          <BasketProvider>
            <CartProvider>
              <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
            </CartProvider>
          </BasketProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
