import { extend, locale } from 'dayjs';
import 'dayjs/locale/ja';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

locale('ja');

extend(utc);
extend(timezone);
extend(localizedFormat);
extend(advancedFormat);
extend(relativeTime);
