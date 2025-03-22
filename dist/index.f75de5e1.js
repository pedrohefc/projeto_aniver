AOS.init();
const dataDoEvento = new Date("Jul 07, 2025 19:00:00");
const timeStempDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStempDoEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMs / horasEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horasEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutosEmMs / 1000);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
