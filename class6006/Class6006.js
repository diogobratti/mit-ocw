const PeakFinder = require('./PeakFinder');

class Class6006 {
  async peakFinder(req, res){
    return res.json(PeakFinder.oneDimensionStraightFoward());

  }
}

module.exports = new Class6006;