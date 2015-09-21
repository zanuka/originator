export class Freestyle {

  constructor(n,t) {
    const nameObj = this._setName(n)
    const typeObj = this._setType(t)
  }

  _setName(n) {
    return {
      name: n
    }
  }

  _setType(t) {
    return {
      type: t
    }
  }

}
