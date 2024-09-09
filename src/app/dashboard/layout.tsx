import Aside from '@/components/dashboard/Aside';
import NavbarDashboard from '@/components/dashboard/NavbarDashboard';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout h-[100vh]'>
      <header className='grid-in-header bg-sky-400'><NavbarDashboard/></header>
      <aside className='grid-in-aside absolute sm:relative'><Aside/></aside>
      <main className='grid-in-main'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
