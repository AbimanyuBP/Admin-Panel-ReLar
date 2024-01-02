import Sidebar from '@/Components/sidebar/Sidebar';
import Navbar from '@/Components/navbar/Navbar';
// import './dashboardlayout.scss';

export default function DashboardLayout({user, children }) {

    return (
        <div className="list" class="flex w-full">
            <Sidebar/>
            <div className="listContainer" class="grow-[3]">
                <Navbar user={user}/>
                <main>{children}</main>
            </div>
        </div>
    );
}
