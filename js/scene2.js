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

  // Ned's head
  const ned = document.querySelector('#ned');
  nedContainer.append(ned);
  ned.style.top = 0;
  ned.style.width = '70%';
  ned.style.position = 'absolute';

  // Ned's leather armour
  const leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);
  leather.style.bottom = 0;
  leather.style.position = 'absolute';

  // Character 2 - Joffrey Lannister
  const joffContainer = document.createElement('div');
  joffContainer.id = 'joff-container';
  stage.append(joffContainer);
  joffContainer.style.top = '55%';
  joffContainer.style.left = '55%';
  joffContainer.style.width = '8%';
  joffContainer.style.height = '31%';
  joffContainer.style.position = 'absolute';

  // Joffrey's head
  const joff = document.querySelector('#joffrey');
  joffContainer.append(joff);
  // joff.style.top = 0;
  joff.style.left = '33%';
  joff.style.width = '75%';
  joff.style.position = 'absolute';

  // Joffrey's's king clothes
  const kingWardrobe = document.querySelector('#king');
  joffContainer.append(kingWardrobe);
  kingWardrobe.style.bottom = 0;
  kingWardrobe.style.position = 'absolute';

  // Setup Props

  // Prop 1 - Sword
  const sword = document.querySelector('#sword');
  stage.append(sword);
  sword.style.top = '77%';
  sword.style.left = '31%';
  sword.style.height = '5%';
  sword.style.position = 'absolute';
  sword.style.transform = 'rotateY(150deg)';

    // Action!

  // Stage directions

  frame(() => { //Frame 1; Sword being held by Ned.
    sword.style.top = '77%';
    sword.style.left = '31%';
  });

  frame(() => { //Frame 2; Sword thrown at Joffrey.
    sword.style.top = '74%';
    sword.style.left = '36%';
  });
  
  frame(() => { //Frame 3; Sword thrown at Joffrey.
    sword.style.top = '71%';
    sword.style.left = '41%';
  });

  frame(() => { //Frame 4; Sword thrown at Joffrey.
    sword.style.top = '68%';
    sword.style.left = '47%';
  });

  frame(() => { //Frame 5; Sword hitting Joffrey.
    sword.style.top = '64%';
    sword.style.left = '53%';
  });

  frame(() => { //Frame 6; Joffrey's head falls off.
    joff.style.top = 0;
    joff.style.left = '33%';
    joff.style.transform = 'rotateZ(220deg)';
  });

  frame(() => { //Frame 7; Joffrey's head falling.
    joff.style.top = '17%';
    joff.style.left = '90%';
    joff.style.transform = 'rotateZ(220deg)';
  });

  frame(() => { //Frame 8; Joffrey's head falling.
    joff.style.top = '35%';
    joff.style.left = '160%';
    joff.style.transform = 'rotateZ(260deg)';
  });

  frame(() => { //Frame 9; Joffrey's head falling.
    joff.style.top = '55%';
    joff.style.left = '230%';
    joff.style.transform = 'rotateZ(180deg)';
  });

  frame(() => { //Frame 10; Joffrey's head lands in the river.
    joff.style.top = '75%';
    joff.style.left = '300%';
    joff.style.transform = 'rotateZ(100deg)';
  });
}
