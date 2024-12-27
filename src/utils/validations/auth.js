"use server";
import { sign, verify } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";
import { cookies } from "next/headers";
import usersModel from "../db/models/user";
import connectToDb from "../db/db";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex = /^09\d{9}$/;

const hashedPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const isValidPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateToken = async (data) => {
  const token = sign(data, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: "1d",
  });
  return token;
};

const generateRefreshToken = async (data) => {
  const token = sign(data, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: "7d",
  });
  return token;
};

const decodeToken = (token) => {
  try {
    const decodedToken = verify(token, process.env.ACCESS_TOKEN_KEY);
    return decodedToken;
  } catch (error) {
    console.error("Error decoding token:", error.message); // More specific log
    return false;
  }
};


const validatePhone = (phone) => {
  const validationResult = phoneRegex.test(phone);
  return validationResult;
};

const validateEmail = (email) => {
  const validationResult = emailRegex.test(email);
  return validationResult;
};

const validatePassword = (password) => {
  const validationResult = passwordRegex.test(password);
  return validationResult;
};

const getToken = () => {
  const token = cookies().get("token");
  return token;
};

const authUser = async ()=>{
  connectToDb()
  const token = cookies().get('token')?.value
  const tokenPayload = decodeToken(token)
  const user = await usersModel.findOne({name : tokenPayload.name})
  if (user){
    return JSON.parse(JSON.stringify(user));
  }else{
    return null;
  }
}

const authAdmin = async ()=>{
  connectToDb()
  const token = cookies().get('token')?.value
  const tokenPayload = decodeToken(token)
  const user = await usersModel.findOne({name : tokenPayload.name})
  if (user && user.role === 'admin'){
    return JSON.parse(JSON.stringify(user));
  }else{
    return null;
  }
}

const shouldShowUserDetailInAddingComment = async () => {
  try {
    const token = cookies().get("token")?.value; // Ensure token is correctly retrieved
    if (!token) {
      throw new Error("No token found");
    }

    const decodedToken = decodeToken(token);
    if (!decodedToken) {
      throw new Error("Error decoding token");
    }

    const user = await usersModel.findOne({ name: decodedToken.name });
    if (!user) {
      throw new Error("User not found");
    }

    if (user.rememberMeInAddingNewComment) {
      return JSON.parse(JSON.stringify(user));
    }

    return null;
  } catch (error) {
    console.error(
      "Error in shouldShowUserDetailInAddingComment:",
      error.message
    );
    throw error; // Throw error to handle it in the calling function if needed
  }
};

export {
  hashedPassword,
  isValidPassword,
  generateToken,
  generateRefreshToken,
  decodeToken,
  validateEmail,
  validatePassword,
  validatePhone,
  getToken,
  shouldShowUserDetailInAddingComment,
  authUser,
  authAdmin
};
