const data = require("../city.json");

export function getCityName(params) {
  console.log(data);
  return dispatch => {
    dispatch({
      type: "STORE_CITY_DATA",
      data: data
    });
  };
}

// var getWeatherData = async () => {
//     var res = await fetch();
//     var data = await res.json();
//     return data;
//   };

//   getWeatherData()
//     .then(data => {
//       console.log(data);
//       this.setState({ loading: false, cities: data });
//     })
//     .catch(err => {
//       console.log(err);
//     });
