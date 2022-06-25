import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
// import auth from '../../authentication/firebase.init';
// import PageLoading from '../../components/PageLoading';
// import useAdmin from '../../hooks/useAdmin';
import { FaList } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

const DashboardSidebar = ({ children }) => {
    // const [user] = useAuthState(auth);
    // const [admin, isAdminLoading] = useAdmin(user);

    // if (isAdminLoading) {
    //     return <PageLoading />
    // }

    return (
        <div className="drawer drawer-mobile ">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="bg-base-300 menu p-4 overflow-y-auto w-56">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink to='/admin-dashboard/admin-and-user'>
                            <FiUsers className='text-lg' />
                            Admins &amp; Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-dashboard/manage-orders'>
                            <FaList className='text-lg' />
                            Manage all orders
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;