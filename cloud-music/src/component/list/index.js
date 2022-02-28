import React from 'react';
import './index.scss';
import {formatCount} from '../../api/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeadphonesSimple,
} from '@fortawesome/free-solid-svg-icons';

function RecommendList(props) {
    return (
        <div className='recommend'>
            <div className='title'>推荐歌单</div>
            <div className='recommend-list'>
                {
                    props.list.map((item, index) =>
                        <div className='recommend-item' key={index}>
                            <div className='img-box'>
                                <img alt='' src={item.url} />
                            </div>
                            <div className='message'>
                                <span className='name'>{item.name}</span>
                                <span>
                                    <FontAwesomeIcon icon={faHeadphonesSimple} />
                                    {formatCount(item.count)}
                                </span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default React.memo(RecommendList);