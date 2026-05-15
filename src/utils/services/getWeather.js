class GetWeather extends EventTarget {
  static properties = {
    latitude: { type: Number },
    longitude: { type: Number },
    url: { type: String },
    jsonData: { type: Array },
  };

  constructor() {
    super();

    this.latitude = null;
    this.longitude = null;
    this.url = "";
    this.jsonData = [];
  }

  async getWeather() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        this.latitude = coords.latitude;
        this.longitude = coords.longitude;

        this.getWeatherForecast();
      });
    }
  }

  sendData(data) {
    this.dispatchEvent(
      new CustomEvent("weather-data", {
        detail: data,
      }),
    );
  }

  async getWeatherForecast() {
    if (this.latitude != null && this.longitude != null) {
      this.url = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,uv_index&hourly=temperature_2m,apparent_temperature,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`;

      const res = await fetch(this.url);

      const data = await res.json();

      this.sendData(data);

      return this.jsonData;
    }
  }
}

export const weather = new GetWeather();
