import Sidebar from '@/Components/sidebar/Sidebar';
import Navbar from '@/Components/navbar/Navbar';

export default function DashboardLayout({user, children }) {

    return (
        <div class="flex w-full m-0 p-0">
            <Sidebar/>
            <div class="grow-[3]">
                <main>
                    <Navbar user={user}/>
                    {children}
                </main>
            </div>
        </div>
    );
}
