import {AbstractComponent} from './abstract-component.js';
import moment from 'moment';

export class Card extends AbstractComponent {
  constructor({description, dueDate, repeatingDays, tags, color}) {
    super();
    this._description = description;
    this._dueDate = new Date(dueDate);
    this._tags = tags;
    this._color = color;
    this._repeatingDays = repeatingDays;
  }

  getTemplate() {
    return `<article class="card card--${this._color} ${Object.values(this._repeatingDays).some((it) =>
      it) ? `card--repeat` : ``}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${this._description}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${moment(this._dueDate).format(`LL`)}</span>
                    <span class="card__time">11:15 PM</span>
                  </p>
                </div>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  ${Array.from(this._tags).map((tag) => `<span class="card__hashtag-inner">
                    <span class="card__hashtag-name">
                      #${tag}
                    </span>
                  </span>`.trim()).join(``)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`;
  }
}

