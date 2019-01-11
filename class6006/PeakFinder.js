/**
 * Class to find a peak in an array. This array can be 1-dimensional or 2-dimensional.
 * If there is no peak, first element will be shown.
 * https://stackoverflow.com/questions/59671733/peak-finding-algorithm-mit-ocw-6-006-does-it-always-exist
 */
class PeakFinder {
  constructor() {
    let size = 12;
    //creating a 2-D array to find A peak
    this.structure = Array.from({length: size}, () => Array.from({length: size}, () => Math.floor(Math.random() * 100)));
    // this.structure = Array.from({length: size}, () => Array.from({length: size}, (value, index) => index));
  }
  oneDimensionStraightFoward(structure){
    let position = 0;
    for(let i = 1; i < structure.length-1; i++){
      if(structure[i] >= structure[i-1] && structure[i] >= structure[i+1]) {
        // console.log("oneDimensionStraightFoward: " + i + " " + structure[i]);
        position = i;
      }
    }
    if(position == 0 && structure[structure.length-1] >= structure[structure.length-2]){
      position = structure.length - 1;
    }
    return {
      position: position,
      value: structure[position]
    };
  }
  oneDimensionBetterVersion(structure){
    let position = this.oneDimensionBetterVersionRecursive(structure, Math.ceil(structure.length/2), structure.length);
    return {
      position: position,
      value: structure[position]
    };
  }
  /**
   * structure is the array that will have its peak found
   * position is the position being tested if it is a peak
   * size is a relative array that is sliced at half each time this method is invoked
   */
  oneDimensionBetterVersionRecursive(structure, position, size){
    console.log(position + " " + size);
    if(position >= structure.length){
      if(structure[structure.length-1] > structure[structure.length-2]){
        console.log('found position ' + (structure.length-1) + ' - value ' + structure[structure.length-1]);
        return (structure.length-1);
      } else {
        console.log('not found');
        return 0;
      }
    }
    if(structure[position] < structure[position-1]){
      console.log('left  position ' + position + ' - value ' + structure[position]);
      return this.oneDimensionBetterVersionRecursive(structure, position - Math.ceil(size/4), Math.ceil(size/2));
    } else if(structure[position] < structure[position+1]){
      console.log('right position ' + position + ' - value ' + structure[position]);
      return this.oneDimensionBetterVersionRecursive(structure, position + Math.ceil(size/4), Math.ceil(size/2));
    } else {
      console.log('found position ' + position + ' - value ' + structure[position]);
      return position;
    }
  }
  twoDimensionsFirstAttempt(structure){
    let find1DPeakRow = this.oneDimensionBetterVersion(structure.map((value,index) => { structure[index][Math.ceil(structure.length/2)]})); 
    let find1DPeakColumn = this.oneDimensionBetterVersion(structure[find1DPeak]);
    return {
      position: find1DPeakRow + "",
      value: structure[find1DPeakRow][find1DPeakColumn]
    };
  }
  twoDimensionsSecondAttempt(structure){
    let position = 0;
    return {
      position: position,
      value: structure[position]
    };
  }
  twoDimensionsSecondAttemptWithOneDimensionBetterVersion(structure){
    let position = 0;
    return {
      position: position,
      value: structure[position]
    };
  }
  showResults(){
    const structure = this.structure;
    return JSON.stringify({
      oneDimensionStraightFoward: {
        structure: structure[0], 
        result: this.oneDimensionStraightFoward(structure[0])
      },
      oneDimensionBetterVersion: {
        structure: structure[0], 
        result: this.oneDimensionBetterVersion(structure[0])
      },
      twoDimensionsFirstAttempt: {
        structure: structure, 
        result: this.twoDimensionsFirstAttempt(structure)
      },
      // twoDimensionsSecondAttempt: {
      //   structure: structure, 
      //   result: this.twoDimensionsSecondAttempt(structure)
      // },
      // twoDimensionsSecondAttemptWithOneDimensionBetterVersion: {
      //   structure: structure, 
      //   result: this.twoDimensionsSecondAttemptWithOneDimensionBetterVersion(structure)
      // },
    });
  }
}

module.exports = new PeakFinder;