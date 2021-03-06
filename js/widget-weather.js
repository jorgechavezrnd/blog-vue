const API_KEY = 'eaea8aac5d46264a2f08d96f22c21fb9';
const service = new WeatherApiService(API_KEY);

const DEFAULT_QUERY = 'Barcelona';

new Vue({
  el: "#widget",

  data: {
    query: DEFAULT_QUERY,
    temp: 0,
    temp_max: 0,
    temp_min: 0
  },

  created: function() {
    service.findWeather(DEFAULT_QUERY)
      .then(this.setWeatherData);
  },

  methods: {
    findWeather: function() {
      service.findWeather(this.query)
        .then(this.setWeatherData)
    },

    setWeatherData: function({ temp, temp_max, temp_min }) {
      this.temp = temp;
      this.temp_max = temp_max;
      this.temp_min = temp_min;
    }
  }
});
