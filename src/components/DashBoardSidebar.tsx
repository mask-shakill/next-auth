import Link from 'next/link';
import React from 'react';

const DashBoardSidebar = () => {
    return (
        <div>
            <aside className="bg-gray-800 h-screen text-gray-100 w-64">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav>
          <ul className="p-4 flex flex-col gap-y-7 underline">
          <Link href={'/dashboard'}>Home</Link>
          <Link href={'/dashboard/reports'}>Reports</Link>
          <Link href={'/dashboard/setting'}>Setting</Link>
          </ul>
        </nav>
      </aside>
        </div>
    );
};

export default DashBoardSidebar;