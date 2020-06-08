window.onload = function () {

/*ENGAGEMENT FACEBOOK */   

var chart1 = new CanvasJS.Chart("engagementFacebookVice", {
    colorset:"#3CB371",
    exportEnabled: true,
    animationEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
    text: "Engagement mensual"
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
chart1.render();


/*ALCANCE FACEBOOK VICE*/


var chart = new CanvasJS.Chart("facebookAlcanceVice", {
    animationEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    title: {
        text: "Alcance mensual"
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
        color: "#242051",
        name: "views",
        type: "area",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 1070},
            { x: new Date(2018, 1), y: 2030},
            { x: new Date(2018, 2), y: 3040},
            { x: new Date(2018, 3), y: 2016},
            { x: new Date(2018, 4), y: 2060},
            { x: new Date(2018, 5), y: 2050},
            { x: new Date(2018, 6), y: 3050 },
            { x: new Date(2018,7), y: 4050 },
            { x: new Date(2018,8), y: 5062},
            { x: new Date(2018,9), y: 5062},
            { x: new Date(2018,10), y: 5062},
            { x: new Date(2018,11), y: 5062}

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart.render();

/*GENERO FANS FACEBOOK */

var chart2 = new CanvasJS.Chart("generoVice", {

    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    exportFileName: "Doughnut Chart",
    

    title: {
        text: "Género fans"
    },
    data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00'%'",
        indexLabel: "{label} {y}",
        dataPoints: [
            {y: 79.45, label: "Masculino"},
            {y: 7.31, label: "Femenino"}
        
        ]
    }]
});
chart2.render();

/*NUEVOS FANS FACEBOOK */

var chart4 = new CanvasJS.Chart("NuevosFansVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title:{
        text: "Nuevos Fans"
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

chart4.render();


/*Charts compartidos y me gusta publicaciones */

var chart5 = new CanvasJS.Chart("compartidasVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
    text: "Publicaciones compartidas"
    },

    axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "No. compartidas",
        titleFontColor: "#4F81BC",
        suffix: "mn"
    },
    data: [{
        indexLabelFontColor: "darkSlateGray",
        color: "#fb4c16",
		name: "views",
        type: "line",
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
chart5.render();


var chart6 = new CanvasJS.Chart("MeGustaPublicacionesVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title: {
        text: "Me gusta en publicaciones"
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
chart6.render();


/*PUBLICACIONES */


var chart7 = new CanvasJS.Chart("publicacionesVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2"
    title:{
        text: "Cantidad de publicaciones"
    },
      axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "cantidad mensual",
        type: "wavy"

    },
    data: [{
        type: "bar",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 300},
            { x: new Date(2018, 1), y: 500},
            { x: new Date(2018, 2), y: 700},
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

chart7.render();

/*COMENTARIOS */


var chart8 = new CanvasJS.Chart("publicacionesVice", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",  //"light1", "light2", "dark1", "dark2", light2
    title:{
        text: "Cantidad de publicaciones"
    },
      axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
    },
    axisY: {
        title: "cantidad mensual",
        type: "wavy"

    },
    data: [{
        type: "bar",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 300},
            { x: new Date(2018, 1), y: 500},
            { x: new Date(2018, 2), y: 700},
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

chart8.render();

/*NUEVOS FANS FACEBOOK */

var chart9 = new CanvasJS.Chart("mensajesPublicaciones", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title:{
        text: "Mensajes en publicaciones"
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

chart9.render();


//RANGO DE EDAD

var chart10 = new CanvasJS.Chart("rangoEdad", {
    theme: "light1", // "light1", "ligh2", "dark1", "dark2"
    animationEnabled: true,
    title: {
        text: "Rango edad fans"
    },
    axisY: {
        title: "Porcentaje",
        prefix: "%",
        lineThickness: 0,
        
    },
     axisX: {
        title: "Rango",
       
        
    },
    data: [{
        type: "bar",
        indexLabel: "{y}",
        indexLabelFontColor: "#FFF",
        indexLabelPlacement: "inside",
        yValueFormatString: "##0.00'%'",
        dataPoints: [
            { label: "13-17",  y: 2 },
            { label: "18-24", y: 5 },
            { label: "25-34", y: 10 },
            { label: "35-44",  y: 9 },
            { label: "45-54", y: 3 },
            { label: "55-65",  y: 4 },
            { label: "65+",  y: 6 }
            
        ]
    }]
});
chart10.render();



};

