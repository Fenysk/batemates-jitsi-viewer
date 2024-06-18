import { JitsiMeeting } from '@jitsi/react-sdk';
import { useRef } from 'react';
import Toolbar from './components/toolbar';

function App() {
  const apiRef = useRef<any>(null);

  const handleApiReady = (apiObj: any) => {
    apiRef.current = apiObj;
  };

  const handleMute = () => {
    apiRef.current.executeCommand('toggleAudio');
  };

  const handleVideo = () => {
    apiRef.current.executeCommand('toggleVideo');
  };

  const handleHangup = () => {
    apiRef.current.executeCommand('hangup');
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full h-full">
        <JitsiMeeting
          configOverwrite={{
            prejoinPageEnabled: false,
            toolbarButtons: [],
            notifications: [],
            disableFilmstrip: true,
            disableChat: true,
            enableUserRolesBasedOnToken: true,
            enableForcedReload: true,
          }}
          domain="rooms.batemates.app"
          roomName="id-de-la-room"
          userInfo={{
            displayName: 'Alexis',
            email: 'no@email.null',
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = '100%';
            iframeRef.style.width = '100%';
          }}
          onApiReady={handleApiReady}
        />
        {Toolbar(handleMute, handleVideo, handleHangup)}
      </div>
    </div>
  );
}

export default App;