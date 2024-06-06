//בלי פייתון
// import React, { useEffect, useState } from 'react';
// import { Button } from 'primereact/button';
// import { useNavigate } from 'react-router-dom';


// const BellSoundPlayer = ({ frequencies, duration, onFinish }) => {
//     const playBellSound = () => {
//         const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//         const gainNode = audioContext.createGain();

//         gainNode.connect(audioContext.destination);

//         frequencies.forEach(frequency => {
//             const oscillator = audioContext.createOscillator();

//             oscillator.type = 'sine'; // סוג הצליל (sine מתאים לפעמון)
//             oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

//             oscillator.connect(gainNode);

//             oscillator.start();
//             oscillator.stop(audioContext.currentTime + duration);
//         });

//         gainNode.gain.setValueAtTime(1, audioContext.currentTime);
//         gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

//         // לאחר השמעת הצליל, מתקבל קריאת פונקציה onFinish
//         setTimeout(onFinish, duration * 1000);
//     };

//     useEffect(() => {
//         playBellSound();
//     }, []); // שיחק צליל פעמון בהתחלה בלבד

//     return null;
// };

// const FirstComponent = () => {
//     const [playBell, setPlayBell] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setPlayBell(true);
//         }, 3000); // שלח התרעה כל 3 שניות

//         return () => clearInterval(interval);
//     }, []);

//     const handleBellFinish = () => {
//         setPlayBell(false);
//     };

//     return (
//       <div className="form-background">
//       <div className="form-container" style={{ width: '25%', height: '98%' }}>
//           <div className="p-card p-shadow-3 form-card" style={{ backgroundColor: '', height: '90%' }}>
//               <div className="p-card-header">
//                   <h2>Real-Time Graph Page</h2>
//               </div>
//               <div className="p-card-body">
//                   <form>
//                       <br/>
//                       <div>
//                       The mosquito in the area, be careful!!                      </div>
//                       {playBell && <BellSoundPlayer frequencies={[440, 660, 880]} duration={2} onFinish={handleBellFinish} />}
//                       <Button label="Back to the menu" onClick={() => navigate('/thank-you')} style={{ marginTop: '130%' }} />
//                   </form>
//               </div>
//           </div>
//       </div>
//   </div>
        
//     );
// };

// export default FirstComponent;

//עם פייתון
// import React, { useEffect, useState } from 'react';
// import { Button } from 'primereact/button';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// const BellSoundPlayer = ({ frequencies, duration, onFinish }) => {
//     const playBellSound = () => {
//         const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//         const gainNode = audioContext.createGain();

//         gainNode.connect(audioContext.destination);

//         frequencies.forEach(frequency => {
//             const oscillator = audioContext.createOscillator();

//             oscillator.type = 'sine'; // סוג הצליל (sine מתאים לפעמון)
//             oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

//             oscillator.connect(gainNode);

//             oscillator.start();
//             oscillator.stop(audioContext.currentTime + duration);
//         });

//         gainNode.gain.setValueAtTime(1, audioContext.currentTime);
//         gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

//         // לאחר השמעת הצליל, מתקבל קריאת פונקציה onFinish
//         setTimeout(onFinish, duration * 1000);
//     };

//     useEffect(() => {
//         playBellSound();
//     }, []); // שיחק צליל פעמון בהתחלה בלבד

//     return null;
// };

// const FirstComponent = () => {
//     const [playBell, setPlayBell] = useState(false);
//     const [alertTextVisible, setAlertTextVisible] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (playBell) {
//             const interval = setInterval(() => {
//                 setAlertTextVisible(prev => !prev);
//             }, 500); // הבהוב כל חצי שנייה

//             return () => clearInterval(interval);
//         }
//     }, [playBell]);

//     useEffect(() => {
//         const fetchAlert = async () => {
//             try {
//                 const response = await  axios.get('http://localhost:5000/alert');
//                 console.log(response.data.alert);
//                 const data =response.data.alert
//                 if (data.alert) {
//                     setPlayBell(true);
//                 }
//             } catch (error) {
//                 console.error('Error fetching alert:', error);
//             }
//         };

//         const interval = setInterval(fetchAlert, 3000); // בדוק קריאות מהשרת כל 3 שניות

//         return () => clearInterval(interval);
//     }, []);

//     const handleBellFinish = () => {
//         setPlayBell(false);
//         setAlertTextVisible(false);
//     };

//     return (
//         <div className="form-background">
//             <div className="form-container" style={{ width: '25%', height: '98%' }}>
//                 <div className="p-card p-shadow-3 form-card" style={{ backgroundColor: '', height: '90%' }}>
//                     <div className="p-card-header">
//                         <h2>Real-Time Graph Page</h2>
//                     </div>
//                     <div className="p-card-body">
//                         <form>
//                             <br />
//                             {playBell && (
//                                 <div style={{ visibility: alertTextVisible ? 'visible' : 'hidden' }}>
//                                     The mosquito in the area, be careful!!
//                                 </div>
//                             )}
//                             {playBell && <BellSoundPlayer frequencies={[440, 660, 880]} duration={2} onFinish={handleBellFinish} />}
//                             <Button label="Back to the menu" onClick={() => navigate('/thank-you')} style={{ marginTop: '130%' }} />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FirstComponent;
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BellSoundPlayer = ({ frequencies, duration, onFinish }) => {
    const playBellSound = () => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);

        frequencies.forEach(frequency => {
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine'; // bell-like sound
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.connect(gainNode);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + duration);
        });

        gainNode.gain.setValueAtTime(1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

        // Call onFinish after the sound is played
        setTimeout(onFinish, duration * 1000);
    };

    useEffect(() => {
        playBellSound();
    }, []); // Play bell sound only on component mount

    return null;
};

const FirstComponent = () => {
    const [playBell, setPlayBell] = useState(false);
    const [alertTextVisible, setAlertTextVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (playBell) {
            const interval = setInterval(() => {
                setAlertTextVisible(prev => !prev);
            }, 500); // Toggle visibility every half second

            return () => clearInterval(interval);
        }
    }, [playBell]);

    useEffect(() => {
        const fetchAlert = async () => {
            try {
                const response = await axios.get('http://localhost:5000/alert');
                console.log(response.data.alert);
                
                if (response.data.alert) { // Check if the alert from the server is true
                    setPlayBell(true);
                } else {
                    setPlayBell(false);
                }
            } catch (error) {
                console.error('Error fetching alert:', error);
            }
        };

        const interval = setInterval(fetchAlert, 3000); // Check for alerts every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handleBellFinish = () => {
        setPlayBell(false);
        setAlertTextVisible(false);
    };

    return (
        <div className="form-background">
            <div className="form-container" style={{ width: '25%', height: '98%' }}>
                <div className="p-card p-shadow-3 form-card" style={{ backgroundColor: '', height: '90%' }}>
                    <div className="p-card-header">
                        <h2>Real-Time Graph Page</h2>
                    </div>
                    <div className="p-card-body">
                        <form>
                            <br />
                            {playBell && (
                                <div style={{ visibility: alertTextVisible ? 'visible' : 'hidden' }}>
                                    The mosquito in the area, be careful!!
                                </div>
                            )}
                            {playBell && <BellSoundPlayer frequencies={[440, 660, 880]} duration={2} onFinish={handleBellFinish} />}
                            <Button label="Back to the menu" onClick={() => navigate('/thank-you')} style={{ marginTop: '130%' }} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstComponent;