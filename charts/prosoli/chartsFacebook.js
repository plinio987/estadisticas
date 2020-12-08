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
                    { x: new Date(2020, 0), y: 0.27 },
                    { x: new Date(2020, 1), y: 0.41 },
                    { x: new Date(2020, 2), y: 0.62 },
                    { x: new Date(2020, 3), y: 0.33 },
                    { x: new Date(2020, 4), y: 0.32 },
                    { x: new Date(2020, 5), y: 0.59 },
                    { x: new Date(2020, 6), y: 0.36 },
                    { x: new Date(2020, 7), y: 0.68 },
                    { x: new Date(2020, 8), y: 0.29 },
                    { x: new Date(2020, 9), y: 0.35 },
                    { x: new Date(2020, 10), y: 0.23 },
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
                    { x: new Date(2020, 0), y: 9.93 },
                    { x: new Date(2020, 1), y: 12.64 },
                    { x: new Date(2020, 2), y: 33.43 },
                    { x: new Date(2020, 3), y: 85.39 },
                    { x: new Date(2020, 4), y: 32.90 },
                    { x: new Date(2020, 5), y: 35.78 },
                    { x: new Date(2020, 6), y: 30.24 },
                    { x: new Date(2020, 7), y: 50.59 },
                    { x: new Date(2020, 8), y: 96.53 },
                    { x: new Date(2020, 9), y: 100.18 },
                    { x: new Date(2020, 10), y: 56.16 },
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
                    { x: new Date(2020, 0), y: 62373 },
                    { x: new Date(2020, 1), y: 56721 },
                    { x: new Date(2020, 2), y: 116127 },
                    { x: new Date(2020, 3), y: 1159126 },
                    { x: new Date(2020, 4), y: 461050 },
                    { x: new Date(2020, 5), y: 253606 },
                    { x: new Date(2020, 6), y: 318365 },
                    { x: new Date(2020, 7), y: 45853 },
                    { x: new Date(2020, 8), y: 1686579 },
                    { x: new Date(2020, 9), y: 1506198 },
                    { x: new Date(2020, 10), y: 1470130 },
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
                    { x: new Date(2020, 0), y: 631117 },
                    { x: new Date(2020, 1), y: 527214 },
                    { x: new Date(2020, 2), y: 1054118 },
                    { x: new Date(2020, 3), y: 6712417 },
                    { x: new Date(2020, 4), y: 2736566 },
                    { x: new Date(2020, 5), y: 1680292 },
                    { x: new Date(2020, 6), y: 2444944 },
                    { x: new Date(2020, 7), y: 3435938 },
                    { x: new Date(2020, 8), y: 14367516 },
                    { x: new Date(2020, 9), y: 13926960 },
                    { x: new Date(2020, 10), y: 12905478 },
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
                    { x: new Date(2020, 0), y: 163 },
                    { x: new Date(2020, 1), y: 127 },
                    { x: new Date(2020, 2), y: 566 },
                    { x: new Date(2020, 3), y: 5742 },
                    { x: new Date(2020, 4), y: 787 },
                    { x: new Date(2020, 5), y: 1106 },
                    { x: new Date(2020, 6), y: 1304 },
                    { x: new Date(2020, 7), y: 5802 },
                    { x: new Date(2020, 8), y: 8151 },
                    { x: new Date(2020, 9), y: 6844 },
                    { x: new Date(2020, 10), y: 3895 },
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
                    { x: new Date(2020, 0), y: 17168 },
                    { x: new Date(2020, 1), y: 17275 },
                    { x: new Date(2020, 2), y: 19628 },
                    { x: new Date(2020, 3), y: 25947 },
                    { x: new Date(2020, 4), y: 26651 },
                    { x: new Date(2020, 5), y: 27660 },
                    { x: new Date(2020, 6), y: 28880 },
                    { x: new Date(2020, 7), y: 34498 },
                    { x: new Date(2020, 8), y: 42541 },
                    { x: new Date(2020, 9), y: 49150 },
                    { x: new Date(2020, 10), y: 52876 },
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
                    { x: new Date(2020, 0), y: 1250 },
                    { x: new Date(2020, 1), y: 1663 },
                    { x: new Date(2020, 2), y: 2694 },
                    { x: new Date(2020, 3), y: 9250 },
                    { x: new Date(2020, 4), y: 6091 },
                    { x: new Date(2020, 5), y: 6278 },
                    { x: new Date(2020, 6), y: 6485 },
                    { x: new Date(2020, 7), y: 13735 },
                    { x: new Date(2020, 8), y: 27216 },
                    { x: new Date(2020, 9), y: 33729 },
                    { x: new Date(2020, 10), y: 21762 },
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
                    { x: new Date(2020, 0), y: 27 },
                    { x: new Date(2020, 1), y: 23 },
                    { x: new Date(2020, 2), y: 67 },
                    { x: new Date(2020, 3), y: 129 },
                    { x: new Date(2020, 4), y: 69 },
                    { x: new Date(2020, 5), y: 103 },
                    { x: new Date(2020, 6), y: 100 },
                    { x: new Date(2020, 7), y: 161 },
                    { x: new Date(2020, 8), y: 203 },
                    { x: new Date(2020, 9), y: 235 },
                    { x: new Date(2020, 10), y: 198 },
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
                    { x: new Date(2020, 0), y: 168 },
                    { x: new Date(2020, 1), y: 213 },
                    { x: new Date(2020, 2), y: 717 },
                    { x: new Date(2020, 3), y: 1990 },
                    { x: new Date(2020, 4), y: 574 },
                    { x: new Date(2020, 5), y: 1151 },
                    { x: new Date(2020, 6), y: 376 },
                    { x: new Date(2020, 7), y: 1030 },
                    { x: new Date(2020, 8), y: 2037 },
                    { x: new Date(2020, 9), y: 3400 },
                    { x: new Date(2020, 10), y: 1464 },
                    { x: new Date(2020, 11), y: 0 }
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
                    { x: new Date(2020, 0), y: 48 },
                    { x: new Date(2020, 1), y: 66 },
                    { x: new Date(2020, 2), y: 66 },
                    { x: new Date(2020, 3), y: 68 },
                    { x: new Date(2020, 4), y: 99 },
                    { x: new Date(2020, 5), y: 101 },
                    { x: new Date(2020, 6), y: 82 },
                    { x: new Date(2020, 7), y: 82 },
                    { x: new Date(2020, 8), y: 139 },
                    { x: new Date(2020, 9), y: 142 },
                    { x: new Date(2020, 10), y: 103 },
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
                { x: new Date(2020, 0), y: 79 },
                { x: new Date(2020, 1), y: 165 },
                { x: new Date(2020, 2), y: 720 },
                { x: new Date(2020, 3), y: 4586 },
                { x: new Date(2020, 4), y: 1326 },
                { x: new Date(2020, 5), y: 1363 },
                { x: new Date(2020, 6), y: 548 },
                { x: new Date(2020, 7), y: 2689 },
                { x: new Date(2020, 8), y: 3662 },
                { x: new Date(2020, 9), y: 5266 },
                { x: new Date(2020, 10), y: 2587 },
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
                { x: new Date(2020, 0), y: 2.73 },
                { x: new Date(2020, 1), y: 3.85 },
                { x: new Date(2020, 2), y: 5.65 },
                { x: new Date(2020, 3), y: 1.91 },
                { x: new Date(2020, 4), y: 1.90 },
                { x: new Date(2020, 5), y: 3.90 },
                { x: new Date(2020, 6), y: 2.74 },
                { x: new Date(2020, 7), y: 4.94 },
                { x: new Date(2020, 8), y: 2.43 },
                { x: new Date(2020, 9), y: 3.27 },
                { x: new Date(2020, 10), y: 2.02 },
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
                    { label: "Ene", y: 40 },
                    { label: "Feb", y: 55 },
                    { label: "Mar", y: 45 },
                    { label: "Apr", y: 43 },
                    { label: "May", y: 67 },
                    { label: "Jun", y: 68 },
                    { label: "Jul", y: 91 },
                    { label: "Agt", y: 67 },
                    { label: "Sept", y: 119 },
                    { label: "Oct", y: 109 },
                    { label: "Nov", y: 74 },
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
                    { label: "Ene", y: 8 },
                    { label: "Feb", y: 11 },
                    { label: "Mar", y: 20 },
                    { label: "Apr", y: 25 },
                    { label: "May", y: 32 },
                    { label: "Jun", y: 33 },
                    { label: "Jul", y: 25 },
                    { label: "Agt", y: 15 },
                    { label: "Sept", y: 19 },
                    { label: "Oct", y: 33 },
                    { label: "Nov", y: 29 },
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
                    { label: "Sept", y: 1 },
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
                    { label: "Jul", y: 2 },
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
                    { label: "Ene", y: 1418 },
                    { label: "Feb", y: 2049 },
                    { label: "Mar", y: 3977 },
                    { label: "Apr", y: 13767 },
                    { label: "May", y: 5520 },
                    { label: "Jun", y: 5144 },
                    { label: "Jul", y: 6067 },
                    { label: "Agt", y: 16831 },
                    { label: "Sept", y: 30894 },
                    { label: "Oct", y: 37519 },
                    { label: "Nov", y: 19633 },
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
                    { label: "Ene", y: 210 },
                    { label: "Feb", y: 251 },
                    { label: "Mar", y: 824 },
                    { label: "Apr", y: 5410 },
                    { label: "May", y: 3180 },
                    { label: "Jun", y: 3648 },
                    { label: "Jul", y: 1264 },
                    { label: "Agt", y: 623 },
                    { label: "Sept", y: 1968 },
                    { label: "Oct", y: 4876 },
                    { label: "Nov", y: 6180 },
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
                    { label: "Sept", y: 53 },
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
                    { label: "Mar", y: 22 },
                    { label: "Apr", y: 0 },
                    { label: "May", y: 0 },
                    { label: "Jun", y: 0 },
                    { label: "Jul", y: 98 },
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