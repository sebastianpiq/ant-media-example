import { WebRTCAdaptor } from '@antmedia/webrtc_adaptor';
import { useEffect } from 'react'

function FormTextExample() { 
const webRTCAdaptor = new WebRTCAdaptor({
    websocket_url: "wss://webrtc.viqings.online:5443/WebRTCAppEE/websocket",
    mediaConstraints: {
        video: true,
        audio: true,
    },
    peerconnection_config: {
        'iceServers': [{'urls': 'stun:stun1.l.google.com:19302'}]
    },
    sdp_constraints: {
        OfferToReceiveAudio : false,
        OfferToReceiveVideo : false,
    },
    localVideoElement: document.getElementById("test"),
    callback: (info, obj) => {
      if (info) {
        console.log(info, 'info')
      }
      if (obj) {
        console.log(obj, 'object')
      }
    },
    callbackError: function(error, message) {
      console.log(error, message)
    },
});

useEffect(() => {
  const connect = async () => {
    try {
      webRTCAdaptor.play('test');
    } catch (e) {
      console.log('Connection failed, handle error', e)
    }
  }
  connect() 
})


  return (
    <>
      <video id="test" autoPlay controls></video>
    </>
  );
}

export default FormTextExample;