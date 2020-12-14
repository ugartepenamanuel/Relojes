
//....Selecciona la marca Gucci  y la cantidad 50....//


db.relojes.aggregate(
    [  { $match: { marca: "Gucci", cantidad: 50  }  } ],
   
 );





//....Ordena por cantidad y selecciona la marca Lotus y la cantidad 200....//


db.relojes.aggregate(
    [ { $sort: { cantidad: 1 }}, { $match: { marca: "Lotus", cantidad: 200  }  } ],
   
 );
//....Selecciona calidad buena y agruparlo el id por marca y la suma del precio y ordena descendentemente....//

 db.relojes.aggregate([
    { $match: { calidad: "Buena" } },
    { $group: { _id: "$marca", total: { $sum: "$precio" } } },
    { $sort: { total: -1 } }
  ]);

//....Selecciona calidad mala y agruparlo el id por marca y la suma de la cantidad y ordena ascendentemente
  db.relojes.aggregate([
    { $match: { calidad: "Mala" } },
    { $group: { _id: "$marca", total: { $sum: "$cantidad" } } },
    { $sort: { total: 1 } }
  ]);

