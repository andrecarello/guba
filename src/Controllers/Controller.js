import store from '../Store';

class Controller {
	constructor() {
		self.store = this.store = store;
		self.state = this.state = store.state;
  }

  _logout(model) {
    this.store.dispatch(_.upperFirst(model) + 'Model/reset')
  }

  _dispatch(model, key, value) {
    this.store.dispatch(_.upperFirst(model) + 'Model/save' + _.upperFirst(key), value);
  }

	dispatch(model, key, value = null) {
		if (typeof key === 'object' && value === null) {
			const obj = key;
      Object.keys(obj).map((k) =>
        this._dispatch(model, k, obj[k])
			);
		} else {
      this._dispatch(model, key, value)
		}
	}
}

export default Controller;
