import React from 'react';
import './index.scss';
import {formatCount} from '../../api/common';
import Lazyload from 'react-lazyload';

function RecommendList(props) {
    const {recommendList} = props;

    return (
        <div className='recommend'>
            <div className='title'>推荐歌单</div>
            <div className='recommend-list'>
                {
                    recommendList.map((item) =>
                        <div className='recommend-item' key={item.id}>
                            <div className='img-box'>
                                <Lazyload>
                                    <img alt='' src={item.picUrl} />
                                </Lazyload>
                            </div>
                            <div className='message'>
                                <span className='name'>{item.name}</span>
                            </div>
                            <div className='count'>
                                {formatCount(item.playCount)}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default React.memo(RecommendList);