function mult(n1,n2){
return n1*n2;
}

mult(3,5);
console.log(mult);

var data = airdnb;
            var ssss;
            for (let i = 0; i < data.length; i++) {
                if (typeof ssss[data[i].room_type] === "undefined") {
                    ssss[data[i].room_type] = 0;
                }
                ssss[data[i].room_type] ++;
            }
            var myValues=[];
            var myLabels=[];

            for (let egenskap in ssss)
            /*for (let i=0; i<ssss.length;i++)*/{
                myValues.push(ssss[egenskap]);
                myLabels.push(egenskap);
            }
                /*console.log("")
            }
            /* document.getElementById("myDiv").innerHTML = airdnb.rum_type;*/
           
            var datan = [{
                values: myValues,
                labels: myLabels,
                type: 'pie',
                
            }];
            console.log("labels");

            var layout = {
                height: 400,
                width: 500
            };

            Plotly.newPlot('myDiv', datan, layout);
        