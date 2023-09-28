import React from 'react'

function RightOption() {
  return (
    <div className='right-option'>
        <div className='right-option__container'>
            {/* Give option to load some function, functions are : Notes, Description, Share and much more*/}
            <div className='right-option__container__option'>
                <div className='right-option__container__option__icon'>
                    <i className="fas fa-file-alt"></i>
                </div>
                <div className='right-option__container__option__text'>
                    Notes
                </div>
            </div>
            <div className='right-option__container__option'>
                <div className='right-option__container__option__icon'>
                    <i className="fas fa-info-circle"></i>
                </div>
                <div className='right-option__container__option__text'>
                    Description
                </div>
            </div>
            <div className='right-option__container__option'>
                <div className='right-option__container__option__icon'>
                    <i className="fas fa-share-alt"></i>
                </div>
                <div className='right-option__container__option__text'>
                    Share
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default RightOption