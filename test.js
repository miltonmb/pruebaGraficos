window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Sales By Month for"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "rgb(114, 168, 255)",
            legendText: "Ventas",
            color: "rgb(114, 168, 255)",
            dataPoints: [      
                { y: 100, label: "January" },
                { y: 490,  label: "February" },
                { y: 400,  label: "March" },
                { y: 520,  label: "April" }
            ]
        }]
    });
    chart.render();
    
    }


function onSelectChange (x) {
  if (x == 'comida') {
    var newOptions = {'Frutas': 'frutas',
      'Cereales': 'cereales'
    }

    var $el = $('#prod')
    $el.empty()
    $.each(newOptions, function (key, value) {
      $el.append($('<option></option>')
        .attr('value', value).text(key))
    })

    var newOptionsMarc = {'Frutas1': 'frutas1',
      'Frutas2': 'frutas2'
    }

    var $elm = $('#marca')
    $elm.empty()
    $.each(newOptionsMarc, function (key, value) {
      $elm.append($('<option></option>')
        .attr('value', value).text(key))
    })
  }else {
    var newOptions = {'Camisa': 'camisa',
      'Pantalon': 'pantalon'
    }

    var $el = $('#prod')
    $el.empty()
    $.each(newOptions, function (key, value) {
      $el.append($('<option></option>')
        .attr('value', value).text(key))
    })

    var newOptionsMarc = {'Camisas1': 'camisas1',
      'Camisas2': 'camisas2'
    }

    var $elm = $('#marca')
    $elm.empty()
    $.each(newOptionsMarc, function (key, value) {
      $elm.append($('<option></option>')
        .attr('value', value).text(key))
    })
  }
}

function onSelectChangeProd (x) {
  if (x == 'pantalon') {
    var newOptions = {'Pantalon1': 'pantalon1',
      'Pantalon2': 'pantalon2'
    }

    var $el = $('#marca')
    $el.empty()
    $.each(newOptions, function (key, value) {
      $el.append($('<option></option>')
        .attr('value', value).text(key))
    })
  }else if (x == 'camisa') {
    var newOptions = {'Camisa1': 'camisa1',
      'Camisa2': 'camisa2'
    }

    var $el = $('#marca')
    $el.empty()
    $.each(newOptions, function (key, value) {
      $el.append($('<option></option>')
        .attr('value', value).text(key))
    })
  }else if (x == 'frutas') {
    var newOptions = {'Frutas1': 'frutas1',
      'Frutas2': 'frutas2'
    }

    var $el = $('#marca')
    $el.empty()
    $.each(newOptions, function (key, value) {
      $el.append($('<option></option>')
        .attr('value', value).text(key))
    })
  }else if (x == 'cereales') {
    var newOptions = {'Cereales1': 'cereales1',
      'Cereales2': 'cereales2'
    }

    var $el = $('#marca')
    $el.empty()
    $.each(newOptions, function (key, value) {
      $el.append($('<option></option>')
        .attr('value', value).text(key))
    })
  }
}

function barUpdate (v1, v2, v3, v4) {
    
}
