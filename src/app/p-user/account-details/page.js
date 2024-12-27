import UserPannelLayout from '@/components/layouts/UserPannelLayout'
import EditAccount from '@/components/templates/p-user/EditAccount'
import connectToDb from '@/utils/db/db'
import usersModel from '@/utils/db/models/user'
import { decodeToken } from '@/utils/validations/auth'
import { cookies } from 'next/headers'
import React from 'react'

async function Accountdetails() {
  
  return (
    <UserPannelLayout>
        <EditAccount/>
    </UserPannelLayout>
  )
}

export default Accountdetails