const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

getData();
async function getData() {
    const response = await fetch("https://api.covid19india.org/data.json", requestOptions);
    const result = await response.text();
    const data = JSON.parse(result);
    const total_data = data.cases_time_series;
    const daywise = total_data.map(el => [`${el.date}`, Number(el.totalconfirmed - el.totalrecovered)]);
    console.log(daywise);
    console.log(total_data);

    anychart.theme(anychart.themes.darkTurquoise);
    const chart = anychart.area();
    const series = chart.area(daywise);
    chart.container("container");
    chart.draw();
}