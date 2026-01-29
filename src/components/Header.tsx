import { Search, Bell, ChevronDown } from 'lucide-react';
import './Header.css';

interface HeaderProps {
    userName?: string;
    userRole?: string;
    selectedVessel?: {
        name: string;
        imo: string;
    };
    notificationCount?: number;
}

export default function Header({
    userName = 'John Administrator',
    userRole = 'Admin',
    selectedVessel = { name: 'MV Ocean Pioneer', imo: 'IMO: 9876543' },
    notificationCount = 1
}: HeaderProps) {
    return (
        <header className="dashboard-header">
            <div className="header-left-content" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div className="search-bar" style={{ maxWidth: '600px', margin: 0 }}>
                    <Search size={24} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search vessels, materials, POs..."
                        className="search-input"
                    />
                </div>
            </div>

            <div className="header-right">
                <button className="notification-btn">
                    <Bell size={20} />
                    {notificationCount > 0 && (
                        <span className="notification-badge">{notificationCount}</span>
                    )}
                </button>

                <div className="user-profile">
                    <div className="user-avatar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <div className="user-info">
                        <div className="user-name">{userName}</div>
                        <div className="user-role">{userRole}</div>
                    </div>
                    <ChevronDown size={16} className="user-chevron" />
                </div>
            </div>
        </header>
    );
}
