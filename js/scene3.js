function scene3() {

  // Setup Stage
  const mySrc = desert.getAttribute('src');
  const stageImg = document.querySelector('#stage-img');
  stageImg.setAttribute('src', mySrc);


  // Setup Cast

  // Character 1 - Daenerys Targaryen
  const danyContainer = document.createElement('div');
  stage.append(danyContainer);
  danyContainer.style.top = '58%';
  danyContainer.style.left = '25%';
  danyContainer.style.width = '9%';
  danyContainer.style.height = '34%';
  danyContainer.style.position = 'absolute';

  // Dany's head
  const dany = document.querySelector('#daenerys');
  danyContainer.append(dany);
  dany.style.top = 0;
  dany.style.width = '70%';
  dany.style.position = 'absolute';

  // Dany's blue dress
  const blueDress = document.querySelector('#blue-dress');
  danyContainer.append(blueDress);
  blueDress.style.bottom = 0;
  blueDress.style.position = 'absolute';

  // Character 2 - Khal Drogo
  const drogoContainer = document.createElement('div');
  drogoContainer.id = 'drogo-container';
  stage.append(drogoContainer);
  drogoContainer.style.top = '55%';
  drogoContainer.style.left = '65%';
  drogoContainer.style.width = '10%';
  drogoContainer.style.height = '37%';
  drogoContainer.style.position = 'absolute';

  // Drogo's head
  const drogo = document.querySelector('#drogo');
  drogoContainer.append(drogo);
  drogo.style.top = 0;
  drogo.style.left = '10%';
  drogo.style.width = '75%';
  drogo.style.position = 'absolute';

  // Drogo's's bulky man
  const bulkyMan = document.querySelector('#bulky-man');
  drogoContainer.append(bulkyMan);
  bulkyMan.style.bottom = 0;
  bulkyMan.style.position = 'absolute';

  // Setup Props

  // Prop 1 - Dragon's egg
  const egg = document.querySelector('#egg');
  stage.append(egg);
  egg.style.top = '70%';
  egg.style.left = '30%';
  egg.style.height = '15%';
  egg.style.position = 'absolute';
  egg.style.transform = 'rotateY(150deg)';

  // Prop 2

  // Action!

  // Stage direction 1

  frame(() => {

  })

  // Stage direction 2

  frame(() => {

  })

}
