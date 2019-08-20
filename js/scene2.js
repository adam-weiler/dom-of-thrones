function scene2() {
  console.log('Scene 2:');
  console.log('And, Action!');

  // Setup Stage
  const stage = document.querySelector('#stage');
  const stageImg = stage.querySelector('#stage-img');
  const castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1 - Ned Stark
  const nedContainer = document.createElement('div');
  stage.append(nedContainer);
  nedContainer.style.top = '55%';
  nedContainer.style.left = '25%';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '37%';
  nedContainer.style.position = 'absolute';

  const ned = document.querySelector('#ned');
  nedContainer.append(ned);
  ned.style.top = 0;
  ned.style.width = '70%';
  ned.style.position = 'absolute';

  const leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);
  leather.style.bottom = 0;
  leather.style.position = 'absolute';

  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(() => {

  });

  // Stage direction 2

  frame(() => {

  });

}
