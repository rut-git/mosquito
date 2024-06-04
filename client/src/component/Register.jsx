//בלי התאמה לפייתון
// import React, { useState } from 'react';
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { MultiSelect } from 'primereact/multiselect';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import './RegistrationForm.css'; // ייבוא קובץ ה-CSS המותאם

// const RegistrationForm = () => {
//     const [name, setName] = useState('');
//     const [idNumber, setIdNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [errors, setErrors] = useState({});

//     const navigate = useNavigate();

//     const items = Array.from({ length: 20 }, (_, i) => ({ label: `Item ${i + 1}`, value: i + 1 }));

//     const validate = () => {
//         let errors = {};

//         if (!name) errors.name = "Name is required.";
//         if (!idNumber) errors.idNumber = "ID Number is required.";
//         if (!email) {
//             errors.email = "Email is required.";
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             errors.email = "Email address is invalid.";
//         }

//         return errors;
//     };

//     const handleSubmit = async (e) => {
//         navigate('/thank-you')
//         // e.preventDefault();

//         // const validationErrors = validate();
//         // if (Object.keys(validationErrors).length > 0) {
//         //     setErrors(validationErrors);
//         //     return;
//         // }

//         // const data = {
//         //     name,
//         //     idNumber,
//         //     email,
//         //     selectedItems
//         // };

//         // try {
//         //     const a=await axios.post('http://localhost:5000/register', data);
            
//         //     console.log(a);
//         //     navigate('/thank-you');
//         // } catch (error) {
//         //     console.error('There was an error!', error);
//         // }
//     };

//     return (
//         <div className="form-background">
//             <div className="form-container" style={{width:'25%',height:'100%'}}>
//                 <div className="p-card p-shadow-3 form-card" style={{backgroundColor:''}}>
//                     <div className="p-card-header">
//                         <h2>Registration Form</h2>
//                     </div>
//                     <div className="p-card-body">
//                         <form onSubmit={handleSubmit}>
//                             <div className="p-field">
//                                 <label htmlFor="name">Name</label>
//                                 <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
//                                 {errors.name && <small className="p-error">{errors.name}</small>}
//                             </div>
//                             <div className="p-field">
//                                 <label htmlFor="idNumber">ID Number</label>
//                                 <InputText id="idNumber" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
//                                 {errors.idNumber && <small className="p-error">{errors.idNumber}</small>}
//                             </div>
//                             <div className="p-field">
//                                 <label htmlFor="email">Email</label>
//                                 <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                                 {errors.email && <small className="p-error">{errors.email}</small>}
//                             </div>
//                             <div className="p-field">
//                                 <label htmlFor="items">Select Items</label>
//                                 <MultiSelect id="items" value={selectedItems} options={items} onChange={(e) => setSelectedItems(e.value)} placeholder="Select Items" display="chip" />
//                             </div>
//                             <Button type="submit" label="Submit" style={{marginTop:'30%'}}/>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegistrationForm;
///עם פייתון
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './RegistrationForm.css'; 

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [email, setEmail] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const items = Array.from({ length: 20 }, (_, i) => ({ label: `Item ${i + 1}`, value: i + 1 }));

    const validate = () => {
        let errors = {};

        if (!name) errors.name = "Name is required.";
        if (!idNumber) errors.idNumber = "ID Number is required.";
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid.";
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const data = {
            name,
            idNumber,
            email,
            selectedItems
        };

        try {
            await axios.post('http://localhost:5000/register', data);
            navigate('/thank-you', { state: { selectedItems } });
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="form-background">
            <div className="form-container" style={{ width: '25%', height: '100%' }}>
                <div className="p-card p-shadow-3 form-card">
                    <div className="p-card-header">
                        <h2>Registration Form</h2>
                    </div>
                    <div className="p-card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="p-field">
                                <label htmlFor="name">Name</label>
                                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                {errors.name && <small className="p-error">{errors.name}</small>}
                            </div>
                            <div className="p-field">
                                <label htmlFor="idNumber">ID Number</label>
                                <InputText id="idNumber" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
                                {errors.idNumber && <small className="p-error">{errors.idNumber}</small>}
                            </div>
                            <div className="p-field">
                                <label htmlFor="email">Email</label>
                                <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {errors.email && <small className="p-error">{errors.email}</small>}
                            </div>
                            <div className="p-field">
                                <label htmlFor="items">Select Items</label>
                                <MultiSelect id="items" value={selectedItems} options={items} onChange={(e) => setSelectedItems(e.value)} placeholder="Select Items" display="chip" />
                            </div>
                            <Button type="submit" label="Submit" style={{ marginTop: '30%' }} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;