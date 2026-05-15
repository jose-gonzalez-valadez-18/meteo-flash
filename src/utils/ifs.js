import { icons } from "../assets/icons/icons";

class Ifs extends EventTarget {
  constructor() {
    super();
  }

  obtenerImagenClima(weatherCode, time) {
    const hora = new Date(time).getHours();

    const esDia = hora >= 6 && hora < 19;

    // Despejado
    if (weatherCode === 0) {
      return esDia ? "/src/assets/clima/dia/despejado-dia.webp" : "/src/assets/clima/noche/despejado-noche.webp";
    }

    // Parcialmente nublado
    if (weatherCode === 1 || weatherCode === 2) {
      return esDia ? "/src/assets/clima/dia/parcial-nublado-dia.webp" : "/src/assets/clima/noche/parcial-nublado-noche.webp";
    }

    // Nublado
    if (weatherCode === 3 || weatherCode === 45 || weatherCode === 48) {
      return esDia ? "/src/assets/clima/dia/nublado-dia.webp" : "/src/assets/clima/noche/nublado-noche.webp";
    }

    // Llovizna / lluvia / nieve
    if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 71 && weatherCode <= 86)) {
      return esDia ? "/src/assets/clima/dia/lluvioso-dia.webp" : "/src/assets/clima/noche/lluvioso-noche.webp";
    }

    // Tormenta
    if (weatherCode >= 95 && weatherCode <= 99) {
      return esDia ? "/src/assets/clima/dia/tormenta-dia.webp" : "/src/assets/clima/noche/tormenta-noche.webp";
    }

    // Default
    return esDia ? "/src/assets/clima/dia/tormenta-dia.webp" : "/src/assets/clima/noche/despejado-noche.webp";
  }

  obtenerTextoClima(weatherCode) {
    switch (weatherCode) {
      case 0:
        return "Despejado";

      case 1:
        return "Mayormente despejado";

      case 2:
        return "Parcialmente nublado";

      case 3:
        return "Nublado";

      case 45:
        return "Niebla";

      case 48:
        return "Niebla con escarcha";

      case 51:
        return "Llovizna ligera";

      case 53:
        return "Llovizna moderada";

      case 55:
        return "Llovizna intensa";

      case 56:
        return "Llovizna helada ligera";

      case 57:
        return "Llovizna helada intensa";

      case 61:
        return "Lluvia ligera";

      case 63:
        return "Lluvia moderada";

      case 65:
        return "Lluvia intensa";

      case 66:
        return "Lluvia helada ligera";

      case 67:
        return "Lluvia helada intensa";

      case 71:
        return "Nevada ligera";

      case 73:
        return "Nevada moderada";

      case 75:
        return "Nevada intensa";

      case 77:
        return "Granos de nieve";

      case 80:
        return "Chubascos ligeros";

      case 81:
        return "Chubascos moderados";

      case 82:
        return "Chubascos fuertes";

      case 85:
        return "Chubascos de nieve ligeros";

      case 86:
        return "Chubascos de nieve fuertes";

      case 95:
        return "Tormenta";

      case 96:
        return "Tormenta con granizo ligero";

      case 99:
        return "Tormenta con granizo fuerte";

      default:
        return "Clima desconocido";
    }
  }

  obtenerIcono(weatherCode) {
    if (weatherCode === 0) return icons.sun;

    if (weatherCode === 1 || weatherCode === 2) return icons.sunCloud;

    if (weatherCode === 3 || weatherCode === 45 || weatherCode === 48) {
      return icons.cloud;
    }

    if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 71 && weatherCode <= 86)) {
      return icons.cloudRain;
    }

    if (weatherCode >= 95 && weatherCode <= 99) {
      return icons.cloudThunderRain;
    }

    return icons.sun;
  }
}

export const ifs = new Ifs();
