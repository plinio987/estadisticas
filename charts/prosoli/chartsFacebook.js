window.onload = function() {

    var chart1 = new CanvasJS.Chart("engagement", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: "",
            fontSize: 20,
            fontFamily: "arial",

        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "column",
                name: "Engagement",
                markerBorderColor: "white",
                color: "#F2a104",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2021, 0), y: 0.65 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "Porcentaje de participación",
                color: "#0584F2",
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                dataPoints: [
                    { x: new Date(2021, 0), y: 0.02 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            }
        ]
    });
    chart1.render();

    /*ALCANCE FACEBOOK VICE*/
    var chart2 = new CanvasJS.Chart("alcancePublicaciones", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: "",
            fontSize: 20,
            fontFamily: "arial",
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "column",
                name: "Engaged users",
                markerBorderColor: "white",
                color: "#0584F2",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2021, 0), y: 2140674 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },

            {
                type: "area",
                name: "Alcance Total",
                color: "#F2a104",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 20093543 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            }
        ]
    });
    chart2.render();


    /*seguidores EN PUBLICACIONES  */

    var chart3 = new CanvasJS.Chart("seguidores", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: "",
            fontSize: 20,
            fontFamily: "arial",
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "column",
                name: "Nuevos fans",
                markerBorderColor: "white",
                color: "#0584F2",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2021, 0), y: 5629 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "Total fans",
                color: "#F2a104",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 64306 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            }
        ]
    });
    chart3.render();

    /*Me gusta y no me gusta EN PUBLICACIONES  */

    var chart4 = new CanvasJS.Chart("meGusta", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: "",
            fontSize: 20,
            fontFamily: "arial",
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "area",
                name: "Me gusta",
                markerBorderColor: "white",
                color: "#F2a104",

                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2021, 0), y: 32239 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "No me gusta",
                color: "#F22F08",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 238 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            }
        ]
    });
    chart4.render();

    /*Publicaciones compartidas y total de publicaciones */

    var chart5 = new CanvasJS.Chart("publicaciones", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "area",
                name: "Publicaciones compartidas",
                markerBorderColor: "white",
                color: "#F2a104",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2021, 0), y: 3435 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "Total publicaciones",
                color: "#0584F2",
                showInLegend: true,
                xValueFormatString: "MMMM YYYY",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 82 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            }
        ]
    });
    chart5.render();

    /*GENERO FANS FACEBOOK */

    var chart6 = new CanvasJS.Chart("generoFans", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: false,
        animationEnabled: true,
        backgroundColor: "#fff",
        title: {
            text: ""
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            fontColor: "#222",
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 78.00, label: "Femenino" },
                { y: 22.00, label: "Masculino" }
            ]
        }]
    });
    chart6.render();


    //MENSAJES
    var chart7 = new CanvasJS.Chart("mensajesPublicaciones", {
        animationEnabled: true,
        exportEnabled: false,
        backgroundColor: "#fff",
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "",
            fontColor: "#000",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
            labelFontColor: "#000",
        },
        axisY: {
            title: "Cantidad mensual",
            labelFontColor: "#000",
            titleFontColor: "#4F81BC",
            gridColor: "#fff"
        },
        data: [{
            type: "splineArea",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            color: "#0584F2",
            dataPoints: [
                { x: new Date(2021, 0), y: 6395 },
                { x: new Date(2021, 1), y: 0 },
                { x: new Date(2021, 2), y: 0 },
                { x: new Date(2021, 3), y: 0 },
                { x: new Date(2021, 4), y: 0 },
                { x: new Date(2021, 5), y: 0 },
                { x: new Date(2021, 6), y: 0 },
                { x: new Date(2021, 7), y: 0 },
                { x: new Date(2021, 8), y: 0 },
                { x: new Date(2021, 9), y: 0 },
                { x: new Date(2021, 10), y: 0 },
                { x: new Date(2021, 11), y: 0 }
            ]
        }]
    });

    chart7.render();


    /*PORCENTAJE PARTICIPACION FACEBOOK*/
    var chart8 = new CanvasJS.Chart("facebookPorcentajeParticipacion", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#fff",
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        exportEnabled: false,
        title: {
            text: "",
            fontColor: "#222",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#222",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Porcentaje",
            titleFontColor: "#4F81BC",
            suffix: "mn",
            labelFontColor: "#222",
            gridColor: "#fff"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#0584F2",
            name: "views",
            type: "splineArea",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2021, 0), y: 0 },
                { x: new Date(2021, 1), y: 0 },
                { x: new Date(2021, 2), y: 0 },
                { x: new Date(2021, 3), y: 0 },
                { x: new Date(2021, 4), y: 0 },
                { x: new Date(2021, 5), y: 0 },
                { x: new Date(2021, 6), y: 0 },
                { x: new Date(2021, 7), y: 0 },
                { x: new Date(2021, 8), y: 0 },
                { x: new Date(2021, 9), y: 0 },
                { x: new Date(2021, 10), y: 0 },
                { x: new Date(2021, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart8.render();


    /*promedios*/
    var chart01 = new CanvasJS.Chart("promedios", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "splineArea",
                name: "Promedio Me Gusta",
                color: "#F1931b",
                showInLegend: true,
                xValueFormatString: "MMMM",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 0.50 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },
            {
                type: "area",
                name: "Promedio mensajes",
                markerBorderColor: "white",
                color: "#D6618F",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 0.10 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },
            {
                type: "column",
                name: "Promedio compartidas",
                color: "#00743f",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 0.05 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            }
        ]
    });
    chart01.render();

    var chart02 = new CanvasJS.Chart("promediosPost", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "splineArea",
                name: "Promedio Post Me Gusta",
                color: "#F1931b",
                showInLegend: true,
                xValueFormatString: "MMMM",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 393.16 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },
            {
                type: "area",
                name: "Promedio Post mensajes",
                markerBorderColor: "white",
                color: "#D6618F",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 77.99 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            },
            {
                type: "column",
                name: "Promedio Post compartidas",
                color: "#00743f",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2021, 0), y: 41.89 },
                    { x: new Date(2021, 1), y: 0 },
                    { x: new Date(2021, 2), y: 0 },
                    { x: new Date(2021, 3), y: 0 },
                    { x: new Date(2021, 4), y: 0 },
                    { x: new Date(2021, 5), y: 0 },
                    { x: new Date(2021, 6), y: 0 },
                    { x: new Date(2021, 7), y: 0 },
                    { x: new Date(2021, 8), y: 0 },
                    { x: new Date(2021, 9), y: 0 },
                    { x: new Date(2021, 10), y: 0 },
                    { x: new Date(2021, 11), y: 0 }
                ]
            }
        ]
    });
    chart02.render();







    var chart17 = new CanvasJS.Chart("tipoPost", {
        //theme:"light2",
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            includeZero: false,
            title: "",
            suffix: "m",
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: "true"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#73c0f4",
                name: "Fotos",
                dataPoints: [
                    { label: "Ene", y: 50 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Sept", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },
            {
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#F28a30",
                name: "Vídeos",
                dataPoints: [
                    { label: "Ene", y: 30 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Sept", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },
            {
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#00743f",
                name: "Notas Dinamicas",
                dataPoints: [
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Sept", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },

            {
                type: "spline",
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#bb1924",
                name: "Links web",
                dataPoints: [
                    { label: "Ene", y: 2 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Sept", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            }
        ]
    });
    chart17.render();

    var chart18 = new CanvasJS.Chart("interaccionesPost", {
        //theme:"light2",
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            includeZero: false,
            title: "",
            suffix: "m",
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: "true"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#73c0f4",
                name: "Fotos",
                dataPoints: [
                    { label: "Ene", y: 29830 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Sept", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },
            {
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#F28a30",
                name: "Vídeos",
                dataPoints: [
                    { label: "Ene", y: 11076 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Sept", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },
            {
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#00743f",
                name: "Notas Dinamicas",
                dataPoints: [
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Sept", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },

            {
                type: "spline",
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#bb1924",
                name: "Links web",
                dataPoints: [
                    { label: "Ene", y: 163 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Sept", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            }
        ]
    });
    chart18.render();

    var chart30 = new CanvasJS.Chart("promedioMeGusta", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "column",
                name: "Promedio me gusta",
                markerBorderColor: "white",
                color: "#0584F2",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 0.07 },
                    { x: new Date(2020, 1), y: 0.10 },
                    { x: new Date(2020, 2), y: 0.14 },
                    { x: new Date(2020, 3), y: 0.36 },
                    { x: new Date(2020, 4), y: 0.23 },
                    { x: new Date(2020, 5), y: 0.23 },
                    { x: new Date(2020, 6), y: 0.22 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "Promedio comentarios ",
                color: "#F28a30",
                showInLegend: true,
                yValueFormatString: "###0.000'%'",
                dataPoints: [
                    { x: new Date(2020, 0), y: 0.005 },
                    { x: new Date(2020, 1), y: 0.01 },
                    { x: new Date(2020, 2), y: 0.04 },
                    { x: new Date(2020, 3), y: 0.18 },
                    { x: new Date(2020, 4), y: 0.05 },
                    { x: new Date(2020, 5), y: 0.05 },
                    { x: new Date(2020, 6), y: 0.02 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart30.render();



    function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

        if (order > suffixes.length - 1)
            order = suffixes.length - 1;

        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }






};