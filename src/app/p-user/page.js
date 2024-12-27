import React from 'react'
import UserPannelLayout from '@/components/layouts/UserPannelLayout'
import MainDetailsBox from '@/components/modules/BoxInfo/BoxInfo'
import Tickets from '@/components/templates/p-user/Tickets'
import Orders from '@/components/templates/p-user/Orders'
import connectToDb from '@/utils/db/db'
import { authUser } from '@/utils/validations/auth'
import ticketsModel from '@/utils/db/models/ticket'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";
import commentsModel from '@/utils/db/models/comment'
import wishlistModel from '@/utils/db/models/wishlist'

async function UserPannel() {
  connectToDb()
    const user = await authUser()
    const tickets = await ticketsModel.find({user : user._id}).populate('department subDepartment' , '-__v').limit(4).sort({_id:  -1}) 
    //limit mongodb works like slice from 0 to limit number js its like tickets.slice(0,4)
    // .sort({_id:  -1})  works like js reverse() shows the latest ticket at top instead of default which shows latest ticket in bottom
    const comments = await commentsModel.find({name : user.username})
    const wishes = await wishlistModel.find({user : user._id})
  return (
    <UserPannelLayout>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 mt-20 gap-4 justify-self-center self-center">
          <MainDetailsBox title={'تیکت ها'} icon={<HiTicket/>} amount={tickets.length}/>
          <MainDetailsBox title={'کامنت ها'} icon={<FaComments/>} amount={comments.length}/>
          <MainDetailsBox title={'سفارشات'} icon={<FaCartShopping/>}/>
          <MainDetailsBox title={'علاقه مندی ها'} icon={<FaHeart/>} amount={wishes.length}/>
          </div>
          <div className="flex items-start mt-8 mr-12">
            <Tickets tickets={tickets}/>
            <Orders/>
          </div>
        </div>
    </UserPannelLayout>
  )
}

export default UserPannel