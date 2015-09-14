module.exports = Snowboard

function Snowboard (type) {
  this.type = type || 'random'
}

Snowboard.prototype.carve = function (carves) {
  return 'The ' + this.type + ' snowboard carves ' + (carves || 'well')
} 