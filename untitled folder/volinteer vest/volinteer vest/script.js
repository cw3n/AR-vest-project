
const Scene = require('Scene');
const Patches = require('Patches');
const Reactive = require('Reactive');
const FaceTracking = require('FaceTracking');
const face0 = FaceTracking.face(0);
const face1 = FaceTracking.face(1);
const face2 = FaceTracking.face(2);

  
Promise.all([
      Scene.root.findFirst('bustA'),
      Scene.root.findFirst('bustB'),
      Scene.root.findFirst('bustC'),
      Scene.root.findFirst('bustA1'),
      Scene.root.findFirst('bustB1'),
      Scene.root.findFirst('bustC1'),
      Scene.root.findFirst('bustA2'),
      Scene.root.findFirst('bustB2'),
      Scene.root.findFirst('bustC2'),      
]).then(onReady);
  
function onReady(assets) {

      const bustA = assets[0];
      const bustB = assets[1];
      const bustC = assets[2];
      const bustA1 = assets[3];
      const bustB1 = assets[4];
      const bustC1 = assets[5];
      const bustA2 = assets[6];
      const bustB2 = assets[7];
      const bustC2 = assets[8];
      
  
      const bustAtra = bustA.transform.toSignal();
      const bustBtra = bustB.transform.toSignal();
      const bustCtra = bustC.transform.toSignal();
      const bustAtra1 = bustA1.transform.toSignal();
      const bustBtra1 = bustB1.transform.toSignal();
      const bustCtra1 = bustC1.transform.toSignal();
      const bustAtra2 = bustA2.transform.toSignal();
      const bustBtra2 = bustB2.transform.toSignal();
      const bustCtra2 = bustC2.transform.toSignal();
      
  
      const faceTra = face0.cameraTransform.applyTo(bustAtra).applyTo(bustBtra).applyTo(bustCtra);
      const faceTra1 = face1.cameraTransform.applyTo(bustAtra1).applyTo(bustBtra1).applyTo(bustCtra1);
      const faceTra2 = face2.cameraTransform.applyTo(bustAtra2).applyTo(bustBtra2).applyTo(bustCtra2);
      
  
      const FaceOffset = Reactive.point(0,0,0.535);

      const neckPos = faceTra.position.add(FaceOffset).expSmooth(70);
      const neckPos1 = faceTra1.position.add(FaceOffset).expSmooth(70);
      const neckPos2 = faceTra2.position.add(FaceOffset).expSmooth(70);
      
  
      Patches.inputs.setVector('neck', neckPos);
      Patches.inputs.setVector('neck1', neckPos1);
      Patches.inputs.setVector('neck2', neckPos2);
      
}