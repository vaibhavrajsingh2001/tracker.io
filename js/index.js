const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
getData();

async function getData() {
    const response = await fetch("https://api.covid19india.org/data.json", requestOptions);
    const result = await response.text();
    const data = JSON.parse(result);
    const state_data = data.statewise;
    const state_name = state_data.map(el => [`${el.state}`, Number(el.confirmed)]);
    state_name.shift();
    console.log(state_data);

    anychart.theme(anychart.themes.darkTurquoise);
    let chart = anychart.area();
    let series = chart.area(state_name);
    chart.container("container");
    chart.draw();
};