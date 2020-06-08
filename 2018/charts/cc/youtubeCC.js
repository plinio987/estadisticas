window.onload = function () {

/*   *****************************************
            CHARTS TWITTER
  **************************************** */   

var chart26 = new CanvasJS.Chart("VisualizacionesYTVice", {
    colorset:"#3CB371",
    exportEnabled: true,
    animationEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
    text: "Visualizaciones Canal Youtube Vicepresidencia"
    },

    axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Engagement mensual",
        titleFontColor: "#4F81BC",
        suffix: "mn"
    },
    data: [{
        indexLabelFontColor: "darkSlateGray",
        color: "#0288d1",
		name: "views",
        type: "area",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 1070},
            { x: new Date(2018, 1), y: 2500},
            { x: new Date(2018, 2), y: 3000},
            { x: new Date(2018, 3), y: 5000},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart26.render();


var chart27 = new CanvasJS.Chart("seguidoresYTVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title:{
        text: "Nuevos seguidores"
    },
      axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "cantidad mensual"
    },
    data: [{
        type: "column",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 300},
            { x: new Date(2018, 1), y: 0},
            { x: new Date(2018, 2), y: 0},
            { x: new Date(2018, 3), y: 0},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}
        ]
    }]
});

chart27.render();

var chart28 = new CanvasJS.Chart("VideoCompartidosYTVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
        text: "Videos compartidos"
    },
    axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Alcance mensual",
        titleFontColor: "#4F81BC",
        suffix: "mn"
    },
    data: [{
        indexLabelFontColor: "darkSlateGray",
        color: "rgba(0, 148, 32, 1)",
        name: "views",
        type: "line",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 500},
            { x: new Date(2018, 1), y: 0},
            { x: new Date(2018, 2), y: 0},
            { x: new Date(2018, 3), y: 6},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart28.render();


var chart29 = new CanvasJS.Chart("MegustaYTVice", {
    colorset:"#3CB371",
    exportEnabled: true,
    animationEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
    text: "Me gusta videos"
    },

    axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Engagement mensual",
        titleFontColor: "#4F81BC",
        suffix: "mn"
    },
    data: [{
        indexLabelFontColor: "darkSlateGray",
        color: "#0288d1",
        name: "views",
        type: "area",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 1070},
            { x: new Date(2018, 1), y: 2500},
            { x: new Date(2018, 2), y: 3000},
            { x: new Date(2018, 3), y: 5000},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart29.render();


var chart30 = new CanvasJS.Chart("comentariosYTVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
        text: "Comentarios en videos"
    },
    axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Alcance mensual",
        titleFontColor: "#4F81BC",
        suffix: "mn"
    },
    data: [{
        indexLabelFontColor: "darkSlateGray",
        color: "rgba(0, 148, 32, 1)",
        name: "views",
        type: "line",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 500},
            { x: new Date(2018, 1), y: 0},
            { x: new Date(2018, 2), y: 0},
            { x: new Date(2018, 3), y: 6},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart30.render();

var chart31 = new CanvasJS.Chart("VideosSubidosYTVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
        text: "Videos subidos por mes"
    },
    axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Videos subidos",
        titleFontColor: "#4F81BC",
        suffix: "mn"
    },
    data: [{
        indexLabelFontColor: "darkSlateGray",
        color: "rgba(0, 148, 32, 1)",
        name: "views",
        type: "line",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 500},
            { x: new Date(2018, 1), y: 0},
            { x: new Date(2018, 2), y: 0},
            { x: new Date(2018, 3), y: 6},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart31.render();


var chart32 = new CanvasJS.Chart("noMeGustaYTVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title:{
        text: "No me gusta en videos"
    },
      axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "cantidad mensual"
    },
    data: [{
        type: "bar",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 300},
            { x: new Date(2018, 1), y: 0},
            { x: new Date(2018, 2), y: 0},
            { x: new Date(2018, 3), y: 0},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}
        ]
    }]
});

chart32.render();











};