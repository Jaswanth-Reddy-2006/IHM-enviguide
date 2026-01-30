import { useState, useMemo, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
    Search, Plus, Layers, FileText, ShoppingCart,
    BarChart2, FileCheck, Check, Edit2, X,
    FolderOpen, Ship as ShipIcon
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Vessels.css';

interface VesselData {
    name: string;
    shipOwner: string;
    fleet: string;
    subFleet: string;
    vesselClass: string;
    imoNo: string;
    registrationNumber: string;
    deliveryDate: string;
    deadweightTonnage: string;
    portOfRegistry: string;
    socExpiryDate: string;
    type: string;
    shipManager: string;
    registeredOwner: string;
    flagState: string;
    vesselIhmClass: string;
    classIdNo: string;
    nameOfYard: string;
    keelLaidDate: string;
    grossTonnage: string;
    teuUnits: string;
    ihmReference: string;
    signalLetters: string;
    buildersUniqueId: string;
    mdStandard: string;
    socReference: string;
    image: string;
}

const INITIAL_VESSELS: VesselData[] = [
    {
        name: 'MV Ocean Pioneer',
        shipOwner: 'MARITIME SOLUTIONS',
        fleet: 'Blue Fleet',
        subFleet: 'Atlantic',
        vesselClass: 'DNV',
        imoNo: '9876543',
        registrationNumber: 'REG-987',
        deliveryDate: '2020-01-01',
        deadweightTonnage: '50000',
        portOfRegistry: 'Panama',
        socExpiryDate: '2025-06-15',
        type: 'Bulk Carrier',
        shipManager: 'OCEAN MANAGERS',
        registeredOwner: 'PIONEER SHIPPING',
        flagState: 'Panama',
        vesselIhmClass: 'DNV',
        classIdNo: 'CID-111',
        nameOfYard: 'GLOBAL YARD',
        keelLaidDate: '2018-05-12',
        grossTonnage: '35000',
        teuUnits: '0',
        ihmReference: 'IHM-P-2024',
        signalLetters: 'PION',
        buildersUniqueId: 'BUILD-P1',
        mdStandard: 'IMO',
        socReference: 'SOC-998',
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'ACOSTA',
        shipOwner: 'AQUARIUS BULKCARRIER',
        fleet: 'Fleet A',
        subFleet: 'Sub Fleet 1',
        vesselClass: 'Registro Italiano Navale',
        imoNo: '9571648',
        registrationNumber: 'REG-123',
        deliveryDate: '2013-06-01',
        deadweightTonnage: '34236',
        portOfRegistry: 'Panama - 44761PEXT',
        socExpiryDate: '2028-06-29',
        type: 'Bulk Carrier',
        shipManager: 'AQUARIUS BULKCARRIER',
        registeredOwner: 'SCARLET STREET CORP',
        flagState: 'Panama',
        vesselIhmClass: 'Registro Italiano Navale',
        classIdNo: 'CID-998',
        nameOfYard: 'SHANGHAI SHIPYARD',
        keelLaidDate: '2011-12-27',
        grossTonnage: '22414',
        teuUnits: '0',
        ihmReference: 'IHM Report: J-1109202',
        signalLetters: '3FHM7',
        buildersUniqueId: 'BUILD-99',
        mdStandard: 'IMO',
        socReference: 'IHM-00670',
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'AFIF',
        shipOwner: 'GLOBAL SHIPPING',
        fleet: 'Fleet B',
        subFleet: 'Sub Fleet 2',
        vesselClass: 'DNV',
        imoNo: '9308642',
        registrationNumber: 'REG-456',
        deliveryDate: '2015-08-15',
        deadweightTonnage: '45000',
        portOfRegistry: 'Liberia',
        socExpiryDate: '2030-10-10',
        type: 'Container Ship',
        shipManager: 'GLOBAL MANAGERS',
        registeredOwner: 'OCEAN BLUE INC',
        flagState: 'Liberia',
        vesselIhmClass: 'DNV',
        classIdNo: 'CID-777',
        nameOfYard: 'HYUNDAI HEAVY',
        keelLaidDate: '2014-02-05',
        grossTonnage: '30000',
        teuUnits: '5000',
        ihmReference: 'IHM Report: G-9922',
        signalLetters: 'ABCD4',
        buildersUniqueId: 'BUILD-45',
        mdStandard: 'IHM Method',
        socReference: 'IHM-9988',
        image: 'https://images.unsplash.com/photo-1494412574743-01947f15b6b7?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'PACIFIC HORIZON',
        shipOwner: 'PACIFIC TRADING',
        fleet: 'Pacific',
        subFleet: 'North',
        vesselClass: 'ABS',
        imoNo: '9234567',
        registrationNumber: 'REG-567',
        deliveryDate: '2010-05-20',
        deadweightTonnage: '28000',
        portOfRegistry: 'Singapore',
        socExpiryDate: '2025-03-10',
        type: 'Bulk Carrier',
        shipManager: 'PACIFIC SHIP MGMT',
        registeredOwner: 'HORIZON MARITIME',
        flagState: 'Singapore',
        vesselIhmClass: 'ABS',
        classIdNo: 'CID-555',
        nameOfYard: 'SINGAPORE YARD',
        keelLaidDate: '2008-01-15',
        grossTonnage: '18000',
        teuUnits: '0',
        ihmReference: 'IHM-PH-10',
        signalLetters: 'PHOR',
        buildersUniqueId: 'BUILD-P5',
        mdStandard: 'Nil',
        socReference: 'SOC-556',
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
    },
];

const EMPTY_FORM: VesselData = {
    name: '', shipOwner: '', fleet: '', subFleet: '', vesselClass: '',
    imoNo: '', registrationNumber: '', deliveryDate: '', deadweightTonnage: '',
    portOfRegistry: '', socExpiryDate: '', type: '', shipManager: '',
    registeredOwner: '', flagState: '', vesselIhmClass: '', classIdNo: '',
    nameOfYard: '', keelLaidDate: '', grossTonnage: '', teuUnits: '',
    ihmReference: '', signalLetters: '', buildersUniqueId: '',
    mdStandard: '', socReference: '',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
};

export default function Vessels() {
    const { id } = useParams();
    const location = useLocation();
    const [vesselList, setVesselList] = useState<VesselData[]>(INITIAL_VESSELS);
    const [activeVesselName, setActiveVesselName] = useState('MV Ocean Pioneer');
    const [activeTab, setActiveTab] = useState(location.pathname === '/decks' ? 'decks' : 'project');
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState<VesselData>(INITIAL_VESSELS[0]);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isDraggingFile, setIsDraggingFile] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const filteredVessels = useMemo(() => {
        return vesselList.filter(v =>
            v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            v.imoNo.includes(searchTerm)
        );
    }, [vesselList, searchTerm]);

    const handleVesselSelect = (vessel: VesselData) => {
        setActiveVesselName(vessel.name);
        setFormData(vessel);
        setIsAdding(false);
        setIsEditing(false);
    };

    const handleAddClick = () => {
        setIsAdding(true);
        setIsEditing(true);
        setActiveVesselName('');
        setFormData(EMPTY_FORM);
        setActiveTab('project');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
            setModalMessage(`${file.name} uploaded successfully!`);
            setShowModal(true);
        }
    };

    const triggerFileSelect = () => {
        if (!isEditing) return;
        fileInputRef.current?.click();
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        if (isEditing) setIsDraggingFile(true);
    };

    const handleDragLeave = () => {
        setIsDraggingFile(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggingFile(false);
        if (!isEditing) return;

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
            setModalMessage(`${file.name} uploaded successfully!`);
            setShowModal(true);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (isAdding) {
            setVesselList(prev => [...prev, formData]);
            setIsAdding(false);
            setIsEditing(false);
            setActiveVesselName(formData.name);
            setModalMessage('New vessel added successfully!');
        } else {
            setVesselList(prev => prev.map(v => v.name === activeVesselName ? formData : v));
            setIsEditing(false);
            setModalMessage('Vessel data updated successfully!');
        }
        setShowModal(true);
    };

    const tabs = [
        { id: 'project', label: 'PROJECT', icon: FileCheck },
        { id: 'decks', label: 'Decks', icon: Layers },
        { id: 'documents', label: 'Documents', icon: FolderOpen },
        { id: 'materials', label: 'Materials Record', icon: FileText },
        { id: 'purchase', label: 'Purchase Orders', icon: ShoppingCart },
        { id: 'reports', label: 'Reports', icon: BarChart2 },
        { id: 'certificate', label: 'IHM Certificate', icon: FileCheck },
    ];

    const renderContent = () => {
        if (id !== 'ship') {
            return (
                <div className="vessels-placeholder">
                    <div className="placeholder-card">
                        <ShipIcon size={48} color="#94A3B8" />
                        <h3>{id?.replace('-', ' ').toUpperCase()} Management</h3>
                        <p>Detailed module for {id?.replace('-', ' ')} is under maintenance.</p>
                        <button className="add-vessel-btn" style={{ margin: '20px auto 0' }}>
                            Go Back to Ship
                        </button>
                    </div>
                </div>
            );
        }

        if (activeTab === 'decks') {
            return (
                <div className="decks-empty-state">
                    <div className="empty-state-card">
                        <div className="empty-state-icon-wrapper">
                            <div className="icon-circle">
                                <Layers size={48} color="#00B0FA" />
                            </div>
                            <div className="warning-badge">!</div>
                        </div>

                        <h2>No Ship Added Yet</h2>
                        <p className="description">
                            Before you can manage decks and configure deck layouts,<br />
                            you need to add a ship to your fleet first.
                        </p>

                        <div className="instruction-steps">
                            <div className="step-item">
                                <span className="step-number">1</span>
                                <p>Click <strong>"Add New Ship"</strong> to create a ship profile</p>
                            </div>
                            <div className="step-item">
                                <span className="step-number">2</span>
                                <p>After adding the ship, return here to configure decks</p>
                            </div>
                        </div>

                        <div className="empty-state-actions">
                            <button className="btn-primary-blue" onClick={handleAddClick}>
                                <ShipIcon size={20} /> Add New Ship
                            </button>
                        </div>

                        <p className="help-text">Need help? Contact your administrator for assistance.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="form-scroll-area">
                <div className="vessel-form-card premium-shadow">
                    <form onSubmit={handleSave}>
                        <div className="form-grid">
                            <div className="form-col">
                                <FormGroup label="Name" name="name" value={formData.name} onChange={handleInputChange} required readOnly={!isEditing} />
                                <FormGroup label="Ship Owner" name="shipOwner" value={formData.shipOwner} onChange={handleInputChange} required readOnly={!isEditing} />
                                <FormGroup label="Fleet" name="fleet" value={formData.fleet} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Sub Fleet" name="subFleet" value={formData.subFleet} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Vessel Class" name="vesselClass" value={formData.vesselClass} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="IMO No" name="imoNo" value={formData.imoNo} onChange={handleInputChange} required readOnly={!isEditing} />
                                <FormGroup label="Registration Number" name="registrationNumber" value={formData.registrationNumber} onChange={handleInputChange} readOnly={!isEditing} />
                                <DateGroup label="Delivery Date" name="deliveryDate" value={formData.deliveryDate} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Deadweight Tonnage" name="deadweightTonnage" value={formData.deadweightTonnage} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Port of Registry" name="portOfRegistry" value={formData.portOfRegistry} onChange={handleInputChange} readOnly={!isEditing} />
                                <DateGroup label="SOC Expiry Date" name="socExpiryDate" value={formData.socExpiryDate} onChange={handleInputChange} readOnly={!isEditing} />
                            </div>

                            <div className="form-col">
                                <FormGroup label="Type" name="type" value={formData.type} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Ship Manager" name="shipManager" value={formData.shipManager} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Registered Owner" name="registeredOwner" value={formData.registeredOwner} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Flag State" name="flagState" value={formData.flagState} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Vessel IHM Class" name="vesselIhmClass" value={formData.vesselIhmClass} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Class ID No" name="classIdNo" value={formData.classIdNo} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Name Of Yard" name="nameOfYard" value={formData.nameOfYard} onChange={handleInputChange} readOnly={!isEditing} />
                                <DateGroup label="Keel Laid Date" name="keelLaidDate" value={formData.keelLaidDate} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Gross Tonnage" name="grossTonnage" value={formData.grossTonnage} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="TEU No of Units" name="teuUnits" value={formData.teuUnits} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Initial IHM Reference" name="ihmReference" value={formData.ihmReference} onChange={handleInputChange} readOnly={!isEditing} />
                            </div>

                            <div className="form-col">
                                <div className="form-group">
                                    <label>Choose file</label>
                                    <div
                                        className={`file-upload-container ${isDraggingFile ? 'dragging' : ''} ${!isEditing ? 'readonly' : ''}`}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                    >
                                        <div className="file-preview-box">
                                            <img src={formData.image} alt="File Preview" />
                                        </div>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                            disabled={!isEditing}
                                        />
                                        <div
                                            className={`choose-file-btn-alt ${!isEditing ? 'disabled' : ''}`}
                                            onClick={isEditing ? triggerFileSelect : undefined}
                                        >
                                            Choose file
                                        </div>
                                        <p className="file-limit-text">Image should not exceed 10MB</p>
                                    </div>
                                </div>
                                <FormGroup label="Signal Letters" name="signalLetters" value={formData.signalLetters} onChange={handleInputChange} readOnly={!isEditing} />
                                <FormGroup label="Builders unique id of ship" name="buildersUniqueId" value={formData.buildersUniqueId} onChange={handleInputChange} readOnly={!isEditing} />
                                <div className="form-group">
                                    <label>MD Standard</label>
                                    <div className="radio-group-modern">
                                        {['IMO', 'IHM Method', 'Nil'].map(standard => (
                                            <label key={standard} className={`radio-item-modern ${!isEditing ? 'disabled' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="mdStandard"
                                                    checked={formData.mdStandard === standard}
                                                    onChange={isEditing ? () => setFormData(prev => ({ ...prev, mdStandard: standard })) : undefined}
                                                    disabled={!isEditing}
                                                />
                                                <span>{standard}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <FormGroup label="SOC Reference" name="socReference" value={formData.socReference} onChange={handleInputChange} readOnly={!isEditing} />
                            </div>
                        </div>

                        <div className="form-actions-circular">
                            {isAdding ? (
                                <>
                                    <button type="button" className="action-btn-circle cancel-circle" onClick={() => handleVesselSelect(vesselList[0])}>
                                        <X size={24} />
                                    </button>
                                    <button type="submit" className="action-btn-circle submit-circle">
                                        <Check size={24} />
                                    </button>
                                </>
                            ) : (
                                <>
                                    {!isEditing ? (
                                        <button
                                            type="button"
                                            className="action-btn-text edit-btn-premium"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setIsEditing(true);
                                            }}
                                        >
                                            <Edit2 size={16} />
                                            EDIT
                                        </button>
                                    ) : (
                                        <div className="edit-actions-group">
                                            <button
                                                type="button"
                                                className="action-btn-text cancel-btn"
                                                onClick={() => {
                                                    setIsEditing(false);
                                                    const vessel = vesselList.find(v => v.name === activeVesselName) || vesselList[0];
                                                    setFormData(vessel);
                                                }}
                                            >
                                                CANCEL
                                            </button>
                                            <button type="submit" className="action-btn-text save-btn">
                                                SAVE CHANGES
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <div className="dashboard-wrapper vessels-page-container">
            <Sidebar />
            <main className="main-content vessel-page-main">
                <Header />
                <div className="vessels-wrapper">
                    <div className="vessels-main-header">
                        {/* Full-width Tabs Header */}
                        <nav className="content-tabs-inline">
                            <div className="tabs-container-inline">
                                {tabs.map(tab => (
                                    <div
                                        key={tab.id}
                                        className={`tab-item-inline ${activeTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <tab.icon size={18} />
                                        <span>{tab.label}</span>
                                    </div>
                                ))}
                            </div>
                        </nav>
                    </div>

                    <div className="vessels-content-layout">
                        {/* Secondary Sidebar - Hidden on Decks tab */}
                        {activeTab !== 'decks' && (
                            <aside className="secondary-sidebar">
                                <div className="vessel-search-container">
                                    <div className="vessel-search-box">
                                        <Search size={16} color="#94A3B8" />
                                        <input
                                            type="text"
                                            placeholder="Search vessels..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="vessel-list">
                                    {filteredVessels.map((vessel) => (
                                        <div
                                            key={`${vessel.name}-${vessel.imoNo}`}
                                            className={`vessel-item ${activeVesselName === vessel.name ? 'active' : ''}`}
                                            onClick={() => handleVesselSelect(vessel)}
                                        >
                                            <div className="vessel-status-dot v-active"></div>
                                            <div className="vessel-info-block">
                                                <h4>{vessel.name}</h4>
                                                <p>IMO {vessel.imoNo}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="sidebar-footer">
                                    <button className="add-vessel-btn-large" onClick={handleAddClick}>
                                        <Plus size={20} />
                                        Add Vessel
                                    </button>
                                </div>
                            </aside>
                        )}

                        {/* Main Section */}
                        <div className="vessels-main">
                            <div className={`vessel-tab-content ${activeTab === 'decks' ? 'no-scroll' : ''}`}>
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
                {showModal && (
                    <SuccessModal
                        message={modalMessage}
                        onClose={() => setShowModal(false)}
                    />
                )}
            </main>
        </div>
    );
}

// Helper Components
const FormGroup = ({ label, name, value, onChange, required, readOnly }: { label: string, name: string, value: string, onChange: (e: any) => void, required?: boolean, readOnly?: boolean }) => (
    <div className="form-group">
        <label>{label} {required && <span className="required">*</span>}</label>
        <input
            type="text"
            name={name}
            className={`form-control ${readOnly ? 'read-only' : ''}`}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
        />
    </div>
);

const DateGroup = ({ label, name, value, onChange, readOnly }: { label: string, name: string, value: string, onChange: (e: any) => void, readOnly?: boolean }) => (
    <div className="form-group">
        <label>{label}</label>
        <div className="date-input-wrapper">
            <input
                type="date"
                name={name}
                className={`form-control ${readOnly ? 'read-only' : ''}`}
                value={value}
                onChange={onChange}
                onKeyDown={(e) => e.preventDefault()}
                onClick={(e) => !readOnly && (e.target as HTMLInputElement).showPicker?.()}
                style={{ cursor: readOnly ? 'default' : 'pointer' }}
                readOnly={readOnly}
                required
            />
        </div>
    </div>
);

const SuccessModal = ({ message, onClose }: { message: string, onClose: () => void }) => (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content success-card-modal">
            <div className="modal-success-icon">
                <Check size={40} />
            </div>
            <h2 className="modal-title">Success!</h2>
            <p className="modal-message">{message}</p>
            <button className="modal-action-btn" onClick={onClose}>
                DONE
            </button>
        </div>
    </div>
);
