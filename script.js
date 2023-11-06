const shakeButton = document.getElementById('shakeButton');
const userQuestionInput = document.getElementById('userQuestion');
const answerDiv = document.getElementById('answer');

shakeButton.addEventListener('click', function () {
  if (userQuestionInput.value !== '') {
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber) {
      case 0:
        eightBall = 'Com certeza';
        break;
      case 1:
        eightBall = 'É decididamente assim';
        break;
      case 2:
        eightBall = 'Resposta nebulosa, tente novamente';
        break;
      case 3:
        eightBall = 'Não é possível prever agora';
        break;
      case 4:
        eightBall = 'Não conte com isso';
        break;
      case 5:
        eightBall = 'Minhas fontes dizem não';
        break;
      case 6:
        eightBall = 'Perspectiva não muito boa';
        break;
      case 7:
        eightBall = 'Os sinais apontam que sim';
        break;
      default:
        eightBall = 'Não foi possível determinar';
    }
    answerDiv.textContent = eightBall;
  } else {
    answerDiv.textContent = 'Faça uma pergunta primeiro!';
  }
});