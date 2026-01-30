
import {
    Ship,
    FileText,
    TrendingUp,
    AlertTriangle,
    Filter,
    ChevronDown,
    Users,
    UserCheck,
    UserX,
    ShoppingCart,
    Package,
    Activity,
    Clock,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <Sidebar />

            <main className="main-content">
                <Header />

                <div className="dashboard-content">

                    {/* 1. Welcome & Header */}
                    <div className="header-section">
                        <div className="welcome-text">
                            <h1>Welcome back, John</h1>
                            <p>Here's what's happening with your IHM operations today.</p>
                        </div>
                    </div>

                    {/* 2. Filters Row */}
                    <div className="filters-row">
                        <button className="filter-btn">
                            <Filter size={14} /> Filters
                        </button>
                        <button className="filter-btn">
                            Yearly <ChevronDown size={14} />
                        </button>
                        <button className="filter-btn">
                            Ship Manager <ChevronDown size={14} />
                        </button>
                        <button className="filter-btn">
                            Ship Owner <ChevronDown size={14} />
                        </button>
                        <button className="filter-btn">
                            Supplier <ChevronDown size={14} />
                        </button>
                        <button className="filter-btn">
                            Vessel <ChevronDown size={14} />
                        </button>
                        <button className="clear-filters">Clear Filters</button>
                    </div>

                    {/* 3. KPI Cards */}
                    <div className="kpi-grid">
                        {/* Card 1: Total Vessels */}
                        <div className="kpi-card blue-gradient">
                            <div className="kpi-top">
                                <span className="kpi-label">Total Vessels</span>
                                <div className="kpi-icon-box">
                                    <Ship size={20} />
                                </div>
                            </div>
                            <div className="kpi-value">24</div>
                        </div>

                        {/* Card 2: Active POs */}
                        <div className="kpi-card white">
                            <div className="kpi-top">
                                <span className="kpi-label">Active POs</span>
                                <div className="kpi-icon-box blue">
                                    <FileText size={20} />
                                </div>
                            </div>
                            <div className="kpi-middle">
                                <div className="kpi-value">156</div>
                                <div className="kpi-trend up">
                                    <TrendingUp size={14} /> 12%
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Compliance Rate */}
                        <div className="kpi-card white">
                            <div className="kpi-top">
                                <span className="kpi-label">Compliance Rate</span>
                                <div className="kpi-icon-box green">
                                    <TrendingUp size={20} />
                                </div>
                            </div>
                            <div className="kpi-middle">
                                <div className="kpi-value">94%</div>
                                <div className="kpi-trend up">
                                    <TrendingUp size={14} /> 3%
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Pending Actions */}
                        <div className="kpi-card white">
                            <div className="kpi-top">
                                <span className="kpi-label">Pending Actions</span>
                                <div className="kpi-icon-box orange">
                                    <AlertTriangle size={20} />
                                </div>
                            </div>
                            <div className="kpi-value">18</div>
                        </div>
                    </div>

                    {/* 4. Content Split (Left Wider, Right Narrower) */}
                    <div className="content-split">

                        {/* LEFT COLUMN */}
                        <div className="left-column">

                            {/* Users Overview */}
                            <div className="section-card">
                                <div className="card-title">
                                    <div className="title-icon blue-bg">
                                        <Users size={18} />
                                    </div>
                                    <h3>Users Overview</h3>
                                </div>
                                <div className="users-grid">
                                    <div className="user-metric">
                                        <div className="user-icon-circle u-green">
                                            <UserCheck size={22} />
                                        </div>
                                        <div className="u-val">124</div>
                                        <div className="u-label">New Registrations</div>
                                    </div>
                                    <div className="user-metric">
                                        <div className="user-icon-circle u-blue">
                                            <Users size={22} />
                                        </div>
                                        <div className="u-val">89</div>
                                        <div className="u-label">IHM Registrations</div>
                                    </div>
                                    <div className="user-metric">
                                        <div className="user-icon-circle u-red">
                                            <UserX size={22} />
                                        </div>
                                        <div className="u-val">12</div>
                                        <div className="u-label">Inactive Users</div>
                                    </div>
                                </div>
                            </div>

                            {/* Purchase Orders */}
                            <div className="section-card">
                                <div className="card-title">
                                    <div className="title-icon blue-bg">
                                        <ShoppingCart size={18} />
                                    </div>
                                    <h3>Purchase Orders</h3>
                                </div>

                                <div className="po-header-row">
                                    <div className="po-total-label">
                                        <Package size={16} /> Total Line Items
                                    </div>
                                    <div className="po-total-val">1,247</div>
                                </div>

                                <div className="po-status-row">
                                    <div className="po-status-card po-pending">
                                        <div className="po-s-label">
                                            <Clock size={12} style={{ display: 'inline', marginRight: 4 }} /> Pending
                                        </div>
                                        <div className="po-s-val">34</div>
                                        <div style={{ fontSize: 11, color: '#C2410C', opacity: 0.8 }}>MDs</div>
                                    </div>
                                    <div className="po-status-card po-received">
                                        <div className="po-s-label">
                                            <UserCheck size={12} style={{ display: 'inline', marginRight: 4 }} /> Received
                                        </div>
                                        <div className="po-s-val">189</div>
                                        <div style={{ fontSize: 11, color: '#047857', opacity: 0.8 }}>MDs</div>
                                    </div>
                                </div>

                                <div className="haz-mat-container">
                                    <div className="haz-title-block">Hazardous Materials</div>
                                    <div className="haz-metrics-row">
                                        <div className="haz-item">
                                            <div className="dot dot-red"></div>
                                            <span>Red <span className="haz-count">23</span></span>
                                        </div>
                                        <div className="haz-division-line"></div>
                                        <div className="haz-item">
                                            <div className="dot dot-green"></div>
                                            <span>Green <span className="haz-count">156</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="section-card">
                                <div className="card-title">
                                    <div className="title-icon blue-bg">
                                        <Activity size={18} />
                                    </div>
                                    <h3>Recent Activity</h3>
                                </div>

                                <div className="activity-list">
                                    <div className="activity-item">
                                        <div className="act-icon green">
                                            <Ship size={18} />
                                        </div>
                                        <div className="act-content">
                                            <h4>Vessel Onboarded</h4>
                                            <p>MV Atlantic Voyager successfully onboarded</p>
                                            <span className="act-time">2 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-item">
                                        <div className="act-icon blue">
                                            <FileText size={18} />
                                        </div>
                                        <div className="act-content">
                                            <h4>PO Updated</h4>
                                            <p>23 new line items added to PO-2024-156</p>
                                            <span className="act-time">4 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-item">
                                        <div className="act-icon green">
                                            <Package size={18} />
                                        </div>
                                        <div className="act-content">
                                            <h4>Materials Received</h4>
                                            <p>45 items marked as received from supplier</p>
                                            <span className="act-time">5 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-item">
                                        <div className="act-icon blue">
                                            <Users size={18} />
                                        </div>
                                        <div className="act-content">
                                            <h4>New User Registration</h4>
                                            <p>Sarah Johnson registered as Ship Manager</p>
                                            <span className="act-time">6 hours ago</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    <a href="#" className="view-all-link">View All Activity &rarr;</a>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="right-column">

                            {/* Vessels Summary */}
                            <div className="section-card">
                                <div className="card-title">
                                    <div className="title-icon blue-bg">
                                        <Ship size={18} />
                                    </div>
                                    <h3>Vessels</h3>
                                </div>

                                <div className="vessels-color-grid">
                                    <div className="v-color-card v-green">
                                        <div className="v-top">
                                            <TrendingUp size={14} /> Onboarded
                                        </div>
                                        <div className="v-count">8</div>
                                        <div className="v-sub">New</div>
                                    </div>
                                    <div className="v-color-card v-red">
                                        <div className="v-top">
                                            <AlertTriangle size={14} /> Expired
                                        </div>
                                        <div className="v-count">3</div>
                                        <div className="v-sub">SOC</div>
                                    </div>
                                    <div className="v-color-card v-blue">
                                        <div className="v-top">
                                            <ArrowUpRight size={14} /> From Deck
                                        </div>
                                        <div className="v-count">145</div>
                                        <div className="v-sub">Items moved</div>
                                    </div>
                                    <div className="v-color-card v-purple">
                                        <div className="v-top">
                                            <ArrowUpRight size={14} /> To Ashore
                                        </div>
                                        <div className="v-count">67</div>
                                        <div className="v-sub">Items moved</div>
                                    </div>
                                </div>
                            </div>

                            {/* SOC Expiry */}
                            <div className="section-card">
                                <div className="card-title">
                                    <div className="title-icon orange-bg">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <h3>SOC Expiry</h3>
                                        <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 400 }}>Statement of Compliance</div>
                                    </div>
                                </div>

                                <div className="soc-list">
                                    <div className="soc-item">
                                        <div className="soc-left">
                                            <div className="soc-icon">
                                                <Ship size={20} />
                                            </div>
                                            <div className="soc-info">
                                                <h4>MV Nordic Star</h4>
                                                <p>IMO: 9123456</p>
                                            </div>
                                        </div>
                                        <div className="soc-right">
                                            <span className="soc-date-label">Expiry Date</span>
                                            <span className="soc-date-val">2024-08-20</span>
                                            <span className="soc-badge badge-red">45 days overdue</span>
                                        </div>
                                    </div>
                                    <div className="soc-item">
                                        <div className="soc-left">
                                            <div className="soc-icon">
                                                <Ship size={20} />
                                            </div>
                                            <div className="soc-info">
                                                <h4>MV Atlantic Voyager</h4>
                                                <p>IMO: 9654321</p>
                                            </div>
                                        </div>
                                        <div className="soc-right">
                                            <span className="soc-date-label">Expiry Date</span>
                                            <span className="soc-date-val">2024-12-01</span>
                                            <span className="soc-badge badge-orange">38 days left</span>
                                        </div>
                                    </div>
                                    <div className="soc-item">
                                        <div className="soc-left">
                                            <div className="soc-icon">
                                                <Ship size={20} />
                                            </div>
                                            <div className="soc-info">
                                                <h4>MV Pacific Horizon</h4>
                                                <p>IMO: 9234567</p>
                                            </div>
                                        </div>
                                        <div className="soc-right">
                                            <span className="soc-date-label">Expiry Date</span>
                                            <span className="soc-date-val">2025-03-10</span>
                                            <span className="soc-badge badge-green">127 days left</span>
                                        </div>
                                    </div>
                                    <div className="soc-item">
                                        <div className="soc-left">
                                            <div className="soc-icon">
                                                <Ship size={20} />
                                            </div>
                                            <div className="soc-info">
                                                <h4>MV Ocean Pioneer</h4>
                                                <p>IMO: 9876543</p>
                                            </div>
                                        </div>
                                        <div className="soc-right">
                                            <span className="soc-date-label">Expiry Date</span>
                                            <span className="soc-date-val">2025-06-15</span>
                                            <span className="soc-badge badge-green">254 days left</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 5. Operational Overview Table */}
                    <div className="section-card ops-table-container">
                        <div className="ops-table-header">
                            <h3>Operational Overview</h3>
                            <p>Track purchase orders and supplier responses across vessels</p>
                        </div>
                        <table className="ops-table">
                            <thead>
                                <tr>
                                    <th style={{ width: 40 }}></th>
                                    <th>IMO Number</th>
                                    <th>Vessel Name</th>
                                    <th>Total POs</th>
                                    <th>Line Items</th>
                                    <th style={{ textAlign: 'center' }}><span className="th-dot orange"></span>Reminder 1</th>
                                    <th style={{ textAlign: 'center' }}><span className="th-dot red"></span>Reminder 2</th>
                                    <th style={{ textAlign: 'center' }}><span className="th-dot dark-red"></span>Non-Responsive</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className="chevron-cell"><ChevronRight size={16} /></div></td>
                                    <td className="row-imo">9876543</td>
                                    <td className="row-name">MV Ocean Pioneer</td>
                                    <td>45</td>
                                    <td>320</td>
                                    <td><div className="reminder-badge rem-1">5</div></td>
                                    <td><div className="reminder-badge rem-2">2</div></td>
                                    <td><div className="reminder-badge non-resp">1</div></td>
                                </tr>
                                <tr>
                                    <td><div className="chevron-cell"><ChevronRight size={16} /></div></td>
                                    <td className="row-imo">9654321</td>
                                    <td className="row-name">MV Atlantic Voyager</td>
                                    <td>38</td>
                                    <td>275</td>
                                    <td><div className="reminder-badge rem-0">0</div></td>
                                    <td><div className="reminder-badge rem-2">3</div></td>
                                    <td><div className="reminder-badge non-resp">2</div></td>
                                </tr>
                                <tr>
                                    <td><div className="chevron-cell"><ChevronRight size={16} /></div></td>
                                    <td className="row-imo">9123456</td>
                                    <td className="row-name">MV Nordic Star</td>
                                    <td>52</td>
                                    <td>410</td>
                                    <td><div className="reminder-badge rem-1">3</div></td>
                                    <td><div className="reminder-badge rem-2">1</div></td>
                                    <td><div className="reminder-badge rem-good">0</div></td>
                                </tr>
                                <tr>
                                    <td><div className="chevron-cell"><ChevronRight size={16} /></div></td>
                                    <td className="row-imo">9234567</td>
                                    <td className="row-name">MV Pacific Horizon</td>
                                    <td>29</td>
                                    <td>185</td>
                                    <td><div className="reminder-badge rem-1">12</div></td>
                                    <td><div className="reminder-badge rem-2">8</div></td>
                                    <td><div className="reminder-badge non-resp">3</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </main>
        </div>
    );
}
