import React from 'react';
import { IPlaceCardProps, OBJECT_CLASS_TYPES, PlaceClassTypes } from '../types';
import { Link } from 'react-router-dom';
import { Rating } from './Rating.tsx';

export const PlaceCard: React.FC<IPlaceCardProps> = ({
  place,
  placeCardType,
  onMouseOver,
  onMouseLeave
}) => (
  <article
    className={`${placeCardType}__card place-card`}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
  >
    {place.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className={`${placeCardType}__image-wrapper place-card__image-wrapper`}>
      <a href="#">
        <img
          className="place-card__image"
          src={place.previewImage}
          width={placeCardType !== PlaceClassTypes.Favorites ? '260' : '150'}
          height={placeCardType !== PlaceClassTypes.Favorites ? '200' : '110'}
          alt='Alt'
        />
      </a>
    </div>
    <div className={`${placeCardType === PlaceClassTypes.Favorites ? 'favorites__card-info' : null} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{place.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button ${place.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <Rating rating={place.rating} objectType={OBJECT_CLASS_TYPES.Place} />
      <h2 className="place-card__name">
        <Link to={`/offer/${place.id}`}>{place.title}</Link>
      </h2>
      <p className="place-card__type">{place.type}</p>
    </div>
  </article>
);
