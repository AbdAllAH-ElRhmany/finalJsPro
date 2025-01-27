import icons from 'url:../../img/icons.svg'; // Parcel 2
import View from './View';
import previewView from './previewView.js';

class bookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errMsg = 'No bookmarks yet, Find a nice recipe and bookmarkit ;)';
  _message = '';

  _generateMarkup() {
    console.log(this._data);

    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler());
  }
}

export default new bookmarksView();
