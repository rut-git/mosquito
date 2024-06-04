import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './RegistrationForm.css'; 

const Menu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedItems = location.state?.selectedItems || [];

    return (
        <div className="form-background">
            <div className="form-container" style={{width: '25%', height: '98%'}}>
                <div className="p-card p-shadow-3 form-card" style={{ backgroundColor: '' }}>
                    <div className="p-card-header">
                        <h2>Tracking the mosquito</h2>
                    </div>
                    <div className="p-card-body">
                        <p>The following mosquitoes were selected:</p>
                        <ul>
                            {selectedItems.map((item, index) => (
                                <li key={index}>{`Item ${item}`}</li>
                            ))}
                        </ul>
                        <form>
                            <Button label="Find the Mosquito" onClick={() => navigate('/realTimeGraphPage')} style={{marginTop: '110%'}} />
                            <br/><br/>
                            <Button label="Activate Notification" onClick={() => navigate('/buzz')} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
