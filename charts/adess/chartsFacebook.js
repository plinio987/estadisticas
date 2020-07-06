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
                name: "Engagement rate",
                markerBorderColor: "white",
                color: "#F2a104",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1.45 },
                    { x: new Date(2020, 1), y: 1.41 },
                    { x: new Date(2020, 2), y: 7.45 },
                    { x: new Date(2020, 3), y: 2.16 },
                    { x: new Date(2020, 4), y: 1.35 },
                    { x: new Date(2020, 5), y: 3.07 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "Engagement absoluto",
                color: "#0584F2",
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                dataPoints: [
                    { x: new Date(2020, 0), y: 5.41 },
                    { x: new Date(2020, 1), y: 8.00 },
                    { x: new Date(2020, 2), y: 39.52 },
                    { x: new Date(2020, 3), y: 192.23 },
                    { x: new Date(2020, 4), y: 36.78 },
                    { x: new Date(2020, 5), y: 86.91 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
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
                    { x: new Date(2020, 0), y: 10055 },
                    { x: new Date(2020, 1), y: 16203 },
                    { x: new Date(2020, 2), y: 17771 },
                    { x: new Date(2020, 3), y: 1465096 },
                    { x: new Date(2020, 4), y: 452066 },
                    { x: new Date(2020, 5), y: 455089 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "area",
                name: "Alcance Total",
                color: "#F2a104",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 64858 },
                    { x: new Date(2020, 1), y: 99508 },
                    { x: new Date(2020, 2), y: 113945 },
                    { x: new Date(2020, 3), y: 8719712 },
                    { x: new Date(2020, 4), y: 2956330 },
                    { x: new Date(2020, 5), y: 3978323 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
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
                    { x: new Date(2020, 0), y: 32 },
                    { x: new Date(2020, 1), y: 23 },
                    { x: new Date(2020, 2), y: 415 },
                    { x: new Date(2020, 3), y: 7657 },
                    { x: new Date(2020, 4), y: 1056 },
                    { x: new Date(2020, 5), y: 3328 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "Total fans",
                color: "#F2a104",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1736 },
                    { x: new Date(2020, 1), y: 1751 },
                    { x: new Date(2020, 2), y: 2159 },
                    { x: new Date(2020, 3), y: 9799 },
                    { x: new Date(2020, 4), y: 10818 },
                    { x: new Date(2020, 5), y: 14068 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
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
                    { x: new Date(2020, 0), y: 32 },
                    { x: new Date(2020, 1), y: 23 },
                    { x: new Date(2020, 2), y: 415 },
                    { x: new Date(2020, 3), y: 7657 },
                    { x: new Date(2020, 4), y: 1056 },
                    { x: new Date(2020, 5), y: 8060 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "No me gusta",
                color: "#F22F08",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 5 },
                    { x: new Date(2020, 1), y: 5 },
                    { x: new Date(2020, 2), y: 11 },
                    { x: new Date(2020, 3), y: 94 },
                    { x: new Date(2020, 4), y: 48 },
                    { x: new Date(2020, 5), y: 74 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
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
                    { x: new Date(2020, 0), y: 18 },
                    { x: new Date(2020, 1), y: 25 },
                    { x: new Date(2020, 2), y: 107 },
                    { x: new Date(2020, 3), y: 2480 },
                    { x: new Date(2020, 4), y: 505 },
                    { x: new Date(2020, 5), y: 1475 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "Total publicaciones",
                color: "#0584F2",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 19 },
                    { x: new Date(2020, 1), y: 23 },
                    { x: new Date(2020, 2), y: 36 },
                    { x: new Date(2020, 3), y: 58 },
                    { x: new Date(2020, 4), y: 71 },
                    { x: new Date(2020, 5), y: 60 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
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
                { y: 62.00, label: "Femenino" },
                { y: 28.00, label: "Masculino" }
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
                { x: new Date(2020, 0), y: 43 },
                { x: new Date(2020, 1), y: 92 },
                { x: new Date(2020, 2), y: 327 },
                { x: new Date(2020, 3), y: 8700 },
                { x: new Date(2020, 4), y: 2418 },
                { x: new Date(2020, 5), y: 2692 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }
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
                { x: new Date(2020, 0), y: 4.95 },
                { x: new Date(2020, 1), y: 6.09 },
                { x: new Date(2020, 2), y: 23.58 },
                { x: new Date(2020, 3), y: 324.78 },
                { x: new Date(2020, 4), y: 56.04 },
                { x: new Date(2020, 5), y: 203.78 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart8.render();
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
                    { label: "Ene", y: 15 },
                    { label: "Feb", y: 19 },
                    { label: "Mar", y: 25 },
                    { label: "Apr", y: 44 },
                    { label: "May", y: 43 },
                    { label: "Jun", y: 40 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
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
                    { label: "Ene", y: 3 },
                    { label: "Feb", y: 4 },
                    { label: "Mar", y: 10 },
                    { label: "Apr", y: 14 },
                    { label: "May", y: 27 },
                    { label: "Jun", y: 20 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
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
                    { label: "Ene", y: 1 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 1 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
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
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 1 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
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
                    { label: "Ene", y: 438 },
                    { label: "Feb", y: 546 },
                    { label: "Mar", y: 812 },
                    { label: "Apr", y: 13014 },
                    { label: "May", y: 4077 },
                    { label: "Jun", y: 9989 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
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
                    { label: "Ene", y: 73 },
                    { label: "Feb", y: 74 },
                    { label: "Mar", y: 240 },
                    { label: "Apr", y: 2509 },
                    { label: "May", y: 1856 },
                    { label: "Jun", y: 2238 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
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
                    { label: "Ene", y: 21 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 202 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
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
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 10 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            }
        ]
    });
    chart18.render();





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