window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralVice", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS Vicepresidencia",
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
            title: "No. engagement",
            titleFontColor: "#fff",
            suffix: "M",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "rgba(11, 84, 157, 0.06)",
            color: "#f05837",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 1.51 },
                { x: new Date(2018, 1), y: 1.65 },
                { x: new Date(2018, 2), y: 1.63 },
                { x: new Date(2018, 3), y: 1.59 },
                { x: new Date(2018, 4), y: 1.70 },
                { x: new Date(2018, 5), y: 1.58 },
                { x: new Date(2018, 6), y: 1.21 },
                { x: new Date(2018, 7), y: 1.57 },
                { x: new Date(2018, 8), y: 1.92 },
                { x: new Date(2018, 9), y: 1.10 },
                { x: new Date(2018, 10), y: 0.75 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneralVice", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Total alcance mensual RRSS Vicepresidencia",
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
            title: "No. alcance",
            titleFontColor: "#fff",
            suffix: "mn",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "line",
            color: "#f05837",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 3450649 },
                { x: new Date(2018, 1), y: 1943894 },
                { x: new Date(2018, 2), y: 1541192 },
                { x: new Date(2018, 3), y: 1687742 },
                { x: new Date(2018, 4), y: 1030384 },
                { x: new Date(2018, 5), y: 913538 },
                { x: new Date(2018, 6), y: 1044754 },
                { x: new Date(2018, 7), y: 825959 },
                { x: new Date(2018, 8), y: 1556708 },
                { x: new Date(2018, 9), y: 1703278 },
                { x: new Date(2018, 10), y: 5928011 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


};