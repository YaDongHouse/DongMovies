class DurationApi {
    /**
     * 将输入的秒数
     * @return {string} 转换后的01:23
     */
    static format(ms) {
        let fmt = '';
        let minute = parseInt(ms, 10);
        let second = 0;

        if (minute <= 60) {
            fmt = minute < 10 ? `0${minute}` : minute;
        } else {
            second = Math.floor(minute / 60);
            second = second < 10 ? `0${second}` : second;
            minute = Math.floor(minute % 60);
            minute = minute < 10 ? `0${minute}` : minute;
            fmt = `${second}:${minute}`;
        }
        return fmt;
    }
}
module.exports = DurationApi;
