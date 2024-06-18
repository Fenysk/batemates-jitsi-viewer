function Toolbar(handleMute: () => void, handleVideo: () => void, handleHangup: () => void) {
    return <div className="fixed bottom-4 left-4 flex flex-col space-y-2">
      <button onClick={handleMute} className="px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-700">Mute</button>
      <button onClick={handleVideo} className="px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-700">Couper Caméra</button>
      <button onClick={handleHangup} className="px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-700">Raccrocher</button>
    </div>;
  }
  
  export default Toolbar;