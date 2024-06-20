import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({rate,numOfRev,color}) => {
    return (
        <div className='rating'>
          <span>
            <i
               style={{ color }}
              className={
                rate >= 1
                  ? 'fas fa-star'
                  : rate >= 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color }}
              className={
                rate >= 2
                  ? 'fas fa-star'
                  : rate >= 1.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
          <span>
            <i
               style={{ color }}
              className={
                rate >= 3
                  ? 'fas fa-star'
                  : rate >= 2.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
          <span>
            <i
              style={{ color }}
              className={
                rate >= 4
                  ? 'fas fa-star'
                  : rate >= 3.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
          <span>
            <i
               style={{ color }}
              className={
                rate >= 5
                  ? 'fas fa-star'
                  : rate >= 4.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
          <span>{numOfRev && numOfRev}</span>
        </div>
      )
            }
      Rating.defaultProps = {
        color: '#f8e825',
      }
 

    export default Rating