import React from 'react'
import "./login.scss"
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head } from '@inertiajs/react';

const Login = ({auth}) => {
  return (
    <DashboardLayout user={auth.user}>
      <Head title="Wagooo" />
      <h1 class="font-bold text-blue-600">Wahuuuu</h1>
    </DashboardLayout>
  )
}

export default Login