import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import './index.scss';

const Scroll = forwardRef((props, ref) => {
    const [bScroll, setBScroll] = useState();
    const scrollRef = useRef();
    const {
        direction,
        click,
        refresh,
        onScroll,
        pullUp,
        pullDown,
        pullUpLoading,
        pullDownLoadinng,
        bounceTop,
        bounceBottom,
    } = props;

    // 创建better-scroll
    useEffect(() => {
        const scroll = new BScroll(scrollRef.current, {
            scrollX: direction === 'horizontal',
            scrollY: direction === 'vertical',
            probeType: 3,
            click: click,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom,
            },
            mouseWheel: true
        });
        setBScroll(scroll);
        return () => {
            setBScroll(null);
        }
    }, []);

    // 处理刷新
    useEffect(() => {
        if (bScroll && refresh) {
            bScroll.refresh();
        }
    });

    // 处理滚动
    useEffect(() => {
        if (bScroll && onScroll) {
            bScroll.on('scroll', scroll => {
                onScroll(scroll);
            });
            return () => {
                bScroll.off('scroll');
            }
        }
    }, [bScroll, onScroll]);

    // 判断上拉
    useEffect(() => {
        if (bScroll && pullUp) {
            bScroll.on('up', () => {
                // todo
            });
            return () => {
                bScroll.off('up');
            }
        }
    }, [bScroll, pullUp]);

    // 判断下拉
    useEffect(() => {
        if (bScroll && pullDown) {
            bScroll.on('down', () => {
                // todo
            });
            return () => {
                bScroll.off('down');
            }
        }
    }, [bScroll, pullDown]);

    // 对外暴露方法
    useImperativeHandle(ref, () => ({
        refresh() {
            if (bScroll) {
                bScroll.refresh();
                bScroll.scrollTo(0, 0);
            }
        },
        getBScroll() {
            if (bScroll) {
                return bScroll;
            }
        }
    }));

    return (
        <div className='scroll-parent' ref={scrollRef}>
            {props.children}
        </div>
    );
});

Scroll.defaultProps = {
    direction: 'vertical',
    click: true,
    refresh: true,
    onScroll: null,
    pullUp: null,
    pullDown: null,
    pullUpLoading: false,
    pullDownLoadinng: false,
    bounceTop: false,
    bounceBottom: false,
};

Scroll.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    click: PropTypes.bool,
    refresh: PropTypes.bool,
    onScroll: PropTypes.func,
    pullUp: PropTypes.func,
    pullDown: PropTypes.func,
    pullUpLoading: PropTypes.bool,
    pullDownLoadinng: PropTypes.bool,
    bounceTop: PropTypes.bool,
    bounceBottom: PropTypes.bool,
};

export default Scroll;