'use strict'

const Sequelize = require('sequelize')

// Singleton objeto que solo tiene una instancia
// Cada vez que llame a esta funcion solo retorna la misma instancia

let sequelize = null

module.exports = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
