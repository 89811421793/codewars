function yourFutureCareer() {
  let career = Math.random();
  if (career <= 0.32) return "FrontEnd Developer";
  else if (career <= 0.65) return "BackEnd Developer";
  else return "Full-Stack Developer";
}

yourFutureCareer();

/*
const yourFutureCareer = () => {
  let career = Math.random();
  return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
}
*/
