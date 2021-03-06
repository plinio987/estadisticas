/*   *****************************************
            CHARTS INSTAGRAM
  **************************************** */

window.onload = function() {

    var chart20 = new CanvasJS.Chart("engagementIGBij", {
        backgroundColor: "#ebf2ea",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement mensual Instagram",
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
            title: "Engagement mensual",
            labelFontColor: "#222",
            titleFontColor: "222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f4874b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 0.48 },
                { x: new Date(2018, 1), y: 0.45 },
                { x: new Date(2018, 2), y: 0.39 },
                { x: new Date(2018, 3), y: 0.52 },
                { x: new Date(2018, 4), y: 0.41 },
                { x: new Date(2018, 5), y: 0.66 },
                { x: new Date(2018, 6), y: 0.45 },
                { x: new Date(2018, 7), y: 0.28 },
                { x: new Date(2018, 8), y: 0.25 },
                { x: new Date(2018, 9), y: 0.31 },
                { x: new Date(2018, 10), y: 0.28 },
                { x: new Date(2018, 11), y: 0.45 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart20.render();

    var chart21 = new CanvasJS.Chart("nuevosSeguidoreIGBIJ", {
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Nuevos Seguidores",
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
            title: "Alcance mensual",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f4874b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 211 },
                { x: new Date(2018, 1), y: 261 },
                { x: new Date(2018, 2), y: 290 },
                { x: new Date(2018, 3), y: 525 },
                { x: new Date(2018, 4), y: 274 },
                { x: new Date(2018, 5), y: 291 },
                { x: new Date(2018, 6), y: 305 },
                { x: new Date(2018, 7), y: 247 },
                { x: new Date(2018, 8), y: 183 },
                { x: new Date(2018, 9), y: 285 },
                { x: new Date(2018, 10), y: 145 },
                { x: new Date(2018, 11), y: 335 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();



    var chart22 = new CanvasJS.Chart("nuevosMeGustaIGBIJ", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Me gusta Mensuales",
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
            title: "No. Me gusta",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#0294a5",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 2252 },
                { x: new Date(2018, 1), y: 2318 },
                { x: new Date(2018, 2), y: 2080 },
                { x: new Date(2018, 3), y: 3078 },
                { x: new Date(2018, 4), y: 2536 },
                { x: new Date(2018, 5), y: 4293 },
                { x: new Date(2018, 6), y: 3031 },
                { x: new Date(2018, 7), y: 1914 },
                { x: new Date(2018, 8), y: 1760 },
                { x: new Date(2018, 9), y: 2322 },
                { x: new Date(2018, 10), y: 2165 },
                { x: new Date(2018, 11), y: 3520 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart22.render();

    var chart23 = new CanvasJS.Chart("comentariosIGBIJ", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Comentarios en publicaciones",
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
            title: "Alcance mensual",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#0294a5",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 189 },
                { x: new Date(2018, 1), y: 96 },
                { x: new Date(2018, 2), y: 101 },
                { x: new Date(2018, 3), y: 110 },
                { x: new Date(2018, 4), y: 108 },
                { x: new Date(2018, 5), y: 165 },
                { x: new Date(2018, 6), y: 129 },
                { x: new Date(2018, 7), y: 85 },
                { x: new Date(2018, 8), y: 83 },
                { x: new Date(2018, 9), y: 73 },
                { x: new Date(2018, 10), y: 77 },
                { x: new Date(2018, 11), y: 208 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart23.render();

    var chart25 = new CanvasJS.Chart("publicacionesIGBIJ", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Cantidad de publicaciones",
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
            title: "Alcance mensual",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#0294a5",
            name: "views",
            type: "stepLine",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 27 },
                { x: new Date(2018, 1), y: 26 },
                { x: new Date(2018, 2), y: 30 },
                { x: new Date(2018, 3), y: 35 },
                { x: new Date(2018, 4), y: 33 },
                { x: new Date(2018, 5), y: 53 },
                { x: new Date(2018, 6), y: 39 },
                { x: new Date(2018, 7), y: 25 },
                { x: new Date(2018, 8), y: 26 },
                { x: new Date(2018, 9), y: 43 },
                { x: new Date(2018, 10), y: 40 },
                { x: new Date(2018, 11), y: 46 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart25.render();




    /* interacciones */
    var chart26 = new CanvasJS.Chart("interraccionesIGBIJ", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Total interacciones",
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
            title: "No. de interacciones",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#0486db",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 2441 },
                { x: new Date(2018, 1), y: 2414 },
                { x: new Date(2018, 2), y: 2181 },
                { x: new Date(2018, 3), y: 3188 },
                { x: new Date(2018, 4), y: 2644 },
                { x: new Date(2018, 5), y: 4458 },
                { x: new Date(2018, 6), y: 3160 },
                { x: new Date(2018, 7), y: 1999 },
                { x: new Date(2018, 8), y: 1843 },
                { x: new Date(2018, 9), y: 2395 },
                { x: new Date(2018, 10), y: 2242 },
                { x: new Date(2018, 11), y: 3728 }


            ]
        }]
    });
    chart26.render();

    //total de seguidores

    var chart27 = new CanvasJS.Chart("IGTotalSeguidores", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#f3d4a0",
        theme: "light1", //"light1", "light2", "dark1", "dark2", light2
        title: {
            text: "Total de seguidores",
            fontColor: "#000",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Seguidores",
            type: "wavy"

        },
        data: [{
            type: "bar",
            indexLabelFontColor: "#000",
            indexLabelPlacement: "outside",
            labelFontColor: "#000",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 5068 },
                { x: new Date(2018, 1), y: 5329 },
                { x: new Date(2018, 2), y: 5619 },
                { x: new Date(2018, 3), y: 6144 },
                { x: new Date(2018, 4), y: 6418 },
                { x: new Date(2018, 5), y: 6709 },
                { x: new Date(2018, 6), y: 7014 },
                { x: new Date(2018, 7), y: 7261 },
                { x: new Date(2018, 8), y: 7444 },
                { x: new Date(2018, 9), y: 7729 },
                { x: new Date(2018, 10), y: 7874 },
                { x: new Date(2018, 11), y: 8209 }
            ]
        }]
    });

    chart27.render();



    /*PORCENTAJE DE PARTICIPACION ADESS*/


    var chart28 = new CanvasJS.Chart("IGPorcentajeParticipacion", {
        animationEnabled: true,
        backgroundColor: "#4d6d9a",
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "Porcentaje de participación",
            fontColor: "#fff",
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#fff",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Porcentaje",
            titleFontColor: "#4F81BC",
            suffix: "mn",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#86b3d1",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 0.48 },
                { x: new Date(2018, 1), y: 0.45 },
                { x: new Date(2018, 2), y: 0.39 },
                { x: new Date(2018, 3), y: 0.52 },
                { x: new Date(2018, 4), y: 0.41 },
                { x: new Date(2018, 5), y: 0.66 },
                { x: new Date(2018, 6), y: 0.45 },
                { x: new Date(2018, 7), y: 0.28 },
                { x: new Date(2018, 8), y: 0.25 },
                { x: new Date(2018, 9), y: 0.31 },
                { x: new Date(2018, 10), y: 0.28 },
                { x: new Date(2018, 11), y: 0.45 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart28.render();














};