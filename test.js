window.onload = function () {
    barUpdate(100, 490, 400, 520)
}

function onSelectChange (x) {
  if (x == 'comida') {
    var newOptions = {'Frutas': 'frutas',
      'Cereales': 'cereales'
    }
    barUpdate(200, 250, 380, 430)
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
    barUpdate(100, 490, 400, 520)
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
    barUpdate(230, 240, 380, 535)
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
    barUpdate(100, 490, 400, 520)
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
    barUpdate(200, 250, 380, 430)
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
    barUpdate(260, 345, 475, 580)
    var $el = $('#marca')
    $el.empty()
    $.each(newOptions, function (key, value) {
      $el.append($('<option></option>')
        .attr('value', value).text(key))
    })
  }
}

function onSelectChangeMarca (x) {
  if (x == 'camisas1') {
    barUpdate(100, 490, 400, 520)
  } else if (x == 'camisas2') {
    barUpdate(120, 495, 410, 530)
  } else if (x == 'pantalon1') {
    barUpdate(230, 240, 380, 535)
  } else if (x == 'pantalon2') {
    barUpdate(235, 230, 390, 545)
  } else if (x == 'frutas1') {
    barUpdate(200, 250, 380, 430)
  } else if (x == 'frutas2') {
    barUpdate(210, 270, 360, 420)
  } else if (x == 'cereales1') {
    barUpdate(260, 345, 475, 580)
  } else if (x == 'cereales2') {
    barUpdate(280, 335, 475, 570)
  }
}

function barUpdate (v1, v2, v3, v4) {
  var chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'light2', // "light1", "light2", "dark1", "dark2"
    title: {
      text: 'Sales By Month for'
    },
    axisY: {
      title: 'Ventas'
    },
    data: [{
      type: 'column',
      showInLegend: true,
      legendMarkerColor: 'rgb(114, 168, 255)',
      legendText: 'Ventas',
      color: 'rgb(114, 168, 255)',
      dataPoints: [
        { y: v1, label: 'January' },
        { y: v2,  label: 'February' },
        { y: v3,  label: 'March' },
        { y: v4,  label: 'April' }
      ]
    }]
  })
  chart.render()
}
