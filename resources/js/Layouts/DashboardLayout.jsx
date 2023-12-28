import Sidebar from '@/Components/sidebar/Sidebar';
import Navbar from '@/Components/navbar/Navbar';
import './dashboardlayout.scss';

export default function DashboardLayout({user, children }) {

    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar user={user}/>
                <main>{children}</main>
            </div>
        </div>
    );
}
