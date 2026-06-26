
import AppSidebar from '../components/AppSidebar';
import { Outlet } from 'react-router';

export default function DefaultLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 border-r border-border-subtle p-6">
        <AppSidebar />
      </aside>
      <main className="flex-1 p-10">
        <Outlet/>
      </main>
    </div>
  );
}