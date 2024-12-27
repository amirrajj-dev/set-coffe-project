"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuUploadCloud } from "react-icons/lu";
import { toast } from "react-toastify";

function AddTicket() {
  const [departments, setDepartments] = useState(null);
  const [subDepatments, setSubDepartments] = useState(null);
  const [departmentId, setDepartmentId] = useState(-1);
  const [subDepartmentId, setSubDepartmentId] = useState(-1);
  const [ticketTitle , setTicketTitle] = useState('')
  const [ticketBody , setTicketBody] = useState('')
  const [priority , setPriority] = useState(1)
  const [user , setUser] = useState(null)
  const fileInputRef = useRef(null)
  useEffect(() => {
    const getDepartments = async () => {
      const response = await fetch("/api/departments");
      const data = await response.json();
      setDepartments(data);
    };
    const getUser = async ()=>{
        const reposne = await fetch('/api/auth/me')
        const user = await reposne.json()
        setUser(user)
    }
    getDepartments()
    getUser()
  }, []);

  useEffect(() => {
    const getSubDepartments = async () => {
      const response = await fetch(`/api/departments/sub/${departmentId}`);
      const data = await response.json();
      setSubDepartments(data);
    };
    if (departmentId !== -1){
      getSubDepartments();
    }else{
      setSubDepartments(null)
    }
  }, [departmentId]);

  const handleTicketFile = e=>{
    const file = e.target.files[0]
    
    if (file){
        fileInputRef.current = file
    }
  }

  const addTicket = async ()=>{
    
    if (ticketTitle.trim().length > 4 && ticketBody.trim().length > 8 && departmentId !== -1 && subDepartmentId !== -1 && user ){
      const newTicket = {
          title: ticketTitle,
          body: ticketBody,
          priority: priority,
          department: departmentId,
          subDepartment : subDepartmentId,
          file: fileInputRef.current ? fileInputRef.current.name : null,
          user : user._id
      }
      
      const response = await fetch('/api/tickets' , {
        method : 'POST' ,
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(newTicket)
      })

      const result = await response.json()
      

      if (response.status === 201){
        toast.success('تیکت مورد نظر با موفقیت ارسال شد :)' , {
          autoClose : 3000 ,
          position : 'top-left'
        })
      }

    }else{
      toast.error('تمام فیلد های مورد نیاز را پر کنید' , {
        autoClose : 3000 ,
        position : 'top-left'
      })
    }
    
  }

  return (
    <div className="grid grid-cols-2 gap-4 mt-12">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="username">دپارتمان را انتخاب کنید : </label>
          <select
            id="username"
            className="border-2 outline-none border-amber-950 px-2 h-10 rounded"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
          >
            <option value={-1} defaultValue={true}>لطفا یک مورد را انتخاب کنید</option>
            {departments?.map((department) => (
              <option value={department._id} key={department._id}>
                {department.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="username">عنوان تیکت را وارد کنید : </label>
          <input
            type="text"
            id="username"
            value={ticketTitle}
            onChange={(e) =>setTicketTitle(e.target.value)}
            className="border-2 outline-none border-amber-950 px-2 h-10 rounded"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="username">نوع تیکت را انتخاب کنید : </label>
          <select
            id="username"
            className="border-2 outline-none border-amber-950 px-2 h-10 rounded"
            value={subDepartmentId}
            onChange={e=>setSubDepartmentId(e.target.value)}
          >
            <option value={-1} defaultValue={true}>لطفا یک مورد را انتخاب کنید</option>
            {subDepatments && subDepatments.length > 0 && subDepatments?.map((subDepartment) => (
              <option value={subDepartment._id} key={subDepartment._id}>
                {subDepartment.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="username">سطح الویت تیکت را انتخاب کنید : </label>
          <select
            id="username"
            className="border-2 outline-none border-amber-950 px-2 h-10 rounded"
            value={priority}
            onChange={e=>setPriority(e.target.value)}
          >
            <option value={1}>کم</option>
            <option value={2}>متوسط</option>
            <option value={3}>بالا</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 col-span-full">
        <label htmlFor="body">محتوای تیکت خود را وارد کنید : </label>
        <textarea
          id="body"
          value={ticketBody}
          onChange={e=>setTicketBody(e.target.value)}
          className="border-2 outline-none border-amber-950 p-4 h-44 rounded"
        ></textarea>
      </div>
      <div className="flex flex-col items-center justify-center text-amber-950 col-span-full gap-y-2 py-4  bg-orange-400 rounded mt-4">
        <span>حداکثر اندازه 6 مگابایت</span>
        <span className="text-white">
          فرمت های مجاز : jpg , jpeg , png , rar , zip
        </span>
        <div className="relative">
          <button className="bg-orange-700 rounded w-60 h-10 flex items-center justify-center gap-x-1 shadow text-white">
            <span>انتخاب فایل</span>
            <LuUploadCloud className="text-lg" />
          </button>
          <input
            type="file"
            className="w-60 h-10 rounded absolute top-0 opacity-0"
            ref={fileInputRef}
            onChange={e=>handleTicketFile(e)}
          />
        </div>
      </div>
      <button onClick={addTicket} className="bg-amber-950 rounded w-72 h-10 flex items-center justify-center col-span-full mx-auto gap-x-1 shadow text-white">
        ارسال تیکت
      </button>
    </div>
  );
}

export default AddTicket;
