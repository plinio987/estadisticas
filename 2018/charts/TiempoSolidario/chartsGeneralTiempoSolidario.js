window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralTS", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS Tiepo Solidario",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },


        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
            gridColor: "#edb5bf",
            labelFontColor: "#fff",

        },
        axisY: {
            title: "Engagement mensual",
            titleFontColor: "#4F81BC",
            suffix: "mn",
            gridColor: "#edb5bf",
            labelFontColor: "#fff",
        },
        data: [{
            indexLabelFontColor: "rgba(11, 84, 157, 0.06)",
            color: "#f05837",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [

                { x: new Date(2018, 3), y: 4.73, indexLabel: "Datos desde el 20 de abril", indexLabelFontColor: "white", markerColor: "yellow", markerType: "triangle" },
                { x: new Date(2018, 4), y: 1.05 },
                { x: new Date(2018, 5), y: 3.21 },
                { x: new Date(2018, 6), y: 1.84 },
                { x: new Date(2018, 7), y: 1.84 },
                { x: new Date(2018, 8), y: 2.32 },
                { x: new Date(2018, 9), y: 3.03 },
                { x: new Date(2018, 10), y: 1.74 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneralTS", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Alcance Total RRSS Tiempo Solidario",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"

        },

        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
            labelFontColor: "#fff",


        },
        axisY: {
            title: "No. Alcance",
            titleFontColor: "#4F81BC",
            suffix: "mn",
            labelFontColor: "#fff",
            gridColor: "#0288d1"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "line",
            color: "#f05837",
            labelFontColor: "#fff",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [


                { x: new Date(2018, 4), y: 23524 },
                { x: new Date(2018, 5), y: 19217 },
                { x: new Date(2018, 6), y: 5851 },
                { x: new Date(2018, 7), y: 11111 },
                { x: new Date(2018, 8), y: 19016 },
                { x: new Date(2018, 9), y: 15970 },
                { x: new Date(2018, 10), y: 30599 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


};