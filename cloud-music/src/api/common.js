export const formatCount = (count) => {
    if (count < 1000) {
        return count;
    } else if (count < 10000) {
        return "999+";
    } else {
        return (count / 10000).toFixed(1) + "万";
    }
    
};