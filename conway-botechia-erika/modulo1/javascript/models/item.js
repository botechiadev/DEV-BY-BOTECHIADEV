class Item {
  constructor(id, categoria, path, status, list1, list2, list3) {
    this_.id = id;
    this_.categoria = categoria;
    this_.path = path;
    this._status = status;
    this._exercicios = list1;
    this._praticas = list2;
    this._fixs = list3
  }

  getId() {
    return this_.id;
  }

  getCategoria() {
    return this._categoria;
  }

  getPath() {
    return this._path;
  }

  getStatus() {
    return this._status;
  }

  setId(value) {
    this.id = value;
  }

  setCategoria(value) {
    this.categoria = value;
  }

  setPath(value) {
    this.path = value;
  }

  setStatus(value) {
    this.status = value;
  }

  toInfoModel(){
    return{
        id : this.getId(),
        categoria: this.getCategoria(),
        path: this.getPath(),
        status: this.getStatus()
       }
    }

    toEditModel(value1, value2, value3, value4){
    const data2Edit = {
        id : this.toEditSubItem(value1),
        categoria: this.toEditSubItem(value2),
        path: this.toEditSubItem(value3),
        status: this.toEditSubItem(value4)
     }
     return data2Edit
    }


    toEditSubItem(newValue){
        const data2Edit = (newValue && newValue !== null && newValue==""? (this.setId(newValue)): (this.getId()))
        return data2Edit
    }
}