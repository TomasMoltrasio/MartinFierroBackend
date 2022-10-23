const getOrderTime = () => {
  const morningStart = 11;
  const morningEnd = 15;
  const afternoonStart = 19;
  const afternoonEnd = 23;
  const date = new Date();
  const hours = date.getHours();
  const horaActual = `${hours}:${date.getMinutes() + 20}`;
  if (hours >= morningStart && hours < morningEnd) {
    let times = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let hora = `${morningStart + i}:${j * 15 === 0 ? "00" : j * 15}`;
        if (
          hora.split(":")[0] > horaActual.split(":")[0] ||
          (hora.split(":")[0] >= horaActual.split(":")[0] &&
            hora.split(":")[1] >= horaActual.split(":")[1])
        ) {
          times.push(hora);
        }
      }
    }
    return times;
  } else if (hours >= afternoonStart && hours < afternoonEnd) {
    let times = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let hora = `${afternoonStart + i}:${j * 15 === 0 ? "00" : j * 15}`;
        if (
          hora.split(":")[0] > horaActual.split(":")[0] ||
          (hora.split(":")[0] >= horaActual.split(":")[0] &&
            hora.split(":")[1] >= horaActual.split(":")[1])
        ) {
          times.push(hora);
        }
      }
    }
    return times;
  } else return [];
};

module.exports = getOrderTime;
