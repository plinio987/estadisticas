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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 2.40 },
                    { x: new Date(2020, 3), y: 4.59 },
                    { x: new Date(2020, 4), y: 2.96 },
                    { x: new Date(2020, 5), y: 4.69 },
                    { x: new Date(2020, 6), y: 3.21 },
                    { x: new Date(2020, 7), y: 5.74 },
                    { x: new Date(2020, 8), y: 3.68 },
                    { x: new Date(2020, 9), y: 3.71 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 102.22 },
                    { x: new Date(2020, 3), y: 15.63 },
                    { x: new Date(2020, 4), y: 119.59 },
                    { x: new Date(2020, 5), y: 46.53 },
                    { x: new Date(2020, 6), y: 22.66 },
                    { x: new Date(2020, 7), y: 19.50 },
                    { x: new Date(2020, 8), y: 76.74 },
                    { x: new Date(2020, 9), y: 48.88 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 659 },
                    { x: new Date(2020, 3), y: 64 },
                    { x: new Date(2020, 4), y: 879 },
                    { x: new Date(2020, 5), y: 620 },
                    { x: new Date(2020, 6), y: 102 },
                    { x: new Date(2020, 7), y: 105 },
                    { x: new Date(2020, 8), y: 224 },
                    { x: new Date(2020, 9), y: 182 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 1918 },
                    { x: new Date(2020, 3), y: 218 },
                    { x: new Date(2020, 4), y: 3914 },
                    { x: new Date(2020, 5), y: 1003 },
                    { x: new Date(2020, 6), y: 903 },
                    { x: new Date(2020, 7), y: 540 },
                    { x: new Date(2020, 8), y: 13440 },
                    { x: new Date(2020, 9), y: 8790 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 45 },
                    { x: new Date(2020, 3), y: 9 },
                    { x: new Date(2020, 4), y: 33 },
                    { x: new Date(2020, 5), y: 4 },
                    { x: new Date(2020, 6), y: 27 },
                    { x: new Date(2020, 7), y: 31 },
                    { x: new Date(2020, 8), y: 486 },
                    { x: new Date(2020, 9), y: 22 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 45 },
                    { x: new Date(2020, 3), y: 64 },
                    { x: new Date(2020, 4), y: 97 },
                    { x: new Date(2020, 5), y: 101 },
                    { x: new Date(2020, 6), y: 128 },
                    { x: new Date(2020, 7), y: 159 },
                    { x: new Date(2020, 8), y: 645 },
                    { x: new Date(2020, 9), y: 667 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 27 },
                    { x: new Date(2020, 3), y: 8 },
                    { x: new Date(2020, 4), y: 26 },
                    { x: new Date(2020, 5), y: 43 },
                    { x: new Date(2020, 6), y: 28 },
                    { x: new Date(2020, 7), y: 28 },
                    { x: new Date(2020, 8), y: 433 },
                    { x: new Date(2020, 9), y: 238 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 14 },
                    { x: new Date(2020, 3), y: 1 },
                    { x: new Date(2020, 4), y: 63 },
                    { x: new Date(2020, 5), y: 04 },
                    { x: new Date(2020, 6), y: 01 },
                    { x: new Date(2020, 7), y: 03 },
                    { x: new Date(2020, 8), y: 44 },
                    { x: new Date(2020, 9), y: 77 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 16 },
                    { x: new Date(2020, 3), y: 7 },
                    { x: new Date(2020, 4), y: 26 },
                    { x: new Date(2020, 5), y: 30 },
                    { x: new Date(2020, 6), y: 15 },
                    { x: new Date(2020, 7), y: 9 },
                    { x: new Date(2020, 8), y: 54 },
                    { x: new Date(2020, 9), y: 43 },
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
                { x: new Date(2020, 0), y: 0 },
                { x: new Date(2020, 1), y: 0 },
                { x: new Date(2020, 2), y: 5 },
                { x: new Date(2020, 3), y: 1 },
                { x: new Date(2020, 4), y: 27 },
                { x: new Date(2020, 5), y: 0 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 18 },
                { x: new Date(2020, 9), y: 11 },
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
                { x: new Date(2020, 0), y: 0 },
                { x: new Date(2020, 1), y: 0 },
                { x: new Date(2020, 2), y: 6.98 },
                { x: new Date(2020, 3), y: 15.63 },
                { x: new Date(2020, 4), y: 13.20 },
                { x: new Date(2020, 5), y: 7.58 },
                { x: new Date(2020, 6), y: 28.43 },
                { x: new Date(2020, 7), y: 29.52 },
                { x: new Date(2020, 8), y: 220.98 },
                { x: new Date(2020, 9), y: 179.12 },
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
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
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
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#F28a30",
                name: "Vídeos",
                dataPoints: [
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
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
                    { label: "Mar", y: 0 },
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
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
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
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#F28a30",
                name: "Vídeos",
                dataPoints: [
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 0 },
                    { label: "Mar", y: 0 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
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
                    { label: "Mar", y: 0 },
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
                    { x: new Date(2020, 0), y: 0.00 },
                    { x: new Date(2020, 1), y: 0.00 },
                    { x: new Date(2020, 2), y: 0.60 },
                    { x: new Date(2020, 3), y: 0.13 },
                    { x: new Date(2020, 4), y: 0.27 },
                    { x: new Date(2020, 5), y: 0.43 },
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
                yValueFormatString: "###0.00'%'",
                dataPoints: [
                    { x: new Date(2020, 0), y: 0.00 },
                    { x: new Date(2020, 1), y: 0.00 },
                    { x: new Date(2020, 2), y: 0.11 },
                    { x: new Date(2020, 3), y: 0.02 },
                    { x: new Date(2020, 4), y: 0.28 },
                    { x: new Date(2020, 5), y: 0.00 },
                    { x: new Date(2020, 6), y: 0.00 },
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