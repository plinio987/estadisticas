window.onload = function () {

/*   *****************************************
            CHARTS TWITTER
  **************************************** */   

var chart20 = new CanvasJS.Chart("engagementIGVice", {
    colorset:"#3CB371",
    exportEnabled: true,
    animationEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
    text: "Engagement mensual Instagram"
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
chart20.render();

var chart21 = new CanvasJS.Chart("NuevosSeguidoreIGVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
        text: "NUevos Seguidores publicaciones"
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
        color: "#de6668",
        name: "views",
        type: "area",
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
chart21.render();



var chart22 = new CanvasJS.Chart("NuevosMeGustaIGVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
    text: "Me gusta Mensuales"
    },

    axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "No. Me gusta",
        titleFontColor: "#4F81BC",
        suffix: "mn"
    },
    data: [{
        indexLabelFontColor: "darkSlateGray",
        color: "#fb4c16",
        name: "views",
        type: "area",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 1070},
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

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart22.render()

var chart23 = new CanvasJS.Chart("ComentariosIGTwitter", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
        text: "Comentarios en publicaciones"
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
chart23.render();

var chart25 = new CanvasJS.Chart("PublicacionesIGVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
        text: "Cantidad de publicaciones"
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
chart25.render();



















};