import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>הדפדפן שלך לא תומך בזיהוי קול.</div>;
  }

  return (
    <div>
      <div>Transcript: {transcript}</div>
      <button onClick={SpeechRecognition.startListening}>התחל להאזין</button>
      <button onClick={SpeechRecognition.stopListening}>הפסק להאזין</button>
      <button onClick={resetTranscript}>איפוס</button>
    </div>
  );
};

export default SpeechRecognitionComponent;
