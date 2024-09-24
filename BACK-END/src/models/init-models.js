var DataTypes = require("sequelize").DataTypes;
var _cups = require("./cups");
var _eps = require("./eps");
var _grupo_lab = require("./grupo_lab");
var _historia = require("./historia");
var _nivel = require("./nivel");
var _orden = require("./orden");
var _orden_resultados = require("./orden_resultados");
var _persona = require("./persona");
var _procedimientos = require("./procedimientos");
var _profesional = require("./profesional");
var _pruebas = require("./pruebas");
var _pruebas_opciones = require("./pruebas_opciones");
var _reg_seg_social = require("./reg_seg_social");
var _tipo_documento = require("./tipo_documento");
var _tipo_identificacion = require("./tipo_identificacion");
var _tipo_profesion = require("./tipo_profesion");
var _tipo_resultado = require("./tipo_resultado");

function initModels(sequelize) {
  var cups = _cups(sequelize, DataTypes);
  var eps = _eps(sequelize, DataTypes);
  var grupo_lab = _grupo_lab(sequelize, DataTypes);
  var historia = _historia(sequelize, DataTypes);
  var nivel = _nivel(sequelize, DataTypes);
  var orden = _orden(sequelize, DataTypes);
  var orden_resultados = _orden_resultados(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var procedimientos = _procedimientos(sequelize, DataTypes);
  var profesional = _profesional(sequelize, DataTypes);
  var pruebas = _pruebas(sequelize, DataTypes);
  var pruebas_opciones = _pruebas_opciones(sequelize, DataTypes);
  var reg_seg_social = _reg_seg_social(sequelize, DataTypes);
  var tipo_documento = _tipo_documento(sequelize, DataTypes);
  var tipo_identificacion = _tipo_identificacion(sequelize, DataTypes);
  var tipo_profesion = _tipo_profesion(sequelize, DataTypes);
  var tipo_resultado = _tipo_resultado(sequelize, DataTypes);

  procedimientos.belongsTo(cups, { as: "id_cups_cup", foreignKey: "id_cups"});
  cups.hasMany(procedimientos, { as: "procedimientos", foreignKey: "id_cups"});
  procedimientos.belongsTo(grupo_lab, { as: "id_grupo_lab_grupo_lab", foreignKey: "id_grupo_lab"});
  grupo_lab.hasMany(procedimientos, { as: "procedimientos", foreignKey: "id_grupo_lab"});
  orden.belongsTo(historia, { as: "id_historia_historium", foreignKey: "id_historia"});
  historia.hasMany(orden, { as: "ordens", foreignKey: "id_historia"});
  historia.belongsTo(nivel, { as: "id_nivel_nivel", foreignKey: "id_nivel"});
  nivel.hasMany(historia, { as: "historia", foreignKey: "id_nivel"});
  orden_resultados.belongsTo(orden, { as: "id_orden_orden", foreignKey: "id_orden"});
  orden.hasMany(orden_resultados, { as: "orden_resultados", foreignKey: "id_orden"});
  historia.belongsTo(persona, { as: "id_persona_persona", foreignKey: "id_persona"});
  persona.hasMany(historia, { as: "historia", foreignKey: "id_persona"});
  profesional.belongsTo(persona, { as: "id_persona_persona", foreignKey: "id_persona"});
  persona.hasMany(profesional, { as: "profesionals", foreignKey: "id_persona"});
  orden_resultados.belongsTo(procedimientos, { as: "id_procedimiento_procedimiento", foreignKey: "id_procedimiento"});
  procedimientos.hasMany(orden_resultados, { as: "orden_resultados", foreignKey: "id_procedimiento"});
  pruebas.belongsTo(procedimientos, { as: "id_procedimiento_procedimiento", foreignKey: "id_procedimiento"});
  procedimientos.hasMany(pruebas, { as: "pruebas", foreignKey: "id_procedimiento"});
  orden.belongsTo(profesional, { as: "id_profesional_profesional", foreignKey: "id_profesional"});
  profesional.hasMany(orden, { as: "ordens", foreignKey: "id_profesional"});
  orden_resultados.belongsTo(pruebas, { as: "id_prueba_prueba", foreignKey: "id_prueba"});
  pruebas.hasMany(orden_resultados, { as: "orden_resultados", foreignKey: "id_prueba"});
  pruebas_opciones.belongsTo(pruebas, { as: "id_prueba_prueba", foreignKey: "id_prueba"});
  pruebas.hasMany(pruebas_opciones, { as: "pruebas_opciones", foreignKey: "id_prueba"});
  orden_resultados.belongsTo(pruebas_opciones, { as: "id_prueba_opcion_pruebas_opcione", foreignKey: "id_prueba_opcion"});
  pruebas_opciones.hasMany(orden_resultados, { as: "orden_resultados", foreignKey: "id_prueba_opcion"});
  nivel.belongsTo(reg_seg_social, { as: "id_regimen_reg_seg_social", foreignKey: "id_regimen"});
  reg_seg_social.hasMany(nivel, { as: "nivels", foreignKey: "id_regimen"});
  orden.belongsTo(tipo_documento, { as: "id_documento_tipo_documento", foreignKey: "id_documento"});
  tipo_documento.hasMany(orden, { as: "ordens", foreignKey: "id_documento"});
  persona.belongsTo(tipo_identificacion, { as: "id_tipo_doc_tipo_identificacion", foreignKey: "id_tipo_doc"});
  tipo_identificacion.hasMany(persona, { as: "personas", foreignKey: "id_tipo_doc"});
  profesional.belongsTo(tipo_profesion, { as: "id_tipo_prof_tipo_profesion", foreignKey: "id_tipo_prof"});
  tipo_profesion.hasMany(profesional, { as: "profesionals", foreignKey: "id_tipo_prof"});
  pruebas.belongsTo(tipo_resultado, { as: "id_tipo_resultado_tipo_resultado", foreignKey: "id_tipo_resultado"});
  tipo_resultado.hasMany(pruebas, { as: "pruebas", foreignKey: "id_tipo_resultado"});

  return {
    cups,
    eps,
    grupo_lab,
    historia,
    nivel,
    orden,
    orden_resultados,
    persona,
    procedimientos,
    profesional,
    pruebas,
    pruebas_opciones,
    reg_seg_social,
    tipo_documento,
    tipo_identificacion,
    tipo_profesion,
    tipo_resultado,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
